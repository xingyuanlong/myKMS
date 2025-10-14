
# JS 知识

### 1.JS 闭包，如何理解

什么是闭包？
**闭包是指一个函数能够记住并访问其词法作用域中的变量，即使该函数在其词法作用域之外执行。**

简单来说：**当一个函数内部定义了另一个函数，并且内部函数引用了外部函数的变量，就创建了一个闭包。**

闭包的实际应用

- 创建私有变量
- 在循环中使用闭包(解决引用问题)
- 模块模式

闭包的工作原理
JavaScript 的作用域链机制使得闭包成为可能：

- 每个函数在创建时都会保存对其词法环境的引用
- 当函数执行时，它会沿着作用域链查找变量
- 即使外部函数执行完毕，只要内部函数仍然存在，外部函数的变量就不会被垃圾回收

闭包风险

- 内存泄漏风险 ( 在不需要时手动解除引用)
- 性能考虑 过度使用闭包可能会影响性能，因为：需要维护额外的作用域链;变量查找时间可能增加;

### 2.描述 Event Loop 运行机制

1. 背景
JavaScript 是 单线程 的：同一时刻只能执行一个任务。但浏览器/Node 需要同时处理用户输入、网络请求、定时器、渲染等。
👉 为了解决“同时处理多任务”的需求，JS 引入了 事件循环（Event Loop） 机制。

Event Loop（事件循环）是 JavaScript 处理 异步操作 的核心机制。它允许 JavaScript 以 非阻塞 的方式执行代码，即使遇到 I/O 操作（如网络请求、定时器），也不会影响主线程继续执行其他任务。

三个核心关键概念

- Call Stack（调用栈）
  JS 引擎执行代码时，按照函数调用的嵌套关系入栈/出栈。同步代码按顺序直接在栈中运行。
- Task Queue（任务队列）
  异步任务完成后，将回调放入队列，等待主线程空闲时取出执行。
- Event Loop（事件循环）
  事件循环不断检查调用栈是否为空，如果为空，就从队列取出一个任务放入栈中执行。这个过程周而复始。

JS 中的任务按优先级分为 宏任务（Macrotask） 和 微任务（Microtask）。

- 宏任务（Macrotask）
  - 整体脚本 script
  - setTimeout / setInterval
  - setImmediate（Node）
  - I/O 回调
  - UI 渲染
  - JS 中用户输入（如 click、input、keydown 等 DOM 事件的回调）

- 微任务（Microtask）
  - Promise.then / catch / finally
  - queueMicrotask
  - MutationObserver（浏览器）
  - process.nextTick（Node）

规则：
每轮事件循环：

- 执行一个宏任务
- 执行所有微任务（直到清空微任务队列）
- 渲染（浏览器）
- 开始下一轮循环

**同步先执行，异步分队列；先宏后微，再渲染。**

Node.js：

- process.nextTick 优先级高于 Promise 微任务

### 3.网页多标签页之间如何通讯？和 iframe 如何通讯？

| 特性        | `BroadcastChannel` | `localStorage` + `storage` 事件 | `postMessage` + iframe / worker |
| --------- | ------------------ | ----------------------------- | ------------------------------- |
| 是否需要刷新    | 否                  | 否                             | 否                               |
| 是否支持多 Tab | ✅                  | ✅                             | 部分（需要 iframe/worker）            |
| 是否易用      | ✅（直接发送消息）          | 中等（需要 JSON 序列化）               | 较复杂（需建立通道）                      |
| 是否跨域      | ❌（只能同源）            | ❌                             | 可跨域（需正确设置 targetOrigin）         |
| 性能        | 较好                 | 一般（依赖 storage 事件）             | 较好                              |

### 4.前端常见的设计模式有哪些？以及应用场景

| 模式类型     | 设计模式              | 定义 / 核心思想                | 前端典型应用场景                               |
| -------- | ----------------- | ------------------------ | -------------------------------------- |
| **创建型**  | 工厂模式（Factory）     | 用一个工厂方法创建对象，解耦对象创建和使用    | 组件库动态创建组件（ButtonFactory）、Axios 不同配置实例  |
|          | 单例模式（Singleton）   | 保证类只有一个实例，并提供全局访问        | 全局 Store（Redux/Pinia）、全局弹窗/通知、全局缓存     |
| **结构型**  | 装饰器模式（Decorator）  | 不改变对象本身，动态给对象添加功能        | React 高阶组件（HOC）、TS 装饰器、函数增强（日志、权限）     |
|          | 代理模式（Proxy）       | 通过代理对象控制对目标对象访问          | Vue3 响应式、请求缓存、防抖/节流、懒加载                |
|          | 适配器模式（Adapter）    | 将不兼容接口转换为可用接口            | 封装第三方 SDK、统一后端接口格式、浏览器 API 兼容          |
| **行为型**  | 观察者模式（Observer）   | 对象状态改变时通知所有订阅者           | DOM 事件监听、Vue2 响应式依赖收集                  |
|          | 发布订阅模式（Pub/Sub）   | 将事件和回调解耦，发布者触发事件，订阅者响应事件 | Redux / Vuex 的状态更新订阅、EventBus、跨组件通信/pinia    |
|          | 策略模式（Strategy）    | 封装一系列算法，可互换              | 表单验证策略、支付方式选择、动画策略                     |
|          | 命令模式（Command）     | 将请求封装为对象，便于参数化和管理        | 富文本编辑器命令、Undo/Redo、Canvas 绘图命令         |
| **前端特有** | 组合模式（Composition） | 通过组合而非继承实现功能复用           | React children、Vue 插槽（Slot）、Hooks 组合逻辑 |
|          | MVVM / 单向数据流      | 数据驱动视图，状态单向流动            | Vue / Angular MVVM、React + Redux       |

### 5.浏览器从输入 url 到显示网页的全过程

### 6.从 0 搭建一个前端项目，需要考虑哪些方面

主要是框架/库, 工具链 和cicd 选择

- 技术选型：框架、状态管理、工具链、UI 组件库
- 项目架构：目录结构、模块化、路由、状态管理、接口管理
- 开发与运维：构建优化、测试、性能、安全、CI/CD

### 7.  ajax 并发请求控制

现有 30 个异步请求需要发送，但由于某些原因，我们必须将同一时刻并发请求数量控制在 5 个以内

```
async function batchRequestAllSettled(tasks, batchSize = 5) {
  const results = []

  for (let i = 0; i < tasks.length; i += batchSize) {
    const batch = tasks.slice(i, i + batchSize).map(fn => fn())
    // 等待当前批次所有请求完成（成功或失败）
    const batchResults = await Promise.allSettled(batch)
    results.push(...batchResults)
  }

  return results
}

// 使用示例
const urls = Array.from({ length: 30 }, (_, i) => `https://api.example.com/data/${i}`)
const tasks = urls.map(url => () => fetch(url).then(res => res.json()))

batchRequestAllSettled(tasks, 5).then(results => {
  results.forEach((res, idx) => {
    if (res.status === 'fulfilled') console.log(`任务 ${idx} 成功`, res.value)
    else console.log(`任务 ${idx} 失败`, res.reason)
  })
})

```

### 8. 线上出了严重 bug 你该如何解决？

**先止损 → 再排查 → 然后修复 → 最后复盘防再发**

- 第一要务: **回滚，及时止损**
- 通知项目组成员，看谁最近有过上线—— 线上 bug 一般是最近一次上线导致的
- 在本地或测试环境浮现 bug，查找原因
- 修复，测试，重新上线
- 开**复盘会议**，以后如何规避此类问题 —— 总结经验教训

### 9. 你如何保障代码质量？

- 配置统一的 eslint 和 prettier 规则，规范代码格式
- 尽量组织 code review
- 使用 Sentry 等平台进行线上错误报警，并及时修复问题


### 10. esm 与 CommonJS 的循环引用

- CommonJS 模块规范在遇到循环引用时,Node 会返回当前已执行部分的 exports 对象.(Node 通过 require.cache 缓存机制避免了无限递归)
- ES Module（ESM）在循环引用时有“实时绑定（live binding）”机制, (静态分析 esm编译阶段就确定依赖关系，不是在运行时动态执行; 单例缓存：同一个模块只会被执行一次，并缓存结果; 实时绑定 (live binding)：import 的变量不是值拷贝，而是一个引用，对应 export 的内存位置。所以即使 export 后续被修改，import 端也能拿到最新的值。)

### 11. esm 中 import 会发生什么?

<Collapse>

(ES Module (ESM) 的 import 是编译期就确定依赖关系;ESM 默认是 严格模式，并且是 异步加载)

**解析阶段（Parsing）=> 加载阶段 => 实例化阶段 => 执行阶段 => 缓存**    
- 为每个模块创建 模块环境记录（Module Environment Record），里面存放变量绑定, 实时绑定:如果 export 的值后来被修改，
- import 端也能感知。ESM 的缓存机制是基于 URL/路径唯一性，并且在 异步上下文中生效。
- esm缓存生效场景: 同一个模块被多次 import; 循环依赖(缓存的“半成品”也会存起来，这样可以避免死循环);动态 import 多次;

</Collapse>

### 12. 在 JS 代码中避免内存泄漏的方法?

<Collapse>

1. 释放不再需要的引用(把对象置 null 或者移除属性，就能让 GC 正常回收。)
2. 避免全局变量
3. 小心闭包(闭包会一直保持引用,导致无法回收对象)
4. 定时器 / 事件监听要清理
5. 使用 WeakMap / WeakSet 存放临时对象
6. 避免 JSON.stringify 大对象
7. 复用对象 / 数组
8. 按需加载数据
9. 及时释放 DOM 引用

</Collapse>

### 13. es6 “继承在前，实例在后”?

<Collapse>

- new 子类发生什么: 创建子类实例对象 => 设置原型 => 父类构造函数执行  => 调用子类构造函数 => 子类构造函数继续执行
- 先创建空实例 → 调用子类 constructor → super() 调用父类 constructor → 父类属性挂载 → 回到子类挂载属性 → 实例返回。
- ES6 的 class extends 就是对寄生组合继承的语法封装

</Collapse>

### 14. script type="module" 是什么效果?

<Collapse>

- `<script type="module">` 会 异步下载和解析，等 HTML 解析完成后执行，按依赖顺序执行模块代码，类似加了 defer 的普通脚本，但支持模块化特性。
- `<script type="module" async>` 异步,下载完成立即执行,不保证顺序 (适合独立模块，不依赖 DOM，也不依赖其他模块执行顺序，比如统计脚本或广告脚本。)

</Collapse>

### 15. 文件的软链接与硬链接?

<Collapse>

- 硬链接 = 同一份文件的不同名字, 删除源文件,不影响数据，数据依然可访问,
- 软链接 = 指向另一个文件路径的快捷方式, 删除源文件,软链接链接失效

文件系统中使用一个叫做 inode（索引节点） 的结构来记录文件的真实内容。

- 硬链接: 多个文件名共享同一个 inode。
- 软链接: 一个独立的文件，里面保存着目标文件的路径。(更像是 Windows 的快捷方式)

</Collapse>



### 16.js 原型链, 作用是什么?

<Collapse>

- 原型链？
  在 JavaScript 里，每个对象都有一个隐藏属性 [[Prototype]]（通常通过 __proto__ 访问）。当我们访问一个对象的属性/方法时，如果对象本身没有，JS 引擎就会顺着 [[Prototype]] 向上找。这条由 [[Prototype]] 串起来的链路，就叫 原型链。

- 原型链的作用
  - 核心作用就是实现继承和共享属性/方法。
    - 继承机制：子对象可以通过原型链继承父对象的方法/属性。
    - 方法复用：所有实例共享同一个方法定义，避免每次 new 都复制一份。
    - 动态扩展：可以在运行时给 prototype 添加方法，所有实例立刻可用

原型链是 JS 实现继承的机制，通过逐层查找 [[Prototype]] 来实现属性/方法共享和复用。

</Collapse>


### 17. web components

<Collapse>

Web Components 是一套 浏览器原生的前端组件技术标准，让开发者能创建可复用、封装、独立于框架的组件
   - Custom Elements;Shadow DOM;HTML Templates;
   - 继承 HTMLElement , 使用 customElements

- 生命周期
  - constructor → 元素实例化
  - connectedCallback → 添加到 DOM
  - disconnectedCallback → 从 DOM 移除
  - attributeChangedCallback → 被观察属性变化

- 属性
  - HTML 属性与 JS 属性双向绑定
  - 使用 observedAttributes + attributeChangedCallback
  - 可以通过 getter/setter 做同步映射
    
- 自定义事件
  - 使用 dispatchEvent(new CustomEvent(...))
  - 穿透 Shadow DOM → composed: true
  - 冒泡 → bubbles: true
  - 建议只传小对象或数据引用
    
- 插槽
  - 提供组件可插入自定义内容的能力
  - `<slot>` 默认内容，外部可用 slot="name" 覆盖

- 属性/事件/插槽封装模式（常用技巧）
  - formatProps → 统一解析属性
  - emit → 封装 dispatchEvent，像 Vue emit
  - BaseComponent → 封装生命周期、属性监听、事件分发、props 解析

- 优点:
  - 原生支持;真正的封装;可复用性;互操作性;长期可用性
- 缺点: 
  - 生态和工具链;样式主题化困难;基础功能;SEO;

- 优化:
  - 使用 requestAnimationFrame 节流渲染
  - 维护虚拟 DOM / shadow DOM patch
  - 避免深度 DOM 查询，每次 render 只更新变化部分 

</Collapse>

