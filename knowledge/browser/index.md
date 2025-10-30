### 1.常见的性能指标

<Collapse>

Performance API 是浏览器提供的内置接口，用于测量网页的加载时间、资源性能和用户体验。

常见性能指标

- FP (First Paint)首次绘制 ，指用户第一次看到页面内容时的时间点（通常是背景颜色）。
- FCP (First Contentful Paint)首次内容绘制 ，页面中首个内容（如文字、图片）被绘制的时间点。 优化思路 ：减少 CSS 阻塞、优化首屏加载内容。
- LCP (Largest Contentful Paint)最大内容绘制 ，页面中最大内容元素（如主标题、图片）绘制完成的时间点。 优化思路 ：使用延迟加载策略、优化图像加载。
- CLS (Cumulative Layout Shift)累积布局偏移 ，页面加载过程中视觉内容意外变化的总量。 优化思路 ：设置明确的宽高，避免懒加载导致布局移动。
- FID (First Input Delay)首次输入延迟 ，用户第一次交互（如点击按钮）与浏览器响应之间的时间间隔。 优化思路 ：减少主线程阻塞。
- TTI (Time to Interactive)可交互时间 ，页面完成加载并能够快速响应用户交互的时间

</Collapse>


### 2. sourcemap 有何作用

<Collapse>

Source Map 是一种将压缩、混淆后的代码映射回源代码的文件，用于调试和定位错误。它的主要作用如下：

- 调试优化 ：在开发者工具中看到源代码而非压缩后的代码。
- 错误定位 ：在生产环境中准确定位代码错误。
- 性能分析 ：配合性能工具对源代码进行优化分析。

</Collapse>

### 3.什么是 HTTPS 中间人攻击，如何预防

<Collapse>

中间人攻击（MITM, Man-In-The-Middle） 是指攻击者拦截客户端与服务器之间的通信，获取敏感信息或篡改数据。

攻击原理

攻击者通过伪造证书或劫持网络流量，冒充服务器或客户端，使通信双方无法察觉中间人的存在。

常见攻击手段

| 攻击方式                  | 描述                          |
| --------------------- | --------------------------- |
| **伪造 CA 证书**          | 诱导用户安装恶意根证书，使浏览器信任攻击者签发的假证书 |
| **DNS 劫持**            | 篡改 DNS 解析，将域名指向攻击者的服务器      |
| **ARP 欺骗 / Wi-Fi 劫持** | 局域网或公共 Wi-Fi 中间人篡改流量        |
| **SSL Strip（降级攻击）**   | 强制将 HTTPS 降级为 HTTP，窃取明文数据   |


预防措施
- 1. 启用 HTTPS 和强证书验证
   - 配置 TLS 并购买可信的 SSL 证书。
   - 使用 HSTS（HTTP Strict Transport Security）强制 HTTPS 访问。
- 2. 证书固定（Certificate Pinning） 确保客户端只接受特定 CA 签发的证书。
- 3. 开启 CORS 配置 配置严格的跨域策略，减少不必要的网络暴露。
- 4. 安全头部配置
  - 设置 Content-Security-Policy 防止资源篡改。
  - 设置 Strict-Transport-Security 强制使用 HTTPS。
- 5. 客户端验证 通过双向 TLS（Mutual TLS）验证客户端身份。

</Collapse>


### 4.CSP 是什么

<Collapse>

CSP 内容安全策略(白名单制度) 告诉浏览器：哪些资源可以加载和执行，哪些不允许,用来 防御 XSS、点击劫持、数据注入 等攻击. HTTP 响应头: Content-Security-Policy

CSP 就像是网站的“白名单防火墙” 明确允许的脚本、样式、图片、字体等来源，其他一律拒绝。

CSP 常用指令
| 指令                            | 控制的内容               | 示例                                      |
| ----------------------------- | ------------------- | --------------------------------------- |
| **default-src**               | 默认资源加载策略            | `'self'`、`https:`                       |
| **script-src**                | JavaScript 来源       | `'self'`、`https://cdn.example.com`      |
| **style-src**                 | CSS 样式来源            | `'self'` `'unsafe-inline'`              |
| **img-src**                   | 图片来源                | `data:`、`https://images.example.com`    |
| **font-src**                  | 字体来源                | `'self'`、`https://fonts.googleapis.com` |
| **connect-src**               | AJAX / WebSocket 来源 | `'self'`、`https://api.example.com`      |
| **frame-src**                 | `<iframe>` 来源       | `'self'`、`https://youtube.com`          |
| **object-src**                | Flash / 插件来源        | `'none'`（推荐禁用）                          |
| **report-uri**                | 报告 CSP 违规           | `/csp-violation-report-endpoint/`       |
| **upgrade-insecure-requests** | 自动将 HTTP 升级为 HTTPS  | 无值                                      |

</Collapse>


### 5. webworker 可以调用 sessionStorage localStorage吗??


<Collapse>

**不可以**

Web Worker 的运行环境

- **Web Worker 是在 独立线程（Worker thread）中运行的。**

- **没有 DOM、没有 window 对象。**

- 只有少数全局对象可用
  ```self, postMessage, importScripts, fetch, XMLHttpRequest, IndexedDB, caches, crypto, setTimeout/setInterval, ...```

window.localStorage / window.sessionStorage 是 DOM API，属于主线程对象，因此 Worker 里不可访问。

</Collapse>
