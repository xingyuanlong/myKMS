# vue

### 1.vue 动态渲染组件的原理是什么

**本质是根据虚拟 DOM（VNode）的 type 动态切换组件**
动态组件就是根据 VNode 的 type 动态 patch，不同类型就卸载旧组件、挂载新组件。

-`Vue 模板编译 <component :is="currentComponent"> → createVNode(currentComponent)`

- 当 currentComponent 变化：
  - 生成新的 VNode
  - 调用 patch(oldVNode, newVNode)
  - 对比 VNode 类型：
    - 类型相同 → 复用组件实例
    - 类型不同 → 卸载旧组件，挂载新组件

如果是字符串 → 查找全局组件注册表
如果是组件对象 → 返回组件本身

**Vue 动态组件就是 根据 reactive/ref 的值动态生成 VNode type，然后通过 patch 更新组件实例，keep-alive 则通过缓存实例优化挂载卸载。**

### 2.Vue 项目可做哪些性能优化

- 减少不必要的响应式追踪
  - 用 markRaw() 包装不需要响应的对象
  - 使用 shallowReactive / shallowRef 避免深层递归依赖
- 使用 key 保证组件复用正确
- 合理的使用指令
  - 合理的使用 v-if 和 v-show 指令，避免不必要的渲染。
  - 使用 v-for 时，尽量提供唯一的 key ，避免重复渲染。
  - 使用 v-once 指令，只渲染一次，避免不必要的计算。
  - 使用 v-memo 指令，对使用v-for生成的列表进行渲染优化
- 组件优化
  - 合理使用 keep-alive 组件，缓存组件实例，避免重复渲染。
  - 合理划分组件，提升复用性和渲染性能。
- 响应式优化
  - watch的优化: 避免滥用深度监听，降低性能开销。对于频繁触发的响应式数据变化，可以通过防抖和节流优化监听逻辑。
- 异步组件懒加载
- 合理使用 Teleport 与 Suspense
- 减少模板内复杂计算
- 代码分割 & 按需加载
- Tree Shaking + 移除无用依赖
- 懒加载
- 渲染加 key
- 虚拟滚动
- ...

### 3. nextTick 原理是什么

**nextTick在下次 DOM 更新循环结束后执行回调，确保我们能操作到最新的 DOM 状态。**

Vue 采用 异步批量更新策略：

- 收集本轮所有的更新任务；
- 等当前“事件循环”结束后，一次性刷新 DOM；
- 保证更新最少、性能最好。

Vue 3 的 nextTick 实际上是封装了一个**微任务调度器（microtask scheduler）**。

```
// Vue3 内部核心实现伪代码
let pending = false
const queue = []

function queueFlush() {
  if (!pending) {
    pending = true
    Promise.resolve().then(flushJobs) // 微任务
  }
}

function flushJobs() {
  pending = false
  // 执行 watcher、渲染任务
  ...
  // 执行 nextTick 回调
  flushPostFlushCbs()
}

export function nextTick(cb) {
  return cb ? Promise.resolve().then(cb) : Promise.resolve()
}
```

Vue 内部维护了多个“任务队列”，它们依次执行：

| 队列名                 | 作用                             | 举例                          |
| ------------------- | ------------------------------ | --------------------------- |
| **job queue**       | 收集响应式副作用更新（组件 render、watch 回调） | 数据变化后重新渲染组件                 |
| **postFlushCbs**    | DOM 更新后执行                      | nextTick 回调、watch post 回调   |
| **microtask queue** | 最底层调度机制                        | Promise.resolve().then(...) |

所以 nextTick() 实际是在 DOM 更新完（flushJobs 执行后）被触发的。

因此 nextTick() 实际上是一个微任务级别的等待；所以它总是保证在本轮 DOM 更新完成后执行。

**nextTick 一定比 setTimeout 先执行。**
因为：

- nextTick 底层用的是 微任务（microtask）；
- setTimeout 属于 宏任务（macrotask）；
- 在一次事件循环中，微任务总是早于宏任务执行。

### 4.如何统一监听 Vue 组件报错

在 Vue 3 中，可以通过 全局错误处理器 （errorHandler） 和 生命周期钩子（例如 onErrorCaptured ）来统一监听和处理组件中的错误.

- 通过全局错误处理器 app.config.errorHandler
- 局部错误捕获（onErrorCaptured）
- Vue 只能捕获「Vue 运行时错误」，但是有些错误是全局 JavaScript 运行时错误（例如异步请求、脚本加载失败）。需要配合浏览器原生错误监听

### 5. 什么是 MVVM

MVVM（Model-View-ViewModel） 是一种用于构建用户界面的架构模式，用于现代的前端开发框架（Vue、Angular）。它通过 数据绑定 和 视图模型 提供了高效的 UI 更新和数据同步机制。

MVVM 模式主要由 Model （模型）、 View （视图）、 ViewModel （视图模型）三个部分组成。

Model表示程序的核心数据和业务逻辑，它不关心用户界面，只负责数据的获取、存储和处理，并提供与外界交互的接口。
View负责展示数据和用户交互，简单来说他就是我们看到的UI 组件或 HTML 页面。
ViewModel是连接 View 和 Model 的桥梁，它不直接操作视图或模型，而是通过数据绑定将两者连接起来。

**MVVM：让数据和视图自动同步（双向绑定）**

React 是一种 UI 声明式渲染的 View 层库，核心是 函数式 + 单向数据流。
Vue 是 MVVM 模型

| 对比项  | Vue (MVVM)     | React (View + State)       |
| ---- | -------------- | -------------------------- |
| 数据流  | 双向绑定           | 单向数据流                      |
| 绑定方式 | `v-model` 自动同步 | 手动 `onChange` + `setState` |
| 响应系统 | Proxy 响应式追踪    | 调用 `setState` 触发重新渲染       |
| 哲学思想 | 声明式 + 响应式      | 函数式 + 纯 UI 渲染              |
| 框架定位 | 完整 MVVM 框架     | UI 库（View 层）               |

### 6. Vue 组件初始化的各个阶段都做了什么？

从组件的创建到挂载到页面，再到组件的更新和销毁，每个阶段都有特定的任务和职责。
🎯 组件实例创建：当我们第一次访问页面时，Vue创建组件实例，解析props、data、methods等属性方法，在组合式API中，执行 setup()。
🎯 响应式系统建立：基于 Proxy 实现 reactive、ref，建立依赖收集和触发更新机制，props 传递时自动响应式处理。
🎯 模板编译与渲染：将 template 编译为渲染函数，Vue 3 通过 静态提升等方式优化性能，Vite 预编译 SFC（单文件组件）。
🎯 DOM 挂载：执行渲染函数生成 VNode，通过 Patch 算法 转换为真实 DOM 并插入页面，同时初始化子组件。mounted（Options API）或 onMounted（Composition API）触发，可进行 DOM 操作。
🎯 响应式更新：状态变更触发 Diff 算法 计算最小 DOM 更新，beforeUpdate、updated（Options API）或 onBeforeUpdate、onUpdated（Composition API）执行相应逻辑。
🎯 组件销毁：移除 DOM，清理副作用（解绑事件、销毁 watcher、清理 effect），递归卸载子组件，触发 beforeUnmount、unmounted（Options API）或 onBeforeUnmount、onUnmounted（Composition API）。

### 7.Vue3 如何实现双向数据绑定

**Vue 实现双向数据绑定的核心是通过响应式系统的 数据劫持和 观察者模式来实现的。**

Vue3 实现双向绑定的本质是这三层：
数据层（Model） ←→ 响应式系统（Reactivity） ←→ 视图层（View）

它主要依赖三个核心模块：

- Proxy + Reflect —— 数据劫持（响应式追踪）
- 依赖收集与触发更新（effect + scheduler）
- 模板编译生成 getter/setter 更新逻辑

 数据劫持：reactive() / ref()
  Proxy/Reflect
  get 时依赖收集, set 时触发更新

- track()：记录当前副作用（watchEffect、render 等）依赖了哪个数据；
- trigger()：数据变更时，重新运行依赖的副作用函数（更新视图）。

Vue3 的双向绑定本质是：

- 通过 Proxy 劫持数据 实现响应式追踪；
- 通过 effect 依赖收集与触发机制 实现自动更新；
- 通过 v-model 语法糖 + 事件机制 实现视图 ↔ 数据同步。

Proxy 的缺点:
- 对数组的一些边界问题
  - 数组索引越界修改无效
  - 部分原生方法不触发更新
- 性能问题
  - 嵌套非常深的对象,依赖收集和触发依然有开销
- Proxy 不支持原始类型
   - ref 是封装value的对象
- 



### 8.Vue 模板编译的过程

**模板解析、AST优化 和 代码生成**

```
模板字符串 (template)
       ↓
[1] 解析（Parse） → 生成 AST
       ↓
[2] 转换（Transform） → 优化、静态标记、指令处理
       ↓
[3] 生成（Generate） → 输出可执行的 render 函数

```

1. 模板解析: Vue 使用其解析器将 HTML 模板转换为 抽象语法树（AST）。在这个阶段，Vue 会分析模板中的标签、属性和指令，生成一颗树形结构。每个节点表示模板中的一个元素或属性。
2. AST优化: Vue 在生成渲染函数前，会对 AST 进行优化。优化的核心目标是标记 静态节点，在渲染时，Vue 可以跳过这些静态节点，提升性能。 还有动态标记.
3. 代码生成: 生成渲染函数是编译的最终阶段，这个阶段会将优化后的 AST 转换成 JavaScript 渲染函数。

### 9. vue 异步更新

Vue 会延迟更新 DOM，等同一轮事件循环中所有状态改动都完成后，再统一执行更新。

目的：
✅ 避免频繁的 DOM 重绘（性能优化）
✅ 保证多次修改只渲染一次（批量更新）
✅ 数据一致性：确保在同一事件循环中的所有数据变更后，视图一次性更新到最终状态。


```
数据变化（Proxy.set）
       ↓
触发依赖（trigger）
       ↓
派发更新任务（scheduler → queueJob）
       ↓
进入异步任务队列（微任务）
       ↓
批量执行更新（flushJobs）
       ↓
重新渲染组件（patch → diff → DOM 更新）
```

**响应式数据变化 → 触发依赖 effect → 将更新任务加入微任务队列 → 批量刷新渲染。**


### 10. vue watch computed 的区别


| 特性            | `computed`                                                | `watch`                                 |
| ------------- | --------------------------------------------------------- | --------------------------------------- |
| 目的 / 语义       | 用于声明式地 “从状态推导 / 派生” 一个响应式的新值                              | 用于监听状态变化，执行副作用逻辑（如 API 请求、日志、手动修改等）     |
| 缓存 / 重算       | 有缓存机制，只有依赖变化时才重新计算                                        | 每次被监听的源变化时，回调都会执行（无缓存）                  |
| 延迟 / 惰性       | 惰性求值 —— 只有在被访问时才计算                                        | 立即触发（可配置 `immediate: true`）             |
| 副作用能力         | 不推荐在 computed 中写副作用（应保持纯函数）                               | 正是用来执行副作用的场景，如异步操作、状态同步、DOM 操作等         |
| 输入 / 输出       | 通常是同步逻辑，返回值给模板或其他计算使用                                     | 回调可接收新值和旧值，执行任意复杂逻辑                     |
| 依赖跟踪          | 自动追踪内部访问的响应式变量作为依赖                                        | 明确指定被监听的响应式源（ref / reactive / getter 等） |
| 是否能监听深层对象 /数组 | 默认浅依赖；对于深层嵌套需要用 `computed(() => JSON.stringify(...))` 等技巧 | 可设置 `deep: true` 监听嵌套属性变化               |
| 适合场景          | 计算属性、派生状态、模板绑定等                                           | 异步逻辑、数据拉取、条件触发、清理副作用、观察状态变化等            |

原理:
- computed 底层是用 Vue 的响应式系统（effect + 依赖收集）包装的“缓存 getter”机制。只有其内部依赖发生变化时，才重新执行计算。

- watch 则是一个高阶封装，让你监听某个响应式源的变化，并在变化时执行回调。它不会缓存回调的结果，也不会阻止重复调用。

### 11. vue3 lis

<Collapse>

LIS 在 Diff 中的作用：找出不需要移动的节点，最小化 DOM 操作
- 1. 将新节点映射到旧节点索引序列
- 2. 求最长递增子序列（LIS）
- 3. 非 LIS 节点移动或创建
    
能够降低时间复杂度;大型表格、树结构、虚拟列表和移动频繁但大部分节点不变的场景, 效果好.

</Collapse>

### 12. vue3 类似react hooks的原理是什么?

<Collapse>

Composition API（组合式 API）。
虽然它们在目的（解决状态逻辑复用、组织代码）上非常相似，但它们的核心实现原理完全不同。

- React Hooks 的原理：基于“调用顺序”和“链表”
- Vue Composition API 的原理：基于“响应式系统”和“依赖追踪”


React Hooks 的核心原理: 
- 核心机制：基于“调用顺序”
- 运行方式： React 组件的函数体在每次渲染时都会重新执行。

React 在内部为每个组件实例维护了一个**特殊数据结构（可以想象成一个数组或链表）**来存储 Hooks 的状态。
这就是为什么 React Hooks 有严格的“规则”：
- 不能在条件（if）或循环（for）中调用 Hooks。
- 必须在函数顶层调用

Vue Composition API 的核心原理:
Vue 的原理则完全不同，它不依赖于“调用顺序”，因此没有 React Hooks 的那些限制。
- 核心机制：基于“响应式系统”（Reactivity System）
- 运行方式： setup() 函数在组件实例创建时只执行一次。

Vue 3 的响应式系统是独立于组件的。当你调用 ref 或 reactive 时，你创建的是一个独立的、可被追踪的响应式对象。

setup() 只执行一次
这是与 React 的最大区别。
- React 的函数组件每次渲染都会重新执行，所以它需要“调用顺序”来找回状态。
- Vue 的 setup() 只在组件初始化时执行一次。

**ref 和 reactive 创建的状态只被创建一次，然后被闭包引用，它们在组件的整个生命周期中都是持久的。**

| 特性       | React Hooks                                 | Vue Composition API                                 |
| ---------- | ------------------------------------------- | --------------------------------------------------- |
| 核心原理   | 调用顺序 (Call Order)                       | 依赖追踪 (Dependency Tracking)                      |
| 状态机制   | React 内部的链表/数组                       | 独立的响应式对象 (Proxy / Ref)                      |
| 函数执行   | 组件函数每次渲染都执行                      | setup() 只执行一次                                  |
| 使用限制   | 有（Rules of Hooks，不能在 if/for 中）       | 无（可以在 if/for 中，因为状态是独立的）           |
| 心智模型   | “每次渲染都是全新的”                        | “状态是持久的，当它变化时自动触发更新”             |




</Collapse>
