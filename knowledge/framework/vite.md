
## webpack

### 1.Webpack 的工作流程

<Collapse>

Webpack 的工作流程

- 1. 入口（Entry）：从指定文件（如 index.js）开始分析依赖。
- 2. 依赖图（Dependency Graph）：递归构建模块间的依赖关系。
- 3. 加载器（Loaders）：转换非 JS 资源（如编译 Sass、处理图片）。
- 4. 插件（Plugins）：在构建生命周期中执行优化任务。
- 5. 输出（Output）：生成优化后的静态文件（如 bundle.js）。

</Collapse>

### 2.Webpack 中的 Loaders 和 Plugins 有什么区别

<Collapse>

| 对比项  | **Loader**                                 | **Plugin**                                                  |
| :--- | :----------------------------------------- | :---------------------------------------------------------- |
| 作用阶段 | 文件加载、转换阶段（打包前）                             | 编译、打包的整个生命周期                                                |
| 操作对象 | 单个模块文件（JS、CSS、图片等）                         | 整个编译过程（模块、资源、chunk、输出）                                      |
| 类型   | 转换器（Transformer）                           | 扩展器（Enhancer）                                               |
| 常见用途 | 把非 JS 资源转成 JS 模块                           | 优化、注入、压缩、环境变量等                                              |
| 调用方式 | `module.rules` 中配置 `use`                   | `plugins` 数组中配置                                             |
| 工作机制 | 线性执行（从右到左）                                 | 基于 Tapable 的事件钩子机制                                          |
| 示例   | `babel-loader`, `css-loader`, `url-loader` | `HtmlWebpackPlugin`, `DefinePlugin`, `MiniCssExtractPlugin` |

Loader 执行机制

- 串行执行（从右到左）；
- 每个 loader 接收上一个 loader 的结果；
- 只能处理文件内容字符串；
- 是一个纯函数（无副作用）。

Plugin 执行机制

- 通过 Webpack 的 Tapable 钩子系统；
- 插入到 Webpack 的编译生命周期中；
- 可以访问 compiler、compilation 对象；
- 可读可写资源、依赖、输出、日志等。

</Collapse>

### 3.Tree Shaking

<Collapse>

Tree Shaking = 静态分析 + dead code elimination

- 去除未使用代码的技术, ESM 的 import/export 是静态分析的. 本质目标：减少打包体积，把代码中 未引用的函数、变量、类 剔除掉。
- 支持条件:
  - 必须使用 ES Module;
  - 导出必须是静态; 副作用(如果模块执行会有副作用（如修改全局变量），Tree Shaking 默认不会移除整个模块).  
  - 动态 import 可以按需加载，但静态分析更高效;
  - 类库打包方式影响 Tree Shaking(lodash/es → 支持 Tree Shaking,lodash → CommonJS，不支持)

1. 静态分析：树摇依赖于ES2015模块语法（即 import 和 export ），因为这些语法声明是静态的，使得构建工具在编译时就能确定哪些代码是没有被使用的。

2. 标记未使用的导出：构建工具会遍历所有的导出项，标记那些在工程中未被其他模块引用的导出。

3. 移除未引用代码：在最终的打包文件中移除那些未被引用的代码，这样做不仅减少了文件大小，还能提高应用的加载速度和性能。

</Collapse>

### 4. Tree Shaking 对 css 有效吗

<Collapse>

- 纯 CSS 文件
  - Tree Shaking 无法分析哪些 CSS 类使用或未使用
  - 所以 未使用的 CSS 默认不会被移除
- CSS-in-JS / CSS Module
  - CSS-in-JS（如 styled-components, emotion）生成的 JS 代码
  - 对未使用的 styled 组件，Webpack/Rollup 的 Tree Shaking 可以删除对应 JS，从而间接删除样式
  - 但这需要 样式写在 JS 里，纯 CSS 文件不适用

- tailwind / PostCSS / PurgeCSS
  - 对于类名型 CSS（如 Tailwind、Bootstrap）
  - 可以使用工具 扫描项目源码，删除未使用类
  - 原理类似 Tree Shaking，但实际上是 静态 CSS 去重，不依赖 JS Tree Shaking

</Collapse>

### 5. webpack runtime 是啥

<Collapse>

**webpack runtime = 浏览器端的模块管理器 + 动态加载器 + 缓存器**

webpack 为了在浏览器执行模块打包后的代码而生成的一套加载、执行、管理模块的核心逻辑。

负责:

- 加载模块 (**webpack_require**)
  - 核心加载器，用来执行模块函数并返回 exports
  - 每个模块在打包后都变成一个函数 `(module, exports, **webpack_require**) => { … }`
- 缓存模块
  - webpack 会把每个模块的执行结果缓存，避免重复执行：
- 支持动态 import / chunk 加载
  - JSONP 或 Module Federation  加载
  - chunk 加载状态表
- 处理热更新（HMR）
  - 监听更新的 chunk；
  - 动态替换模块内容，不刷新页面

</Collapse>

### 6. webpack  有哪些优化项目的手段？

<Collapse>

围绕 webpack 做性能优化，分为两个方面： 构建时间优化 、 构建体积优化

- 构建时间优化
  - 缩小范围
  - 文件后缀
  - 别名
  - 缓存
  - 并行构建(多核心)
  - 定向查找第三方模块

- 构建结果优化
  - 压缩 js
  - 压缩 css
  - 压缩 html
  - 压缩图片
  - 按需加载
  - prload、prefetch
  - 代码分割
  - tree shaking
  - gzip
  - 作用域提升


</Collapse>
 

## vite

### 1. 简述Vite的依赖预加载机制

<Collapse>

**Vite 的依赖预构建机制通过在开发模式下提前处理常用依赖（如 Vue、React 等），将这些依赖转换为浏览器可以直接执行的格式。这避免了每次启动时重新编译这些依赖，显著提升了启动速度。** 预构建的依赖被缓存，并在后续启动时复用缓存，进一步加速了开发过程中的构建和启动时间。

具体来说，它的工作原理如下：

1. 依赖识别和路径补全： Vite 会首先识别项目中需要的依赖，并对非绝对路径或相对路径的引用进行路径补全。比如，Vue 的加载路径会变为 node_modules/.vite/deps/Vue.js?v=1484ebe8，这一路径显示了 Vite 在 node_modules/.vite/deps 文件夹下存放了经过预处理的依赖文件。
2. 转换成 ES 模块： 一些第三方包（特别是遵循 CommonJS 规范的包）在浏览器中无法直接使用。为了应对这种情况，Vite 会使用 esbuild 工具将这些依赖转换为符合 ES 模块规范的代码。转换后的代码会被存放在 node_modules/.vite/deps 文件夹下，这样浏览器就能直接识别并加载这些依赖。
3. 统一集成 ES 模块： Vite 会对每个包的不同模块进行统一集成，将各个分散的模块（如不同的 ES 函数或组件）合并成一个或几个文件。这不仅减少了浏览器发起多个请求的次数，还能够加快页面加载速度

</Collapse>

### 2. vite HMR 模块热更新 (与webpack对比)

<Collapse>

修改代码 → 浏览器自动更新 → 状态不丢失

基本工作原理

1. 开发服务器启动时：Vite 会用 ES Module 的方式向浏览器提供源码。
2. 文件变动：Vite 通过 chokidar 监听文件改动。
3. HMR 通知：Vite Dev Server 用 WebSocket 通知浏览器“某个模块变了”。type:'update', updates 更新的文件内容
4. 模块替换：浏览器端的 Vite HMR 客户端会：尝试只替换改动的模块（比如 .vue 组件、.css 文件）。如i18n.json 文件修改, 会刷新页面
5. import.meta.hot 可以手动控制 HMR 行为
6. Vite 内部维护一份 模块依赖图,向上传播，找接受更新的模块, 如果无法安全替换（比如入口文件改了），就会触发 整页刷新。

Webpack HMR:基本原理一致, 开发时需要 打包，生成 bundle.js, 因为有打包过程，HMR 会比 Vite 慢

为什么 Vite 的 HMR 比 Webpack 快？

  1. **Vite 基于 原生 ESM，不用重新打整个 bundle。**
  2. **改动时只编译改动文件（按需编译）。**
  3. **Webpack 需要走完整的打包流程，依赖图越大更新越慢。**
  4. 所以在大项目里，Webpack 热更新可能要几秒，而 Vite 通常 <100ms。

Vite 如何实现 React/Vue 的状态保留热更新？

  1. React：通过 @vitejs/plugin-react 集成 react-refresh，在替换组件时保留 Hook 状态。
  2. Vue：通过 @vitejs/plugin-vue，在替换 .vue 组件时保留组件实例的响应式状态。
  3. 本质：框架层插件拦截 HMR 更新过程，执行“局部替换 + 状态迁移”。

Vite HMR 可能带来的问题？

  1. 内存泄漏：模块替换时没清理事件监听 / 定时器。
  2. 调试复杂度：和实际生产行为不一致（生产中没有 HMR）。
  3. 兼容性问题：某些第三方库没有 HMR 支持，只能整页刷新

</Collapse>

### 3.Webpack 与 Vite

<Collapse>


| 对比项              | **Webpack**                                     | **Vite**                                      |
| :--------------- | :---------------------------------------------- | :-------------------------------------------- |
| **核心思想**         | 一次性**打包所有文件**再启动开发服务器                           | **按需编译（ESM 原生支持）**，依赖与源码分离处理                  |
| **启动阶段**         | 需先打包整个项目（构建依赖图 → 打包输出）                          | 启动极快，仅分析依赖，不预打包源码                             |
| **开发模式 (dev)**   | 使用 webpack-dev-server：<br>所有模块打包成 bundle 后再提供服务 | 使用原生 ESM：<br>直接通过浏览器请求模块，Vite 拦截并按需编译返回       |
| **热更新 (HMR)**    | 修改文件后需重新打包相关 chunk，代价较高                         | 仅重新编译变动的模块源码（原生 ESM 热替换），非常快                  |
| **构建阶段 (build)** | 打包时用 loader + plugin 处理所有文件，输出 bundle           | 构建阶段由 **Rollup** 完成打包（利用 ESM 静态分析）            |
| **打包粒度**         | 依赖与源码一起打包成 bundle                               | 依赖单独预构建（esbuild），源码按需处理                       |
| **依赖处理**         | JS、CSS、图片等都需 loader 解析                          | 依赖模块（node_modules）由 **esbuild** 预构建，源码按请求动态编译 |
| **性能瓶颈**         | 打包体积大、编译速度慢（依赖 AST 分析）                          | 使用 **esbuild（Go 编写）**，依赖构建快 10-100 倍          |
| **构建结果**         | 输出多个 bundle 文件                                  | 输出原生 ESM 模块（经 Rollup 优化）                      |
| **适用场景**         | 大型复杂项目，生态成熟（如 React + Webpack5）                 | 快速开发、现代浏览器环境（Vue3、React18）                    |
| **插件机制**         | Tapable 构建的复杂插件系统                               | Rollup + Vite Hook，轻量、直观                      |
| **配置复杂度**        | 配置项繁多（entry、loader、plugin 等）                    | 默认开箱即用，配置极简（vite.config.js）                   |
| **首次启动速度**       | 慢：需先打完整包                                        | 快：直接启动服务器即可运行                                 |
| **生产打包速度**       | 中等（依赖 JS 解析打包）                                  | 快：esbuild + Rollup 组合优化                       |
| **调试体验**         | 源码被打包，调试路径复杂                                    | 源码即模块，调试路径清晰                                  |
| **静态资源处理**       | 需配置 loader（file-loader/url-loader）              | 内置资源处理机制，直接 import 即可                         |
| **依赖缓存**         | 可配置 cache-loader                                | 自动缓存依赖（esbuild 缓存 + HTTP 缓存）                  |

- webpack 的打包流程: 读取配置 → 创建 Compiler → 从入口构建依赖图 → Loader 转换模块 → Plugin 优化 → 生成 Chunk → 输出文件。

- vite 开发时走原生 ESM + 按需编译，而生产环境走 Rollup 打包。vite 打包流程: 配置解析 -> 调用 Rollup 构建 -> 优化处理 -> 产物生成


</Collapse>

### 4.ssr 是啥, 对比csr的优势和适用场景

<Collapse>

SSR（Server-Side Rendering） 是指在服务器端生成 HTML 内容，再发送到浏览器渲染，而不是浏览器端通过 JS 生成 DOM。

SSR 的核心实现原理:
SSR 的核心在于“同构（Isomorphic）”或“通用（Universal）”应用——即一套代码（通常是 React, Vue, Svelte 等）既能在服务器上运行，也能在客户端上运行。

核心实现流程如下：

1. 请求到达服务器

2. 服务器端路由与数据获取

- 路由匹配: 服务器根据请求的 URL 匹配到对应的页面组件
- 数据预取: 服务器在渲染组件之前，会执行该页面组件定义的“服务器端数据获取函数”（例如 Next.js 中的 getServerSideProps）。它会去调用数据库或 API，获取 ID 为 123 的产品数据。

3. 服务器端渲染（Render to String）

- 服务器使用框架提供的服务器端渲染 API（例如 React 的 ReactDOMServer.renderToString()）来“执行”组件。
- 由于在第 2 步已经获取了数据，组件会被填充完整的数据（产品名称、价格、描述等）。
- 这个执行过程的产物不是一个虚拟 DOM，而是一个完整的 HTML 字符串。

4. 响应与首次渲染

- 服务器将这个完整的 HTML 字符串打包成一个 HTTP 响应，发送给浏览器。
- 浏览器接收到 HTML 后，立即解析并渲染。用户此时立刻就能看到页面的完整内容（这就是首屏加载极快的原因）。
- 注意：此时的页面只是“静态的”，没有任何交互（点击按钮没反应），因为它对应的 JavaScript 还没执行。

5. Hydration（注水/激活）
   - 在浏览器渲染 HTML 的同时，它会开始下载 CSR 模式下也需要的 JavaScript 包（例如 app.js）。
   - JS 下载并执行后，框架（如 React/Vue）会在客户端再次运行。
   - 但它不会粗暴地重新渲染并替换所有 DOM，而是执行一个称为 **"Hydration"（注水）**的过程。
   - Hydration 会**“接管”**服务器渲染的静态 DOM，遍历虚拟 DOM 和真实 DOM，将事件监听器（如 onClick）附加到现有的 HTML 元素上。
   - 这个过程完成后，页面就从“静态 HTML”变成了“可交互的单页应用（SPA）”。

核心流程图： **用户请求 → 服务器路由 → 服务器获取数据 → 服务器渲染 (生成HTML字符串) → 浏览器接收HTML并立即显示 → (并行)浏览器下载JS → JS执行 (Hydration) → 页面完全可交互**

SSR 相比 CSR 的不可替代优势:

CSR 最大的问题是“白屏时间长”和“SEO 灾难”。SSR 正是为解决这两个核心痛点而生，在以下场景具有不可替代的优势：

- 搜索引擎优化 (SEO)
- 极致的“首屏加载速度”（FCP）

</Collapse>

### 5.微前端 / import-html-entry 场景下，子应用中存在路由懒加载（dynamic import）的情况，import-html-entry 会如何处理或者需要注意什么

<Collapse>

import-html-entry 默认只处理 index.html 中的静态 script 和 link，所以懒加载模块不会被提前 fetch 或 exec。懒加载模块会在子应用自己的 webpack runtime 中正常 fetch（通过 publicPath 拼接 URL），然后动态加载。

- 懒加载的模块执行时会使用子应用的 runtime（webpackJsonp / webpackChunk），所以如果你在 import-html-entry 里用 sandbox proxy window，需要把 webpackJsonp / webpack_require 等 runtime 挂到 proxy 上，确保 chunk 加载执行正常。

- qiankun 会在 execScripts 中注入 sandbox proxy，保证动态 import 能访问 webpack runtime。

</Collapse>


### 6. CSS-in-JS  的优缺点

<Collapse>

| 优点                               | 说明                                     | 实际收益                        |
| -------------------------------- | -------------------------------------- | --------------------------- |
| **1️⃣ 样式作用域自动隔离**                | 每个组件的样式自动作用于自身，不会影响全局或其他组件             | 避免 CSS 命名冲突、全局污染            |
| **2️⃣ 动态样式支持（基于状态）**             | 可以直接使用 JS 变量、props、state 动态控制样式        | 让样式与逻辑无缝联动（例如根据主题、交互状态变化）   |
| **3️⃣ 真正的组件化开发体验**               | 样式与组件逻辑紧密绑定在一起（co-located）             | 提高可维护性与可读性，代码结构更清晰          |
| **4️⃣ 消除了全局命名问题**                | 自动生成唯一 className（hash）                 | 无需再手动设计命名规范（如 BEM / SMACSS） |
| **5️⃣ 支持服务端渲染（SSR）与关键路径 CSS 提取** | 框架（如 styled-components）可在 SSR 阶段注入 CSS | 提高首屏性能、避免闪烁（FOUC）           |
| **6️⃣ 更好的主题系统支持**                | 内置 ThemeProvider 概念，可动态切换主题            | 适合暗黑模式、品牌主题等需求              |
| **7️⃣ 死代码消除（Tree Shaking 友好）**   | 未使用组件的样式不会被打包                          | 打包体积更小、更干净                  |
| **8️⃣ 类型安全（TypeScript 集成）**      | 样式属性有类型提示与检查                           | 减少拼写错误与无效样式                 |
| **9️⃣ 样式动态计算能力**                 | 可以编写逻辑，如条件判断、循环、计算值                    | 复杂 UI 响应更灵活（如动态 grid、尺寸）    |
| **🔟 无需独立 CSS 构建管线**             | 不依赖 CSS Loader / PostCSS               | 前端构建配置更轻量（尤其在 Vite 等环境）     |


| 缺点         | 说明                                          |
| ---------- | ------------------------------------------- |
| **运行时开销**  | 一些库（如 styled-components）会在运行时动态生成样式，性能略低    |
| **构建体积稍大** | 比纯 CSS 稍重，需要额外 runtime                      |
| **调试难度**   | 虽然 devtools 支持不错，但不如传统 CSS 文件直观             |
| **学习成本**   | 对初学者来说，需要理解 styled-components 或 Emotion API |


| 场景                  | 是否推荐使用 CSS-in-JS |
| ------------------- | ---------------- |
| 设计系统 / UI 库（需要主题支持） | ✅ 强烈推荐           |
| React / Vue 组件化项目   | ✅ 推荐             |
| 静态网站（CSS 变化少）       | ⚙️ 可选            |
| 大型老项目（已用 SASS/BEM）  | ⚠️ 慎重迁移，成本较高     |


</Collapse>



### 其他

- webpack 打包速度分析, speed-measure-webpack-plugin, 打包大小分析: webpack-bundle-analyze
- 安装相同的但不同版本的组件库, 取别名 npm i alias@npm:name@^verison
- 灰度发布
  - 灰度发布:新版本不是一次性发布给所有用户，而是只让部分用户先体验，逐步扩大范围，最后全量替换旧版本。

| 对比项  | 灰度发布         | 蓝绿部署      |
| ---- | ------------ | --------- |
| 核心思想 | 逐步放量验证       | 一次性切换     |
| 流量分配 | 部分用户         | 全量流量      |
| 风险控制 | 可逐步调整比例      | 立即切换，风险更大 |
| 适用场景 | 新版本验证、A/B 测试 | 无缝升级部署    |

| 场景           | 技术方案               | 说明                      |
| ------------ | ------------------ | ----------------------- |
| 静态站点         | 多版本构建 + CDN 分流     | 通过 cookie/header 控制加载版本 |
| 微前端          | 子应用级灰度             | 不同用户加载不同子应用版本           |
| React/Vue 单页 | Feature Flag（功能开关） | 动态控制哪些功能显示              |
| 配合后端         | 接口层灰度              | 后端返回版本信息或新接口数据          |
