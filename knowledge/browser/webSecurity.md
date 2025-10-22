# web 安全

## 1.xss

<Collapse>

- XSS: 攻击者往网页里注入恶意脚本（通常是 JavaScript），当用户访问时这些脚本被执行，从而窃取数据、劫持会话或执行恶意操作.主要利用 前端页面缺乏输入/输出校验，把恶意代码“混”进正常页面。

XSS 的三种常见类型:

| 类型                              | 说明                          | 举例                                                |
| ------------------------------- | --------------------------- | ------------------------------------------------- |
| **1. 反射型 XSS（Reflected XSS）**   | 恶意代码直接拼接在 URL 中，通过点击链接触发。常见于搜索结果页、错误提示页。       | `https://example.com?q=<script>alert(1)</script>` |
| **2. 存储型 XSS（Stored XSS）**      | 攻击代码被存储到数据库或文件中，用户访问页面时，恶意代码被从服务器取出并执行。       | 在留言板输入 `<script>alert('XSS')</script>`            |
| **3. DOM 型 XSS（DOM-based XSS）** | 攻击代码在前端 JavaScript 中被动态插入页面(前端代码直接把 URL 或输入插入到 DOM，导致执行恶意脚本。) | 前端执行 `innerHTML = location.hash` 导致脚本注入           |

XSS 能干什么: 窃取 Cookie / LocalStorage / Token;劫持用户会话（伪造请求、冒充身份）;插入钓鱼页面，引导用户输入敏感信息;挂马（加载恶意脚本，挖矿、键盘监听）;DDoS（利用浏览器不断发请求）

- 防御:
    - 输入过滤 & 输出转义(对用户输入进行 HTML 转义);
    - 使用安全 API;
        - 使用 textContent / value / setAttribute（安全的 API）替代 innerHTML。
    - CSP（内容安全策略）; 
    - HTTP 头 Content-Security-Policy 限制页面能执行的脚本来源。
    - HttpOnly Cookie
    - 当必须允许用户提交 HTML（富文本编辑器）时，不要自己写正则，使用成熟库：DOMPurify（OWASP 推荐）。配置白名单和去除事件处理器（on*）、script、style、iframe 等潜在危险元素
    - 永远不要把 location.hash / location.search 等“未经验证”的值直接 innerHTML 或 eval。
    - 使用 DOMPurify 对插入的 HTML 做消毒。

**XSS 本质是“用户端执行了攻击者注入的脚本”。防御核心是：不信任输入 → 严格验证 → 安全输出，再辅以 CSP 和安全 cookie 设置。**

</Collapse>



## 2.csrf

<Collapse>

攻击者诱导用户在已登录的站点上发起非本意请求，从而在用户的身份权限下执行操作。
- 1. 用户已登录目标网站，并有有效 cookie 或认证信息。
- 2. 用户在其他站点点击恶意链接或加载攻击页面。
- 3. 浏览器会自动携带 cookie，目标网站无法区分请求是否本意。


典型攻击场景:
- 用户登录银行网站，保留 session cookie。
- 攻击者在另一个网站放了一个表单或 `<img> / <script>` 请求到银行的转账接口（POST/GET）。
- 用户在登录状态下访问攻击者页面，浏览器自动携带银行 cookie，银行服务器执行了转账请求。


防御手段:

- CSRF Token（同步/双向校验）—— 最常用且安全
    - 服务端为用户会话生成一个随机 token（例如放在 session 中），页面表单或 AJAX 请求必须提交该 token，服务端验证 token 与 session 中的一致性。

- SameSite Cookie
    - set-Cookie: session=...; SameSite=Strict 或 SameSite=Lax（或 None; Secure 当跨站时）。
    - Strict 最严格（跨站导航也不会携带），Lax 对 GET 跨站顶级导航允许但对多数跨站 POST/iframe 请求不携带 cookie，能防很多自动请求类 CSRF。

- 验证 Origin / Referer Header
    - 对于改变状态的请求（POST/PUT/DELETE），服务端检查 Origin 或 Referer 是否是受信任域

- Double Submit Cookie（双提交 Cookie）
    - 服务端发一个 CSRF token 到 cookie，客户端 JS 将该 token 读取并放到请求头或请求体中；服务端验证 cookie 和请求中 token 是否一致

- 禁止危险 HTTP 方法或只允许 JSON Content-Type; 避免敏感操作用 GET;

- 最小权限与敏感操作的二次确认

Cookie 自动携带，容易被 CSRF 利用；Token 需 JS 手动附加 Header，跨站点 JS 无法设置 → 自然防止 CSRF，但要防 XSS 窃取。


</Collapse>

## 3.点击劫持

<Collapse>

点击劫持是攻击者把目标站点页面嵌入到一个透明或不可见的 iframe（或覆盖层）里，并在上面放置诱导用户点击的元素（按钮、图片等）。用户以为点击了攻击页面的内容，实际上是在对被嵌入的受信任页面进行操作（例如授权、付款、修改设置等）。
本质是“把用户的点击重定向到受信任页面的 UI 元素”，属于 UI 重定向/社会工程类攻击。

典型攻击场景:
1.受害者登录到 bank.example.com，保持登录 cookie。

2.攻击者页面在自己的站点上嵌入 bank.example.com 的转账页面作为透明 iframe，并在其上放置「点我领红包」按钮。

3.用户点击“红包”，实际触发 iframe 内的“确认转账”按钮 -> 转账成功（浏览器自动带 cookie）。


防御手段:
- 在服务器端设置 HTTP header：Content-Security-Policy: frame-ancestors
    - 只允许来自同源或指定域的页面把本站嵌入 `<frame>/<iframe>/<object>`

- 设置 X-Frame-Options
    - 指定是否被被嵌入

- 对必须被嵌入的页面，严格限制来源并最小化权限
- 对敏感操作做“用户意愿”二次确认
- 服务器端对关键请求做额外校验

</Collapse>

## 4.sql注入

<Collapse>

SQL 注入 是攻击者把恶意 SQL 片段注入到应用构建的 SQL 查询中，借此改变查询逻辑、窃取/修改/删除数据库数据，甚至取得数据库后台权限。**根本原因通常是把不可信输入直接拼到 SQL 字符串里执行。**

防御原则:

- 参数化查询 / 预处理语句（Prepared Statements） — 首选。
- 最小权限数据库账户
- 严格输入校验和白名单
- 避免基于字符串拼接构建 SQL

</Collapse>


## 5.ddos

<Collapse>

DDoS 是攻击者用大量分布式流量或资源请求耗尽目标的带宽、CPU、连接数或应用资源，导致服务不可用。攻击类型常见：流量耗尽（Volumetric，如 UDP 放大）、协议耗尽（SYN flood、TCP state exhaustion）、应用层耗尽（HTTP request floods、slowloris、expensive endpoints）。

目标——防护要解决的三件事
- 快速检测（尽早发现）
- 自动缓解（在边缘/网络层拦截恶意流量）
- 稳定服务可用性（退化而不是崩溃，优先保证关键路径）

全栈防护策略:
- 边缘 + CDN / DDoS 护盾
    - 使用Cloudflare 等
- 网络层与骨干
- 负载均衡 + 弹性扩缩
- WAF / 应用层规则
- 速率限制与连接控制（应用与TCP层）
- 黑白名单与地理/ASN 过滤
- 检测与监控
- 运维与应急流程


</Collapse>

## 6. 爬虫

<Collapse>

- 良性爬虫：搜索引擎（Googlebot、Bingbot）、站点监控、归档服务（Wayback）等。通常遵守 **robots.txt**、标识自己 User‑Agent。

- 恶意 / 滥用爬虫：数据抓取（剽窃内容/价格/邮件）、刷流量、库存抢购、账号暴力破解、指纹探测、内容镜像等。常规目标：高并发、绕过付费或规则、占用资源。


检测爬虫:
- 请求速率异常（短时间大量请求、重复 pattern）。
- 单 IP 或 IP 段极高请求数；高并发连接。
- 不执行 JS（没有执行由 JS 注入的动态 token）、不接受或不返回 cookie。
- 常见或可疑 User-Agent（空 UA / 非主流 UA / 已知爬虫 UA 但伪造）。
- 不加载图片、样式、字体，只请求 HTML/API。
- 请求头异常（缺少常见浏览器头，如 Accept-Language、Sec-* 系列）。
- 相同行为来自大量不同 IP（分布式采集）。
- 执行路径规则：深层分页、批量ID遍历、只访问产品详情而非主页。
这些信号单独可能是误报，组合在一起更有可信度。

防御总体策略（分层防护）:

- 边缘与流量过滤
    - CDN / WAF（Cloudflare、Akamai、AWS WAF 等）做第一道防线：IP 黑名单、国家/ASN 屏蔽、速率限制、JS challenge。
- 速率限制 & 并发控制
- 身份与访问控制
- 行为分析与指纹
- 人机验证/验证码 
- 混淆 HTML / JS
- 法律与条款

前端与反爬虫:
- font-face拼凑式
    - 页面使用了font-face定义了字符集，并通过unicode去映射展示。也就是说，除去图像识别，必须同时爬取字符集，才能识别出数字。

- background拼凑式
    - 与font的策略类似。数字其实是图片，根据不同的background偏移，显示出不同的字符。

- 字符穿插式
    - 文章里，穿插了各种迷之字符，并且通过样式把这些字符隐藏掉。

- 伪元素隐藏式
    - 把关键的信息，做到了伪元素的content里

- 元素定位覆盖式
    - 关键信息, 通过不同元素不同的定位不同层的覆盖, 页面上显示正确的样式

- 字符分割式
    -  真假混合
- 字符集替换式
    - 重新定义了字符集，html 与实际显示不一致
- html2canvas
- User-Agent 检测;IP 频率检测;Cookie/Session 验证;JS 验证;Referer 检测;请求行为分析; referen 检查页面: 动态渲染 / JS 加密;Canvas / 图片验证码渲染;混淆 HTML / JS;验证码 / 人机验证;

</Collapse>

### 7.文件上传漏洞

<Collapse>

文件上传漏洞会导致: 
- 远程代码执行（RCE）：上传可执行脚本（.php/.jsp/.asp/.jspx/.aspx）并触发执行。
- 任意文件覆盖 / 覆盖重要文件：上传的文件覆盖现有文件导致服务异常或后门。
- 敏感数据泄露：上传包含敏感信息或把上传目录暴露到外网。
- 恶意文件分发 / 恶意二进制：传播木马、挖矿程序、恶意图片等给其他用户。
- 存储耗尽 / DoS：大量大文件上传耗尽磁盘或带宽。
- 安全绕过（MIME/扩展绕过）

常见攻击向量（列举）:
- 上传 .php 并通过 /uploads/shell.php 访问 -> RCE。
- 上传 .jpg 文件但实际是 PHP（混淆扩展或双扩展 like shell.jpg.php）并被服务器当作脚本执行。
- 在 filename 中使用 ../ 路径穿越覆盖关键文件（若服务端未规范化路径）。
- 通过大文件或并发上传耗尽磁盘 / 触发资源耗尽。
- 利用上传的 SVG（包含 JS）进行 XSS。
- 上传带有恶意 EXIF 的图片或特殊格式触发后端解析库漏洞。


防御原则:
- 最小信任：客户端输入（文件名、MIME、大小、扩展）均不可信。
- 白名单策略：只允许明确需要的一小部分扩展与 MIME（优于黑名单）。
- 多层检测：扩展名 + MIME 类型 + 文件头/魔数（magic bytes） + 内容扫描（AV/沙箱） + 元数据检查。
- 隔离存储：上传存储在不可执行、非 web 根目录的位置，或使用对象存储（S3）并通过后端签名/代理访问。
- 最小权限与不可执行：上传目录不可执行（noexec），文件系统权限最小化。
- 签名/校验与短期 URL：采用 signed URLs / presigned upload + 后端审核或触发异步扫描。
- 流式处理 + 限制：限制最大文件大小、文件类型、并发上传数、速率。
- 后续处理：异步病毒扫描、图像重编码（重新生成缩略图），移除可执行元数据。
- 日志与告警：所有上传活动审计、异常触发报警。

</Collapse>


最重要是: **安全的制度, 安全的管理**

如禁止把密码设置为: admin/123456 等