import{_ as a,c as n,o as p,ai as e}from"./chunks/framework.09HZKTj5.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/framework/app.md","filePath":"knowledge/framework/app.md"}'),i={name:"knowledge/framework/app.md"};function l(t,s,c,r,d,o){return p(),n("div",null,[...s[0]||(s[0]=[e(`<h3 id="小程序的架构" tabindex="-1">小程序的架构 <a class="header-anchor" href="#小程序的架构" aria-label="Permalink to “小程序的架构”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>┌───────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                  小程序运行环境               │</span></span>
<span class="line"><span>│-----------------------------------------------│</span></span>
<span class="line"><span>│      JS 逻辑层（App Service）                 │</span></span>
<span class="line"><span>│      - 业务逻辑、数据管理、接口请求           │</span></span>
<span class="line"><span>│      - 运行在独立的 JS 引擎（如 V8）          │</span></span>
<span class="line"><span>│-----------------------------------------------│</span></span>
<span class="line"><span>│      渲染层（View 层 / WebView）              │</span></span>
<span class="line"><span>│      - 各页面由独立的 WebView 渲染            │</span></span>
<span class="line"><span>│      - WXML + WXSS 负责结构和样式             │</span></span>
<span class="line"><span>│-----------------------------------------------│</span></span>
<span class="line"><span>│      系统层（Native / API 层）                │</span></span>
<span class="line"><span>│      - 提供原生能力：文件、网络、地理位置等   │</span></span>
<span class="line"><span>└───────────────────────────────────────────────┘</span></span></code></pre></div><p>小程序并不是直接用 DOM，而是采用「逻辑层（JS） ↔ 渲染层（WebView）」的分离架构：</p><table tabindex="0"><thead><tr><th>模块</th><th>运行环境</th><th>职责</th></tr></thead><tbody><tr><td><strong>逻辑层（App Service）</strong></td><td>JSCore / V8</td><td>执行业务逻辑、调用 API、操作数据</td></tr><tr><td><strong>渲染层（View 层）</strong></td><td>WebView</td><td>渲染页面结构（WXML）和样式（WXSS）</td></tr></tbody></table><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>App Service(JS逻辑)</span></span>
<span class="line"><span>     │</span></span>
<span class="line"><span>     │ JSON / bridge</span></span>
<span class="line"><span>     ▼</span></span>
<span class="line"><span>View 层(WebView)</span></span></code></pre></div><p>JS 逻辑层修改数据 → 通过 数据桥（bridge） 传给渲染层；</p><p>渲染层通过 数据绑定机制 更新界面；</p><p>用户操作（点击、滑动） → 事件再传回 JS 层</p><p>前后端交互:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>用户操作</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>渲染层触发事件</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>逻辑层接收 (JS)</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>调用 wx.request / wx.cloud / WebSocket</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>后端服务响应 (JSON 数据)</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>逻辑层 setData 更新状态</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>渲染层数据更新并刷新 UI</span></span></code></pre></div>`,10)])])}const k=a(i,[["render",l]]);export{g as __pageData,k as default};
