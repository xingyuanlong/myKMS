1.xss

XSS: 攻击者往网页里注入恶意脚本（通常是 JavaScript），当用户访问时这些脚本被执行，从而窃取数据、劫持会话或执行恶意操作。
        利用 前端页面缺乏输入/输出校验，把恶意代码“混”进正常页面。
        存储型 XSS: 恶意代码被存储到数据库/服务器（例如留言板、评论区）。用户访问页面时，恶意代码被从服务器取出并执行。
        反射型 XSS: 恶意代码直接拼接在 URL 中，通过点击链接触发。常见于搜索结果页、错误提示页。
        DOM 型 XSS: 不依赖服务器，漏洞在前端 JS 里。 前端代码直接把 URL 或输入插入到 DOM，导致执行恶意脚本。

        XSS 能干什么: 窃取 Cookie / LocalStorage / Token;劫持用户会话（伪造请求、冒充身份）;插入钓鱼页面，引导用户输入敏感信息;挂马（加载恶意脚本，挖矿、键盘监听）;DDoS（利用浏览器不断发请求）

        防御: 输入过滤 & 输出转义;使用安全 API;CSP（内容安全策略）; HTTP 头 Content-Security-Policy 限制页面能执行的脚本来源。HttpOnly Cookie

        当必须允许用户提交 HTML（富文本编辑器）时，不要自己写正则，使用成熟库：DOMPurify（OWASP 推荐）。配置白名单和去除事件处理器（on*）、script、style、iframe 等潜在危险元素


        防止 DOM-based XSS（客户端安全编码）

        永远不要把 location.hash / location.search 等“未经验证”的值直接 innerHTML 或 eval。

        使用 textContent / value / setAttribute（安全的 API）替代 innerHTML。

        使用 DOMPurify 对插入的 HTML 做消毒。

        XSS 本质是“用户端执行了攻击者注入的脚本”。防御核心是：不信任输入 → 严格验证 → 安全输出，再辅以 CSP 和安全 cookie 设置。
    2.csrf
        攻击者诱导用户在已登录的站点上发起非本意请求，从而在用户的身份权限下执行操作。
        1. 用户已登录目标网站，并有有效 cookie 或认证信息。
        2. 用户在其他站点点击恶意链接或加载攻击页面。
        3. 浏览器会自动携带 cookie，目标网站无法区分请求来源。

    CSRF 的典型攻击途径: get post
    防御: 服务端生成一个随机 token，绑定用户会话。页面表单或请求中携带 token，服务器验证;
            SameSite Cookie: Strict：严格禁止跨站请求携带 cookie
            验证 Referer / Origin;
            避免敏感操作用 GET;

    Cookie 自动携带，容易被 CSRF 利用；Token 需 JS 手动附加 Header，跨站点 JS 无法设置 → 自然防止 CSRF，但要防 XSS 窃取。
    3.点击劫持
    4.token
    5.sql注入
    6.文件上传
    7.认证与权限
    8.加密算法
    9.ddos
    10.爬虫
        防御web爬虫:    
    User-Agent 检测;IP 频率检测;Cookie/Session 验证;JS 验证;Referer 检测;请求行为分析; referen 检查
    页面: 动态渲染 / JS 加密;Canvas / 图片验证码渲染;混淆 HTML / JS;验证码 / 人机验证;

    11. 服务器安全