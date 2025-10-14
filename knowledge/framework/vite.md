
## webpack


### 1.Webpack 的工作流程

Webpack 的工作流程

- 1. 入口（Entry）：从指定文件（如 index.js）开始分析依赖。
- 2. 依赖图（Dependency Graph）：递归构建模块间的依赖关系。
- 3. 加载器（Loaders）：转换非 JS 资源（如编译 Sass、处理图片）。
- 4. 插件（Plugins）：在构建生命周期中执行优化任务。
- 5. 输出（Output）：生成优化后的静态文件（如 bundle.js）。

### 2.Webpack 中的 Loaders 和 Plugins 有什么区别

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


### 3.Tree Shaking

Tree Shaking = 静态分析 + dead code elimination
- 去除未使用代码的技术, ESM 的 import/export 是静态分析的. 本质目标：减少打包体积，把代码中 未引用的函数、变量、类 剔除掉。
- 支持条件: 
  - 必须使用 ES Module; 
  - 导出必须是静态; 副作用(如果模块执行会有副作用（如修改全局变量），Tree Shaking 默认不会移除整个模块).  
  - 动态 import 可以按需加载，但静态分析更高效; 
  - 类库打包方式影响 Tree Shaking(lodash/es → 支持 Tree Shaking,lodash → CommonJS，不支持)

---

## vite

### 1. 简述Vite的依赖预加载机制

**Vite 的依赖预构建机制通过在开发模式下提前处理常用依赖（如 Vue、React 等），将这些依赖转换为浏览器可以直接执行的格式。这避免了每次启动时重新编译这些依赖，显著提升了启动速度。**预构建的依赖被缓存，并在后续启动时复用缓存，进一步加速了开发过程中的构建和启动时间。

具体来说，它的工作原理如下：

1. 依赖识别和路径补全： Vite 会首先识别项目中需要的依赖，并对非绝对路径或相对路径的引用进行路径补全。比如，Vue 的加载路径会变为 node_modules/.vite/deps/Vue.js?v=1484ebe8，这一路径显示了 Vite 在 node_modules/.vite/deps 文件夹下存放了经过预处理的依赖文件。
2. 转换成 ES 模块： 一些第三方包（特别是遵循 CommonJS 规范的包）在浏览器中无法直接使用。为了应对这种情况，Vite 会使用 esbuild 工具将这些依赖转换为符合 ES 模块规范的代码。转换后的代码会被存放在 node_modules/.vite/deps 文件夹下，这样浏览器就能直接识别并加载这些依赖。
3. 统一集成 ES 模块： Vite 会对每个包的不同模块进行统一集成，将各个分散的模块（如不同的 ES 函数或组件）合并成一个或几个文件。这不仅减少了浏览器发起多个请求的次数，还能够加快页面加载速度

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
  1. Vite 基于 原生 ESM，不用重新打整个 bundle。
  2. 改动时只编译改动文件（按需编译）。
  3. Webpack 需要走完整的打包流程，依赖图越大更新越慢。
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


### .Webpack 与 Vite

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


### 其他

- webpack 打包速度分析, speed-measure-webpack-plugin, 打包大小分析: webpack-bundle-analyze
- 安装相同的但不同版本的组件库, 取别名 npm i alias@npm:name@^verison