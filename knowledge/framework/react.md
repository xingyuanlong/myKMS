# react

### 1. react尽量不要再内部定义组件


<Collapse>

```jsx
function App() {
  const [count, setCount] = useState(0);

  const Child = () => {
    useEffect(() => {
      console.log('Child mounted');
    }, []);
    return <div>child</div>;
  };
  const Child2 = useCallback(() => {
    useEffect(() => {
      console.log("Child mounted");
    }, []);
    return <div>child2</div>;
  }, []);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <Child />
      <Child2 />
    </>
  );
}

```

🔴 每次点击按钮，Child 都会重新挂载，副作用也会重新执行。

当父组件内部定义子组件时，每次父组件 render 都会创建一个新的函数对象。React 看到“类型变了”，认为它是一个全新的组件。结果：子组件每次都会被卸载并重新挂载。**可以使用 useCallback 优化**

- 什么时候可以在内部定义组件?
  - 组件依赖父组件的闭包变量
  - 性能无关的小组件
  - 需要动态生成组件类型

</Collapse>

### 2. 为什么修改 Context 后, 只有useContext 的组件才会重新渲染


<Collapse>

**React 内部是 精确追踪哪些 Fiber 消费了 Context。**

**React 的 Context 依赖 Fiber 树 + 依赖收集机制：**
1. Provider 提供 value。
2. useContext / Consumer 注册依赖。当一个组件调用 `useContext(MyContext)` 时：React 在 Fiber 构建阶段找到最近的 Provider，读取当前 Context value，同时把这个 Fiber 注册到 Context 的依赖列表，标记它依赖这个 Context。
3. Provider value 更新：React 调用 `scheduleUpdateOnFiber(providerFiber)` 更新 Provider，遍历 Fiber 树，只更新依赖该 Context 的 Fiber；没有调用 `useContext` / `Consumer` 的组件不会在依赖列表里 → 不触发重新渲染。

扩展

- 如果 Context value 对象每次都创建新引用, 即使 count 没变化，所有依赖 useContext 的组件也会渲染，因为对象引用变化。(优化使用 useMemo 缓存)
- 拆分 Context,将不同状态拆分成多个 Context，减少不必要更新。

再拓展: react Context 的原理

React Context 用于跨组件共享数据，避免多层嵌套的 props 传递。

**React Context 核心依赖 Fiber 树 和 依赖收集机制：**

React Context 的原理核心是 发布-订阅模式，它通过 createContext 创建通信频道，Provider 负责发布数据，Consumer 或 useContext 负责订阅数据。其更新机制绕过父组件的渲染优化，直接通知所有订阅者。

React Context 用于跨组件共享数据，避免 props 层层传递。其底层依赖 Fiber 树和依赖收集：
创建 Context 后，Provider 会把 value 写入 Context 对象；组件调用 useContext 时，Fiber 会读取最近的 Provider 的值，并在 Fiber 上记录对该 Context 的依赖。当 Provider 的 value 变化时，React 会标记并调度所有依赖该 Context 的 Fiber 重新渲染，其它未使用 useContext 的组件不会更新。
这种机制保证了 按需更新：只重渲染真正消费 Context 的组件，提高性能。在并发模式下，React 还为每个渲染器维护独立的 currentValue，确保多根树或并发渲染时 Context 值一致。为了避免无效更新，应尽量拆分 Context、用 useMemo 缓存 value，并让消费组件保持细粒度。


**setState → Provider 重新 render → 检测到 context value 改变 → 遍历 Fiber 树 + 依赖链，标记相关消费者 → 在这次渲染里重新执行这些组件函数。**

</Collapse>

### 3. React.memo 原理是啥


<Collapse>

**React.memo 是一个高阶组件（HOC），用于优化函数组件的渲染性能。它的核心原理是通过记忆（Memoization）组件的渲染结果，在 props 未变化时跳过重新渲染，直接返回上一次的渲染结果。**

```jsx
// React.memo 的简化实现逻辑
function memo(Component, arePropsEqual) {
  let lastProps = null;
  let lastResult = null;
  
  return function MemoizedComponent(nextProps) {
    // 使用默认的浅比较或自定义比较函数
    const propsEqual = arePropsEqual 
      ? arePropsEqual(lastProps, nextProps)
      : shallowEqual(lastProps, nextProps);
    
    if (propsEqual && lastResult !== null) {
      // props 未变化，返回缓存的结果
      return lastResult;
    }
    
    // props 变化了，重新渲染
    lastProps = nextProps;
    lastResult = Component(nextProps);
    return lastResult;
  };
}
```

React.memo 的核心原理是：

- 记忆化渲染结果，缓存上一次的渲染输出
- 浅比较 props，通过 Object.is 比较每个 prop
- 跳过不必要的渲染，当 props 未变化时直接返回缓存结果
- 支持自定义比较，通过第二个参数实现更精细的控制

</Collapse>

### 4.useMemo 原理是啥


<Collapse>

**在 Fiber 上保存一份“上次计算的值和依赖项”，如果依赖没有变化，就直接返回上一次的值，而不是重新计算。**

- 适合包裹 计算开销较大 或 返回稳定引用（如对象、回调函数）的情况。
- useMemo 不会阻止组件重渲染，它只是在渲染过程中复用上一次计算的结果。
- 如果依赖数组未变，返回的是上次缓存的引用（对象或函数也一样）。
- **如果依赖数组省略（即 []），计算只会在初次渲染时执行一次。**
- 缓存与组件生命周期绑定，自动清理
- **依赖项要准确填写，否则可能缓存了过期的值（产生 bug）**

</Collapse>

### 5.hook 缺少依赖, 会导致什么问题(React 闭包陷阱)


<Collapse>

表现:缺少依赖导致过时闭包

```jsx
function Timer() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // ❌ 问题：这里的 count 始终是 0（初始值）
      // 因为 useEffect 只在挂载时执行，闭包捕获了初始的 count
      setCount(count + 1);
      console.log('Count:', count); // 始终输出 0
    }, 1000);
    
    return () => clearInterval(interval);
  }, []); // ❌ 缺少 count 依赖
  
  return <div>计数: {count}</div>;
  // 组件首次渲染，count = 0
  // useEffect 执行，创建定时器，回调函数捕获了此时的 count = 0
  // 后续 count 更新，但 useEffect 不会重新执行（因为依赖数组为空）
  // 定时器回调中访问的 count 始终是最初捕获的 0
}
function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  const sendMessage = useCallback(() => {
    // ❌ 问题：这里的 messages 始终是初始的空数组
    // 因为 useCallback 在依赖不变时返回缓存的函数
    const newMessage = { text: input, timestamp: new Date() };
    setMessages([...messages, newMessage]); // messages 始终是 []
    setInput('');
  }, [input]); // ❌ 缺少 messages 依赖
  
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>发送</button>
    </div>
  );
}
```

缺少依赖的根本原因

1. React 在每次 render 时都会创建新的函数作用域 **Hooks 每次渲染都是全新执行的函数**
2. 如果依赖数组缺少某个在回调或 effect 中使用的变量，React 不会重新运行 Hook 来“刷新”闭包
3. 因此，Hook 内部的函数始终使用旧的变量快照 → 产生 过时闭包

js 角度, 闭包陷阱的根本原因是 JavaScript 的闭包机制：

- 当一个函数被定义时，它会捕获当前作用域中的变量。
- 如果这些变量是状态或 props，它们的值在函数定义时被“固定”下来。
- 当状态或 props 更新时，闭包中的值并不会自动更新。

最佳实践:

- 依赖声明的黄金法则: 所有在回调中使用的值都应该在依赖数组中声明
- 启用 ESLint 规则自动检测
- 使用函数式更新避免依赖状态值

</Collapse>

### 6. useEffect 和 useLayoutEffect 的区别

<Collapse>

**调用时机不同** 会直接影响 UI 渲染顺序和性能

| Hook                  | 调用时机                | 执行特点               | 适用场景                          |
| --------------------- | ------------------- | ------------------ | ----------------------------- |
| **`useEffect`**       | 浏览器完成绘制（paint）后异步执行（异步，下一帧） | 不阻塞浏览器绘制           | 数据获取、订阅、日志、定时器等               |
| **`useLayoutEffect`** | DOM 变更后、浏览器绘制前同步执行（同步，阻塞绘制）  | **阻塞绘制，先运行副作用，再渲染到屏幕** | 需要**测量 DOM 尺寸/位置** 或在绘制前做样式调整 |

总结

- useEffect: **异步执行，不阻塞渲染**(在浏览器绘制后执行 → 性能友好)，适合大多数副作用操作。
- useLayoutEffect: **同步执行，阻塞渲染**(在绘制前执行 → 用于 DOM 测量和避免闪烁)，适合需要在绘制前同步完成的副作用操作。

仅在必要时用 useLayoutEffect
比如：读取 DOM 布局信息（测量元素大小）;需要在绘制前同步修改 DOM 样式（避免闪烁)


```
Render 阶段（计算虚拟 DOM）
        ↓
DOM 更新（Commit 阶段）
        ↓
useLayoutEffect（同步执行） 👈 页面还没绘制
        ↓
浏览器绘制（Repaint）
        ↓
useEffect（异步执行） 👈 页面已经绘制
```

useLayoutEffect：在“本轮任务内、渲染前”执行（同步，阻塞 paint）。

useEffect：在“本轮渲染后、下一轮任务中”执行（异步，不阻塞 paint）。

</Collapse>

### 7.为何 dev 模式下 useEffect 执行两次？

<Collapse>

react 18后默认开启了 StrictMode, 使开发模式下，React 会刻意“多渲染一次”组件（mount → unmount → 再 mount），用来帮助我们发现不安全的副作用。

借助严格模式的目标是帮助开发者提前发现以下问题：

- **不纯的渲染逻辑**：例如，依赖外部状态或直接修改 DOM。
- **未正确清理的副作用**：例如，未在 useEffect 的清理函数中取消订阅或清除定时器。
- **不稳定的组件行为**：例如，组件在多次挂载和卸载时表现不一致。
通过强制组件挂载和卸载两次，React 可以更好地暴露这些问题, “多跑一次是为了更早发现问题，不是 Bug。”

</Collapse>


### 8.React state 不可变数据

<Collapse>

**State（状态）必须保持不可变（immutable）**

不可变数据（Immutable Data）:指的是一旦创建就不能直接修改的对象或数组。如果要更新，必须创建一个新对象/数组。

React 为何需要不可变数据

- 高效的重渲染判断, 性能好  
  - React 使用 浅比较（===） 判断 state 是否变化。
  - 只有引用变化（新对象/数组）才会认为状态更新。

- 避免副作用
  - 直接修改状态可能会导致意外的副作用，尤其是在异步操作或复杂组件中。
  - 不可变数据确保了状态的更新是纯函数式的，避免了副作用。
  - 不可变数据能保证“之前的渲染”不会被“之后的修改”影响。

- 可预测性
  - 不可变数据使得状态的变化更加可预测和可追踪。
  - 每次状态更新都会生成一个新的对象或数组，这样可以更容易地调试和追踪状态的变化历史

封装数据可以用 immer 库

</Collapse>


### 9.React state 异步更新

<Collapse>


setState 一般不是立即更新

为什么是异步的?
React 把 state 更新设计为 异步的、批量的（batching），主要有两个原因：

- 性能优化
  - 多次 setState 调用会被合并成一次渲染，避免重复渲染。

- 保证一致性
  React 18 引入 Concurrent Rendering（并发渲染），允许 React 中断、重用、跳过渲染。如果 state 是立即更新的，可能出现“半更新”的 UI 状态。

👉 所以 React 会先记录更新请求，然后在合适的时机（如事件处理结束后或下一个渲染周期）再去批量执行。

如果你需要基于 上一次的 state 来更新，应该用函数式写法.

在哪些场景异步?

- 在 React 控制的事件处理函数 中（如 onClick、onChange） → 异步批量更新
- 在 生命周期或 Effect 中 → 异步批量更新
- 在 异步回调（setTimeout、Promise.then）中 → React 18 之前是同步，18 开始默认也会批量更新

Automatic Batching

同步更新的场景:

- 非 React 管理的环境中(例如直接在浏览器事件监听器里更新)
- React DOM API 中的 flushSync
  - React 提供 flushSync 来强制立即刷新 state
- React 18 之前的版本
  - 在 setTimeout、Promise.then 等异步回调中 setState 是同步执行的
  - React 18 改为了默认批量处理

**异步更新如何实现的?**

React 的 setState 不会立刻改变 state，而是：

1. 先创建一个 更新对象（Update） 并加入到对应 Fiber 节点的更新队列中。
2. 调度器（Scheduler）决定何时进行 Render → Commit → Paint。
3. 在下一次渲染（Render Phase）时才根据队列计算新的 state。
4. 在 Commit Phase 把新的 state 应用到 DOM 并触发副作用（useEffect）。

因此我们看到的“异步”本质上是 **延迟应用 + 批量处理**。

</Collapse>


### 10. React 项目可做哪些性能优化？

<Collapse>

 **减少渲染次数、缩短渲染时间、降低资源体积、提升交互流畅度。**

渲染层优化:

- 减少不必要的渲染
  - 组件拆分：让状态尽量下沉到最小必要范围，避免父组件变化导致大范围子组件重渲染。
  - React.memo：对函数组件进行浅比较，如果 props 没变化就跳过重渲染。
  - useMemo / useCallback：缓存计算结果或函数引用，避免因引用变化导致子组件更新。
  - 避免内联函数/对象：频繁生成新引用会触发子组件重新渲染。
  - Key 使用稳定且唯一的值：避免列表渲染时产生无意义的卸载/挂载
- 避免昂贵的计算
  - 昂贵计算用 useMemo 缓存
  - 对需要频繁更新的复杂计算结果（如过滤、排序）可用惰性计算或selector（如 Reselect）。
  - 使用webwork
- 合理使用 Context
  - Context 变化会触发所有消费它的组件重渲染。
  - 对大规模依赖全局数据的场景，可用：redux

资源, 首屏与网络优化

- 代码拆分（Code Splitting）：用 React.lazy + Suspense 或 webpack dynamic import 按路由/组件拆分包
- Tree-shaking / Dead-code Elimination：减少未使用代码。
- 图片优化：压缩、懒加载（`<img loading="lazy" />`）。
- Gzip/Brotli 压缩、HTTP/2、多路复用。
- CDN 缓存静态资源。
- Server Components / SSR / SSG（Next.js）：减少客户端渲染压力，加快首屏时间。
  
列表与大数据优化

- 虚拟列表（Windowing）：react-window、react-virtualized。
- 对非常大的列表，使用增量渲染或分页加载。

</Collapse>


### 11.React项目中组件销毁有哪几种方式？

<Collapse>

1. 条件渲染（动态卸载）
2. 路由切换
3. 父组件卸载（连带子组件销毁）
4. useEffect 清理函数（资源释放）
5. 修改 key 强制重新挂载（重置组件）
6. 手动卸载（Portal 或第三方库）

</Collapse>


### 12. JSX 的本质是什么？

<Collapse>

**JSX 本质上是 JavaScript 的语法糖，它会被编译为 React.createElement(...) 或 React17+ 的 jsx(...) 调用，最终生成普通的 JavaScript 对象（VNode / 虚拟 DOM）。**

| 阶段                    | JSX 扮演的角色                                  |
| --------------------- | ------------------------------------------ |
| 编译时（Babel）            | 把 JSX 转换成 `React.createElement` 或 `jsx` 调用 |
| 运行时（React）            | 函数调用返回一个 JS 对象（虚拟 DOM）                     |
| 渲染时（React Reconciler） | 根据虚拟 DOM 更新真实 DOM                          |

</Collapse>

### 13.如何理解 React Fiber 架构？

<Collapse>

React Fiber 是 React16 引入的新架构，它解决了老版本 同步递归渲染 带来的卡顿问题，让 React 能够实现**可中断、可恢复的异步渲染**。

1. 为什么要有 Fiber

1.1 老架构（Stack Reconciler）的问题
React15 及以前的 Reconciler 是基于 递归调用 的。当组件树很大时，递归更新是一口气（synchronous）完成的，中途不能暂停。
如果更新耗时几十毫秒甚至上百毫秒，浏览器就无法及时响应用户输入或动画，造成掉帧、卡顿。

👉 需要一种机制能：

    - 把更新拆分成小任务
    - 按优先级执行
    - 在必要时暂停渲染，先处理用户交互，再回来继续

2. Fiber 的核心思想

Fiber 是对 React 更新过程的重构：
把原本递归的更新过程变成可中断的循环（迭代），并用一个 Fiber 数据结构 表示组件树中的每个节点。
每个 Fiber 节点本质上是一个 JS 对象.对应一个 React element.

```jsx
type Fiber = {
  type: any,             // 组件类型（函数/类/DOM标签）
  stateNode: any,        // 对应的DOM实例或类组件实例
  child: Fiber | null,   // 第一个子Fiber
  sibling: Fiber | null, // 下一个兄弟Fiber
  return: Fiber | null,  // 父Fiber
  pendingProps: any,     // 新的props
  memoizedState: any,    // 上一次渲染的state
  alternate: Fiber | null, // 双缓存指针
  flags: number,          // 标记需要执行的副作用
  lanes: Lanes.HighPriority, // 任务优先级
  ...
}
```

双向链表树结构，包含以下关键信息：

- 组件类型：函数组件、类组件或原生标签。
- 状态与副作用：Hooks 状态（如 useState）、生命周期标记（如 useEffect）。
- 调度信息：任务优先级（lane 模型）、到期时间（expirationTime）。
- 链表指针：child（子节点）、sibling（兄弟节点）、return（父节点）。

3. 双缓存（Double Buffering）

React 维护两棵 Fiber 树：

- current 树：当前已显示在页面上的 Fiber 树
- workInProgress 树：正在计算更新的新 Fiber 树

更新流程：
在 workInProgress 树上逐个构建 Fiber 节点（可中断）
完成后用一次 commit 阶段把 workInProgress 树切换为 current 树，并更新 DOM
👉 类似“画布双缓冲”，能避免中途渲染不完整。

4. 渲染流程拆分

Fiber 把渲染拆分为两大阶段：

1. Render 阶段（可中断）

- 也叫 “Reconciliation”(协调)
- 从根节点开始，按优先级遍历 Fiber 树
- 构建 workInProgress 树，标记需要更新的节点
- 如果浏览器需要打断（如用户输入、动画），可以中止，稍后继续

2. Commit 阶段（同步）

- 把 workInProgress 树的变更一次性提交到真实 DOM
- 这个阶段必须是同步的，不能被打断（否则 DOM 会不一致）

5. 优先级调度

React Fiber 引入了 优先级调度（Scheduler），在 React18 中与 Concurrent Mode 结合更强大。
React 通过 Lane 模型 管理任务优先级

```
  // 优先级从高到低
ImmediatePriority（用户输入）
UserBlockingPriority（悬停、点击）
NormalPriority（数据请求）
LowPriority（分析日志）
IdlePriority（非必要任务）
```

调度策略：
  高优先级任务可抢占低优先级任务的执行权。
  过期任务（如 Suspense 回退）会被强制同步执行。

- 高优先级：用户输入、焦点、动画
- 低优先级：不紧急的列表渲染、后台数据加载
- Fiber 节点在被调度时会携带类似自己的 expirationTime（过期时间），React 根据优先级决定先处理谁。

**React Fiber = 用链表数据结构重写组件树 + 分片可中断渲染 + 双缓冲提交 + 优先级调度**


- useTransition: Render 阶段可打断并延迟，Commit 阶段照常执行，但可能推迟到稍后。
      - 对 Render / Commit 的影响:Render 阶段：被标记为 transition 的更新，会放到低优先级队列里。高优先级（比如用户输入）会先 Render & Commit。低优先级 Render 可能会被 打断、延迟、重做。Commit 阶段：Commit 依旧是一次性、不可中断的。但由于 Render 被延迟，Commit 也可能推迟发生。用户可能先看到旧 UI（输入框响应快），再看到新 UI（列表刷新）

- useDeferredValue: Render 阶段被拆分成两批，Commit 阶段也可能分成多次。
    - 对 Render / Commit 的影响:Render 阶段：依赖 deferredValue 的组件渲染会延后。React 先 Render 其他部分 → Commit → UI 更新一部分。再 Render 依赖 deferredValue 的部分 → Commit → UI 补齐。Commit 阶段：可能出现 多次 Commit：先 Commit 高优先级的 UI（比如输入框内容）。再 Commit 低优先级的 UI（比如搜索结果）。

- Fiber 架构是机制，Concurrent Mode 是策略。
  - Fiber 提供了能力，并发模式利用了这些能力。
  - 具体来说：
    - Fiber 提供能力：
        - 将递归变成可中断的循环（time slicing）
        - 支持任务优先级和调度
        - 双 Fiber 树切换，支持渐进渲染
    - Concurrent Mode 使用这些能力：
        - 通过 useTransition 把某些更新标记为低优先级 → Fiber 可以延迟它们
        - 通过 Suspense 控制 UI 的显示顺序 → Fiber 可以中断和恢复渲染
        - 通过 startTransition、useDeferredValue 等 Hook → 利用 Fiber 的调度机制分配任务

- Fiber 是基础架构：解决了 React 渲染不可中断的问题。
  - Concurrent Mode 是应用层能力：利用 Fiber 提供的可中断渲染和任务调度，实现并发渲染、优先级管理和流畅的用户体验。
            没有 Fiber，就没有 Concurrent Mode。

</Collapse>


### 14. vue3 diff 算法 与react diff算法

<Collapse>


共同点:

| 特性                | Vue3 与 React 都有             |
| ----------------- | --------------------------- |
| **同层比较**          | 只比较同一层级节点，不考虑跨层级移动          |
| **类型判断复用**        | 节点类型相同则复用并继续比较子节点，不同则直接销毁重建 |
| **key 辅助列表 diff** | 通过 key 判断列表节点是否可复用、是否需要移动   |
| **复杂度 O(n)**      | 放弃最优解，追求可接受的线性时间复杂度         |

差异点:

| 方面             | Vue 3                                                                                    | React                                                     |
| -------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **整体架构**       | 运行时 + 编译时框架，编译器能在构建阶段分析模板，生成优化提示（PatchFlag）。<br>Diff 阶段根据这些标记跳过大部分无需更新的节点。               | 纯运行时框架，无法在编译期静态分析 JSX，只能在运行时比较新旧 VDOM。                    |
| **静态节点处理**     | **静态提升**：模板中完全静态的节点会在编译时提取出来，只创建一次，不参与 diff。<br>**PatchFlag** 精确标记动态绑定的属性或子节点，使得更新更有针对性。 | 没有静态提升，所有节点每次 render 都要重新比较。可以通过 `memo`、`useMemo` 等手动优化。  |
| **列表 diff 策略** | 使用 **双端指针算法（双指针 + 最长递增子序列 LIS）** 来计算最小移动次数。<br>即先比较两端相同节点，然后对中间乱序部分用 LIS 算法最小化 DOM 移动。   | 通过单向遍历 + key 映射来识别需要移动、插入、删除的节点，没有使用 LIS，只保证最小复用，不一定最少移动。 |
| **更新粒度**       | 模板编译后知道哪些部分是动态的，只 diff 有变化的部分 → 更新粒度细。                                                   | 组件 render 后得到新的 VDOM 树，需遍历整个子树 → 更新粒度较粗。                  |
| **组件更新策略**     | 有**响应式系统**（依赖收集 + effect），组件只会在依赖变化时重新渲染，减少 diff 次数。                                     | 没有内置响应式，组件 render 受父组件传入 props 或 state 改变驱动。              |
| **fiber 架构**   | Vue 3 仍是递归遍历 vnode，使用位运算优化，但没有 fiber 异步可中断更新。                                            | React 16+ 使用 Fiber，将 diff 拆分为可中断的单元，实现并发调度。               |

</Collapse>


### 15. React 事件

<Collapse>

React 事件系统是 React 为了实现 跨浏览器一致性、性能优化、与 Fiber 协调 而构建的一套合成事件机制（Synthetic Events）。
它不是直接把事件监听器绑定在 DOM 节点上，而是在内部做了一层封装。

- 跨浏览器兼容
- 性能优化（事件委托）
  - 直接给大量子节点绑定事件会消耗内存、频繁注册/销毁。
  - React 把事件委托到根容器上（React17 前是 document，React17+ 是组件挂载的根 DOM 节点）。
- 与 Fiber 更新配合
  - React 需要在 Reconciliation / Commit 阶段动态添加或删除事件，同时可以在事件回调中控制批量更新（batching）。

合成事件（SyntheticEvent）
React 在触发事件时，会把原生事件包装成一个合成事件对象，它：

- 提供与原生事件相同的属性（target、type、clientX…），保证跨浏览器一致。
- 对象来自 React 的事件池（event pool），性能优化：
  
React 渲染时不会直接给 button 注册原生 onclick，而是：

- 在根容器上注册一次统一的 click 监听器。
- 保存 button 对应的回调到 Fiber 节点的 props 中。

用户点击 button 时：

- 原生事件冒泡到根容器。
- React 根监听器捕获到事件，根据事件的 target 找到对应 Fiber 节点。
- 按虚拟 DOM 树的层级依次触发相关的合成事件回调。

👉 好处：减少原生事件绑定次数 + 跨浏览器统一行为。

- React17 之前：统一把事件绑定到 document。
- React17 之后：事件绑定改为绑定在根容器 DOM 节点（如 root），避免多个 React 应用之间的事件冲突，更易与原生事件混用。
- React 在合成事件回调中会自动开启批处理（batching），把多次 setState 合并为一次渲染更新：

</Collapse>

### 16. React batchUpdate 机制

<Collapse>

React 的 batchUpdate（批处理更新）机制 是一种优化策略，旨在将多个状态更新合并为一次渲染，减少不必要的组件重新渲染次数，从而提高性能。

核心机制

1. 异步合并更新 当在 同一执行上下文（如同一个事件处理函数、生命周期方法或 React 合成事件）中多次调用状态更新（如 setState、useState 的 setter 函数），React 不会立即触发渲染，而是将多个更新收集到一个队列中，最终合并为一次更新，统一计算新状态并渲染。

2. 更新队列 React 内部维护一个更新队列。在触发更新的代码块中，所有状态变更会被暂存到队列，直到代码执行完毕，React 才会一次性处理队列中的所有更新，生成新的虚拟 DOM，并通过 Diff 算法高效更新真实 DOM。

触发批处理的场景

- React 合成事件 如 onClick、onChange 等事件处理函数中的多次状态更新会自动批处理。
- React 生命周期函数
- React 18+ 的自动批处理增强 React 18 引入 createRoot 后，即使在异步操作（如 setTimeout(同一个 callback 的同步执行阶段)、Promise、原生事件回调）中的更新也会自动批处理：

绕过批处理的场景:

- React 17 及之前的异步代码 在 setTimeout、Promise 或原生事件回调中的更新默认不会批处理，每次 setState 触发一次渲染：
- 手动强制同步更新 使用 flushSync（React 18+）可强制立即更新，绕过批处理

设计目的

- 性能优化 避免频繁的 DOM 操作，减少浏览器重绘和回流，提升应用性能。

- 状态一致性 确保在同一个上下文中多次状态变更后，组件最终基于最新的状态值渲染，避免中间状态导致的 UI 不一致。

</Collapse>

### 17. React concurrency 并发机制是什么, 怎么体现的

<Collapse>

1. 背景：为什么需要并发机制
在 React16 之前（Stack Reconciler）：

- React 渲染是 同步阻塞式 的：
  - 一旦开始调和（reconcile），就会一路递归下去直到渲染完成。
  - 如果组件树很大，渲染会长时间占用主线程。
  - 期间浏览器不能响应用户输入、动画、滚动 → 卡顿（jank）。

在现代 Web 应用中：

- 用户交互、网络响应、动画等都在争夺主线程。
- 我们希望 渲染是可中断、可调度、分优先级的。

👉 Concurrent Rendering（并发渲染） 就是 React Fiber 在 16 以后引入的核心能力，真正实现在 渲染过程中可以打断、暂停、恢复、丢弃。

旧:

```
update → render → commit
         (整棵树一次性调和)
```

新:

```
update → render(可被打断、分段) → commit(同步)
```

- render 阶段是可中断的：React Fiber 允许每次只渲染一小段，然后把控制权交回浏览器。
- commit 阶段是同步的：最终将变更应用到 DOM 的步骤必须是原子的。
👉 这样，长时间的渲染任务可以被拆分成多个“小工作单元”，在浏览器有空闲时再继续。

2. Fiber 是并发的基础

Fiber 是 React 16 引入的数据结构与调度模型：

- 每个组件对应一个 Fiber 节点。
- 通过 Fiber 链表可以实现 增量渲染（incremental rendering）。
- 支持为不同更新分配 优先级（lanes）。

渲染调度大致流程：

- 把更新放入任务队列（Fiber root）。
- 按优先级选择下一个任务。
- 每次工作单元渲染后检查是否需要让出主线程（shouldYield）。

如果需要，先交还浏览器，下次空闲时再继续。

3. 并发机制的工作原理：

- **时间分片（Time Slicing）**： React 将渲染任务拆分为多个小片段，每个片段在主线程空闲时执行。这使得浏览器可以在渲染过程中处理用户输入和其他高优先级任务，避免长时间的渲染阻塞用户交互。
- **优先级调度（Priority Scheduling）**： React 为不同的更新分配不同的优先级。高优先级的更新（如用户输入）会被优先处理，而低优先级的更新（如数据预加载）可以在空闲时处理。
- **可中断渲染（Interruptible Rendering）**： 在并发模式下，React 可以中断当前的渲染任务，处理更高优先级的任务，然后再恢复之前的渲染。这确保了应用在长时间渲染过程中仍能保持响应性。

4. 并发机制的优势：

- **提升响应性**： 通过优先处理高优先级任务，React 能够更快地响应用户输入，提升用户体验。
- **优化性能**： 将渲染任务拆分为小片段，避免长时间的渲染阻塞，提升应用的整体性能。
- **更好的资源利用**： 在主线程空闲时处理低优先级任务，充分利用系统资源。

Concurrency 的体现

React18 默认开启了并发特性（通过 createRoot）。

常见体现：

- 可中断渲染
  - 当长列表渲染时：
    - 在同步模式下，渲染过程会一次性阻塞线程。
    - 在并发模式下，如果用户在渲染中点击了按钮，React 会暂停当前渲染，优先处理更高优先级的事件（如点击），然后再继续剩下的渲染
- startTransition
  有些更新是紧急的（urgent）（如输入框输入），有些是非紧急的（non-urgent）（如搜索结果列表更新）。
  - startTransition 把里面的更新标记为低优先级，可以被打断
- useDeferredValue
  - 延迟某些状态的更新，让界面先响应用户交互，再处理耗时渲染。
- Suspense
并发机制让 React 能够更好地协调数据请求和组件加载，例如：
  - 当异步数据尚未返回时，可以先显示 fallback，再在数据准备好后无缝渲染。
- React18 的 automatic batching
  - 在并发模式下，即便在 Promise 回调、setTimeout 中，也会自动批处理多次 setState，减少重复渲染。

**React Concurrency 是通过 Fiber 架构和调度器实现的一套可中断、可恢复、可优先级调度的渲染机制。**
它让 React 可以更好地响应用户交互，避免长时间阻塞主线程，并通过 startTransition、useDeferredValue、Suspense 等 API 显式利用这一能力。
并发机制不是“多线程”，而是让 React 的渲染任务能与浏览器任务“交替进行”，从而显著提升用户体验。

| 特性    | 同步模式（legacy）      | 并发模式（concurrent）                                           |
| ----- | ----------------- | ---------------------------------------------------------- |
| 渲染    | 一次性同步完成           | 可中断、可恢复、可丢弃                                                |
| 优先级   | 不区分               | 有优先级，先处理紧急任务                                               |
| 批处理   | 仅事件回调中            | 全局自动批处理                                                    |
| 交互流畅度 | 易卡顿               | 更流畅，响应更及时                                                  |
| API   | `ReactDOM.render` | `ReactDOM.createRoot`，`startTransition`，`useDeferredValue` |

</Collapse>


### 18.为何 Hooks 不能放在条件或循环之内？

<Collapse>

一个组件中的 hook 会以链表的形式串起来， FiberNode 的 memoizedState 中保存了 Hooks 链表中的第一个 Hook。

在更新时，会复用之前的 Hook，如果通过了条件或循环语句，增加或者删除 hooks，在复用 hooks 过程中，会产生复用 hooks状态和当前 hooks 不一致的问题。

Hooks 本质上是 函数组件的状态机 + 调度机制。
核心思想:
1. React 内部维护了一个 hooks 数组（链表），存放当前组件的所有 Hook 状态。
2. 每次渲染时，React 会按 调用顺序 执行 Hook。
3. useState、useEffect 等 Hook 本质上就是操作 hooks 数组对应的节点。

自定义 Hook：就是函数，里面可以用内置 Hook 来组合逻辑。

</Collapse>

### 19.useEffect 的底层是如何实现的

<Collapse>

useEffect 的角色

- useEffect 是一种 副作用 Hook，用来在 DOM 更新（commit）后 执行副作用逻辑，例如数据请求、订阅、手动操作 DOM 等。
- React 把副作用与渲染逻辑分离，保证渲染过程（render 阶段）是纯函数、可中断、可回溯的，而副作用统一推迟到 commit 阶段。

useEffect 依赖变化的处理

- 依赖数组的比较使用 Object.is()，只有依赖变化时才重新执行 useEffect。
- 更新阶段，React 遍历旧 effect，并先执行清理函数，然后再执行新的 effect。

React 渲染更新分为两个阶段：

| 阶段            | 说明                      | 是否允许副作用               |
| ------------- | ----------------------- | --------------------- |
| **Render 阶段** | 计算出新的 Fiber 树（可以被打断、重做） | ❌ 不允许（保持纯函数）          |
| **Commit 阶段** | 把变更提交到 DOM（同步）          | ✅ 执行副作用（包括 useEffect） |

所以：

- useEffect 中注册的回调 不会在 render 阶段立即执行；
- 而是记录在 Fiber 节点上，等到 commit 阶段 DOM 更新完成后，浏览器完成绘制后（宏任务后）再异步调用。

在 Fiber 节点上，每个函数组件会维护一个 **Hook 链表**：

```
type Hook = {
  memoizedState: any,        // 保存副作用依赖数组
  next: Hook | null          // 指向下一个 Hook
}

type Effect = {
  create: () => (() => void) | void  // 副作用函数
  destroy: (() => void) | void       // 清理函数
  deps: any[] | null                 // 依赖数组
  tag: number                        // 副作用标记
  next: Effect | null                // 形成循环链表
}
```

- 每个 useEffect 会创建一个 Hook 节点。
- 在这个 Hook 上保存一个 Effect 对象。
- 所有 Effect 通过循环链表挂在 Fiber 节点的 updateQueue 上，方便 commit 阶段统一处理。

调用 useEffect 时发生了什么
当组件函数执行到 useEffect 时（位于 render 阶段）：

- 1. React 通过 mountEffect（首渲染）或 updateEffect（更新）来处理。
    它不会立刻调用副作用函数，而是：
  - 保存 { create, deps } 到 Hook 中；
  - 打上 Passive 副作用标记；
- 2. 如果依赖数组发生变化，还会记录需要销毁上一次副作用。
- 3. 继续执行后续 Hook，直到组件渲染完毕。
👉 Render 阶段结束后，React 已经知道哪些 Effect 需要执行或清理。

Commit 阶段执行流程
在 commit 阶段，React 主要做两件事：

1）DOM 更新
  完成 Fiber 树标记的增删改 DOM 操作。

2）副作用处理
  在 DOM 更新完成后：
    - React 会遍历所有带有 Passive 标记的 Fiber 节点。
    - 对每个 Effect：
      - 如果有上一次的 destroy 函数 → 先执行清理。
      - 调用当前 create 副作用函数 → 并把返回值保存为新的 destroy。
    - 这一过程默认使用 scheduler 异步调度（相当于 setTimeout），保证副作用不会阻塞浏览器绘制。

// seEffect 与 useLayoutEffect 区别

| Hook              | 执行时机                          | 常见用途                |
| ----------------- | ----------------------------- | ------------------- |
| `useLayoutEffect` | commit 阶段 DOM 变更后、浏览器绘制前，同步执行 | 需要读取或修改布局的操作（如测量尺寸） |
| `useEffect`       | 浏览器绘制后异步执行                    | 数据请求、订阅、日志等不会影响首屏绘制 |

**总结**（面试要点）

- useEffect 本质是 在 Fiber 上注册副作用对象。
- 副作用在 commit 阶段（DOM 更新后）按需异步执行。
- 通过依赖数组 deps 判断是否重新运行或跳过。
- React 通过链表管理所有 Hook 和 Effect，方便批量处理。
- useEffect 保证 render 阶段纯净，而副作用延迟到合适时机执行。

</Collapse>


### 20.React 组件渲染和更新的全过程

<Collapse>

React 组件的渲染和更新过程涉及多个阶段，包括 **初始化、渲染、协调、提交、清理** 等
以下是 React 组件渲染和更新的全过程，结合源码逻辑和关键步骤进行详细分析。

1. 整体流程概述 React 的渲染和更新过程可以分为以下几个阶段：

- 初始化阶段：创建 Fiber 树和 Hooks 链表。
- 渲染阶段：生成新的虚拟 DOM（Fiber 树）。
- 协调阶段：对比新旧 Fiber 树，找出需要更新的部分。
- 提交阶段：将更新应用到真实 DOM。
- 清理阶段：重置全局变量，准备下一次更新。

2. 详细流程分析

（1）初始化阶段

    - 触发条件：组件首次渲染或状态/属性更新。
    - 关键函数：render、createRoot、scheduleUpdateOnFiber。
    - 逻辑：
      - 通过 ReactDOM.render 或 createRoot 初始化应用。
      - 创建根 Fiber 节点（HostRoot）。
      - 调用 scheduleUpdateOnFiber，将更新任务加入调度队列。

（2）渲染阶段

    - 触发条件：调度器开始执行任务。
    - 关键函数：performSyncWorkOnRoot、beginWork、renderWithHooks。
    - 逻辑：
      - 调用 performSyncWorkOnRoot，开始渲染任务。
      - 调用 beginWork，递归处理 Fiber 节点。
      - 对于函数组件，调用 renderWithHooks，执行组件函数并生成新的 Hooks 链表。
      - 对于类组件，调用 instance.render，生成新的虚拟 DOM。
      - 对于 Host 组件（如 div），生成对应的 DOM 节点。

（3）协调阶段

    - 触发条件：新的虚拟 DOM 生成后。
    - 关键函数：reconcileChildren、diff。
    - 逻辑：
      - 调用 reconcileChildren，对比新旧 Fiber 节点。
      - 根据 diff 算法，找出需要更新的节点。
      - 为需要更新的节点打上 Placement、Update、Deletion 等标记。

（4）提交阶段

    - 触发条件：协调阶段完成后。
    - 关键函数：commitRoot、commitWork。
    - 逻辑：
      - 调用 commitRoot，开始提交更新。
      - 调用 commitWork，递归处理 Fiber 节点。
      - 根据节点的标记，执行 DOM 操作（如插入、更新、删除）。
      - 调用生命周期钩子（如 componentDidMount、componentDidUpdate）。

（5）清理阶段
    - 触发条件：提交阶段完成后。
    - 关键函数：resetHooks、resetContext。
    - 逻辑：
        - 重置全局变量（如 currentlyRenderingFiber、currentHook）。
        - 清理上下文和副作用。
        - 准备下一次更新

React 渲染分为两阶段：Render 阶段负责根据 props 和 state 生成新的 Fiber 树，并进行 Diff；Commit 阶段把变更一次性应用到真实 DOM。
首次渲染是完整构建 Fiber 树并创建 DOM，更新时只计算需要变更的部分。
在 React18 并发模式下，Render 阶段可被打断以保证用户交互优先，Commit 阶段始终同步执行

| Hook              | 调用 `useXxx()` 本身 | 你传进去的回调/计算在什么时候跑？                                                | 属于哪个阶段                     |
| ----------------- | ---------------- | ---------------------------------------------------------------- | -------------------------- |
| `useState`        | 渲染阶段调用           | 没有额外回调，`setState` 只是排队更新，下次渲染时用新 state                           | **渲染阶段**                   |
| `useRef`          | 渲染阶段调用           | 没有异步回调，返回的 ref 对象在 render/commit 都可读写                            | 主要是 **渲染阶段** 初始化           |
| `useMemo`         | 渲染阶段调用           | 计算函数在渲染阶段执行（依赖变才重算），必须纯函数                                        | **渲染阶段**                   |
| `useCallback`     | 渲染阶段调用           | 只是把函数包起来做依赖比较，没有额外时机                                             | **渲染阶段**                   |
| `useLayoutEffect` | 渲染阶段注册           | cleanup + effect 回调在 **commit 阶段，同步执行，DOM 更新后、paint 前**          | **提交阶段（layout/pointer 前）** |
| `useEffect`       | 渲染阶段注册           | cleanup + effect 回调在 **commit 之后的“被动 effect 阶段”，异步执行，不阻塞 paint** | **提交之后（异步 passive 阶段）**    |


</Collapse>

### 21.React 优化

<Collapse>

1. React.memo：对于函数组件，React.memo 可以避免不必要的重新渲染。当组件的 props 没有变化时，React 会跳过重新渲染过程。
2. 在 JSX 中创建匿名函数或内联函数会导致每次渲染时都重新创建函数，从而触发子组件的重新渲染。尽量避免这种做法。 使用useCallback包裹避免重复创建函数, 避免重复渲染.
3. 使用唯一且稳定的key, 确保列表渲染正常
4. 在 React 中，函数的重新创建和复杂计算会影响性能，尤其是在父组件频繁重新渲染时。useMemo 可以缓存计算结果，而 useCallback 则缓存函数的引用。
5. 虚拟化 react-virtualized
6. 懒加载(Lazy Loading) 按需加载(Code Splitting)
  使用 React 的 Suspense 和 lazy 实现懒加载, 配合import() 方法实现
7. 使用 webpack 的代码分割
8. webpack Tree shaking  基于 es6 ESM 是静态结构，能被编译阶段静态分析。 手动优化大型库的 Tree Shaking 如dayjs, lodash
9. webpack-bundle-analyzer
10. 服务器端渲染（SSR）与静态站点生成（SSG）
11. 图片懒加载

</Collapse>

### 22. React 时间线

<Collapse>

```js

function Demo() {
  const [count, setCount] = useState(0)

  const expensiveValue = useMemo(() => {
    console.log('👀 useMemo compute', count)
    // 假设这是个很贵的计算
    let sum = 0
    for (let i = 0; i < 1e7; i++) sum += i * count
    return sum
  }, [count])

  useLayoutEffect(() => {
    console.log('🏗 layout effect', count, expensiveValue)
    return () => console.log('🏗 layout cleanup', count, expensiveValue)
  }, [count, expensiveValue])

  useEffect(() => {
    console.log('🪄 effect', count, expensiveValue)
    return () => console.log('🪄 effect cleanup', count, expensiveValue)
  }, [count, expensiveValue])

  return (
    <button onClick={() => setCount(c => c + 1)}>
      {count} - {expensiveValue}
    </button>
  )
}

```


```txt
┌─────────────── 一次“点击触发更新”的完整时间线 ───────────────┐

[宏任务：click 事件回调开始]
  |
  |  onClick 触发，调用 setCount(c => c + 1)
  |  -> React 记录一次 state 更新（放到更新队列）
  |
  |-- React render phase（协调阶段，可中断）-----------------
  |   （开始一次新的渲染）
  |
  |   1）执行函数组件 Demo()
  |        - 调用 useState(...)
  |          · 读到新的 count（比如 1）
  |
  |        - 调用 useMemo(() => { ... }, [count])
  |          · 检查依赖 [count] 是否改变
  |          · 如果变了（从 0 -> 1），就在**渲染阶段同步执行**
  |              console.log('👀 useMemo compute', count)
  |              进行昂贵计算，得到新的 expensiveValue
  |          · 如果没变就直接复用上次的结果，不执行工厂函数
  |
  |        - 调用 useLayoutEffect(...)
  |          · 这里只是**注册** layout effect，记录依赖
  |
  |        - 调用 useEffect(...)
  |          · 同样只是**注册** effect，记录依赖
  |
  |   2）根据新的 JSX / Fiber 计算出需要的 DOM 变更（diff）
  |
  |-- React commit phase（提交阶段，不可中断）---------------
  |
  |   3）DOM mutation
  |        - 按 diff 结果更新 DOM
  |        - 比如 button 文本从 "0 - 0" → "1 - 49999995000000"
  |
  |   4）执行所有需要的 useLayoutEffect cleanup
  |        - 上一轮渲染中 Demo 的 layout cleanup（如果有）
  |        - 顺序：按组件树 & 声明顺序
  |
  |   5）执行所有新的 useLayoutEffect 回调（同步）
  |        - console.log('🏗 layout effect', count, expensiveValue)
  |        - 此时 DOM 已更新，可以安全测量
  |        - 注意：这里会阻塞当前这一帧的 paint
  |
[commit 结束，把控制权还给浏览器]
  |
  |-- 浏览器：layout & paint ------------------------------
  |   - 计算样式布局
  |   - 把更新后的 DOM 真正画到屏幕上
  |
  |-- React flush passive effects（被动 effect 阶段，异步）---
  |
  |   6）执行所有需要的 useEffect cleanup
  |        - 上一轮渲染的 effect cleanup（如果依赖变了）
  |
  |   7）执行所有新的 useEffect 回调
  |        - console.log('🪄 effect', count, expensiveValue)
  |        - 适合做请求、订阅、日志等
  |        - 不再影响这次已经画好的这一帧
  |
[本轮更新结束]

└────────────────────────────────────────────────────────────┘

```

</Collapse>

### 23.在 React 应用中如何排查性能问题?

<Collapse>

  1. 浏览器层面（渲染、网络、JS 执行)
  2. React 本身（组件渲染、状态管理、diff 算法） React DevTools Profiler
    常见问题: 不必要的 re-render(状态提升过多，导致全局刷新,props 传递引用类型（对象/数组）时，每次 render 都创建新引用,解决：React.memo、useCallback、useMemo、状态下沉); 大列表渲染卡顿(列表虚拟化);重复计算 / 重逻辑;昂贵的 DOM 操作;

</Collapse>

### 24. useTransition useDeferredValue debounce 对比与原理

<Collapse>

| 特性            | `useTransition`                     | `useDeferredValue`            | 防抖（Debounce）             |
| ------------- | ----------------------------------- | ----------------------------- | ------------------------ |
| **React 内置**  | ✅ 是                                 | ✅ 是                           | ❌ 否（需自定义或使用第三方库）         |
| **控制粒度**      | 高：可控制更新的启动时机和优先级                    | 中：延迟值更新，适用于父组件传递的值            | 低：基于时间间隔控制更新频率           |
| **适用场景**      | 用户交互引发的状态更新，需控制更新优先级和反馈             | 父组件传递的频繁更新值，需避免子组件频繁渲染        | 输入框、搜索框等用户输入场景，减少频繁触发的操作 |
| **是否阻塞 UI**   | ❌ 否，更新被标记为低优先级，不会阻塞用户输入             | ❌ 否，延迟更新不会阻塞 UI，但可能导致 UI 延迟更新 | ❌ 否，延迟执行函数，避免频繁触发        |
| **是否可中断**     | ✅ 是，新的高优先级更新会中断当前低优先级更新             | ✅ 是，React 会根据当前任务的优先级处理更新     | ❌ 否，一旦设置时间间隔，无法中断        |
| **是否自动适应性能**  | ✅ 是，React 会根据设备性能自动调整更新策略           | ✅ 是，React 会根据设备性能自动调整延迟更新     | ❌ 否，固定的时间间隔不考虑设备性能       |
| **是否需要额外配置**  | ❌ 否，直接使用即可                          | ❌ 否，直接使用即可                    | ✅ 是，需要设置延迟时间和可能的取消机制     |
| **是否影响组件渲染**  | ✅ 是，可通过 `isPending` 状态判断更新是否完成，提供反馈 | ✅ 是，可通过比较原始值和延迟值判断是否需要更新 UI   | ✅ 是，延迟执行函数，减少不必要的渲染      |
| **是否适用于第三方库** | ❌ 否，需控制状态更新函数                       | ✅ 是，适用于无法控制状态更新的场景            | ✅ 是，适用于控制频繁触发的函数         |

</Collapse>

### 25.react suspence 与 lazy() 底层实现原理是什么?

<Collapse>

  **React.lazy 的底层是让组件在未加载时 抛出一个 Promise，而 Suspense 则在 Fiber 渲染时捕获这个 Promise，挂起渲染并显示 fallback，等 Promise resolve 后恢复渲染。**

  Suspense 作用:用于在子树中捕获“未就绪状态”，显示一个 fallback UI（比如 loading）。;与 ErrorBoundary 类似，只不过它捕获的是 **“Promise 挂起”。**

  React.lazy 把动态加载的组件封装成一个“会在未加载时抛出 Promise”的特殊组件。

  Suspense 作为“捕手”，在渲染子树时捕获这个 Promise，展示 fallback，并在 Promise resolve 后再重新渲染。

  Suspense,底层原理:

      - 渲染子组件时，如果子组件内部调用 lazy 还没 resolve，就会抛出一个 Promise。
      - React Fiber 架构检测到渲染过程中抛出了 Promise，会暂停当前 Fiber 树的渲染。
      - React 将这个 Promise 挂到 Suspense 边界上，等 Promise resolve 后重新触发渲染。
      - 在等待期间，Suspense 显示 fallback。

</Collapse>

### 26. react 如何实现国际化

<Collapse>

i18n 实现国际化

1. 动态语言切换 + 按需加载

  - 动态import+映射表,页面级组件在useEffect或路由加载时调用i18n.addResources(),减少初始打包体积，提高首屏加载速度, 使用缓存(localStorage / IndexedDB)
2. 日期/时间/数字/货币格式化

3. 自动提取翻译 Key & 多语言管理
  - i18next-scanner 扫描

4. i18n + 路由（多语言 URL）
  - :lang 作为路由参数, 配合effect, navigate loadLanguage实现
  
5. i18n 国际化对 React 组件性能的影响？如何优化？
    - react-i18next 会在语言切换时触发重新渲染依赖翻译的组件: 精准使用 useTranslation('namespace')(语言文件可以按 namespace 划分)，避免全局组件不必要渲染;
    - Trans 组件只包裹需要翻译的部分;
    - 使用 memoization (React.memo) 避免深层组件重复渲染, 避免重复 useTranslation, 子组件可通过 props 传递翻译后的文本,
react-i18next 使用 Context + Hook，组件通过 useTranslation() 获取翻译函数 t()


</Collapse>



### 27. 自己写的hooks

<Collapse>

   - 简单的 useLocalStorage; 
   - 基于useRequest封装项目使用useDict 提供 dict 功能,支持单个, 批量获取dict 初始化, 缓存, 刷新, getLabel; - useFlatOrgTree 获取机构树, 后端是List 的结构, 转化成Tree 结构, 还有把Tree 结构转化成list机构; 
   - useModal 把弹窗状态和打开关闭方法封装成一个hook(open 是的把对象传入);
   - usePermission 判断权限, useRequset: 
   - 基于 vueuse的useAsyncState 封装的 useRequset, 返回state,isLoading,isReady,run, 支持配置showMessage,formatResult,initialState, immediate等; 
   - useSearchTable 将 table 操作封装再里面; 
   - useConfirm 

</Collapse>

### 28.Redux Toolkit

<Collapse>

1. createSlice 内部用 Immer，允许你写“可变写法”，但底层会生成不可变的新 state。

2. createAsyncThunk 内部是如何工作的？
   - 生成一个 thunk action（函数），会在调用时触发一个 生命周期三段式：
      - pending → 异步任务开始
      - fulfilled → 异步任务成功
      - rejected → 异步任务失败
   - 内部用 dispatch 多次派发 action，而不是只派发一次。

3.Redux Toolkit 如何优化性能
  - 1.内置 Immer + useSelector 的 浅比较，减少无效渲染。
  - 2.createEntityAdapter 提供规范化数据结构（normalized state），避免深层次 diff。
  - 3. 配合 memo / useMemo / useCallback，只渲染必要组件。

4. 如果要在 Redux Toolkit 里实现一个 Undo/Redo 功能，怎么做？
  - 在 reducer 里维护一个 past[]、present、future[] 三段式结构。
  - 每次 dispatch：把当前 present 推入 pastpresent 替换为新 state
  - Undo → 从 past 弹出最后一个到 present，并把原先的 present 推入 future

</Collapse>

### 29. react usestate usereducer useref useeffece 原理

<Collapse>

环形队列就是：链表的最后一个节点的 next 指针 指向头节点，形成一个环。

- useState 的原理
  - 原理可以拆解成三个部分：状态保存、状态更新 和 触发渲染。 useState 把状态保存在 Fiber 的 Hook 链表中，setState 通过更新队列记录变化，并触发 Fiber 的调度和重新渲染，最终在下一次执行组件时计算出新状态。
  -  React 为什么需要 useState: 在函数组件里，普通的局部变量在函数执行完后会被销毁。React 通过 useState 把状态存放在 Fiber 节点 上，这样每次函数组件重新执行时，状态不会丢失。
  - 状态保存原理: 每个组件对应一个 Fiber 节点。Fiber 上有一个 memoizedState 属性，存储链表结构，保存多个 Hook 的状态。
  - 状态更新原理: 调用 setState 时, 会创建一个 更新对象, 放到对应 Hook 的更新队列里, 然后 React 会调度一次 组件重新渲染
  - 触发渲染机制: setState 本质上调用了 React 的 调度器，会标记当前 Fiber 为需要更新，然后触发一次 Fiber 调度 → Diff → commit → 重新渲染 流程。

- usereducer原理
  - useState 的原理一样, 是把状态更新逻辑抽出来交给 reducer 函数. 其实 React 内部 useState 就是 useReducer 的语法糖。
  - useReducer 本质上和 useState 一样，状态保存在 Fiber Hook 链表里，更新通过环形队列记录；不同的是，它通过 reducer(state, action) 把更新逻辑交给用户，让状态更新更可控。
```
function useState(initialState) {
    return useReducer((state, action) => {
        return typeof action === 'function' ? action(state) : action;
    }, initialState);
}
```

- useRef 原理
  - useRef 的作用就是：给你一个不会变的“盒子”来存放东西。
  - 和其他 Hooks 一样，useRef 也存放在 Fiber 的 Hook 链表里。 不同点在于：初次渲染时，React 会创建一个对象 { current: initialValue }，并保存到 memoizedState。之后的渲染，直接返回同一个对象。
  - 每次调用 useRef，拿到的都是同一个对象引用；修改 .current 不会触发渲染，因为 React 不会监听这个值的变化。

- useeffece 原理
  - React 提供 useEffect，把这些副作用挂到 Fiber 的副作用链表，在 DOM 更新提交之后 执行。(commit 阶段执行)
  - 可以分成三个阶段: 初次渲染, 提交阶段, 更新渲染
    - updateQueue（effect 链表）
    - layoutEffect（同步执行）：在 DOM 更新后，浏览器绘制之前执行（会阻塞渲染）。
    - effect（即 useEffect）（异步执行）：在浏览器完成绘制后执行，不会阻塞渲染
  - useEffect 的原理就是：在渲染时收集副作用，存到 Fiber 的effect链表；在commit阶段统一执行，并根据依赖数组判断是否需要重新运行，同时处理清理函数。

</Collapse>


### 30. react useEffect 依赖项为数据或者对象, 如何处理

<Collapse>


当 useEffect 的依赖项是数组或对象时，你可能会遇到一个陷阱：useEffect 会在每次组件重新渲染时都执行，即使数组或对象的内容“看起来”没有变化.

React 组件每次重新渲染时，在函数体内部定义的对象或数组都会被重新创建一个新的实例。比较时Object.is 始终为false,因此 effect 会重新执行

方案一：解构原始值 (Destructuring Primitives)
  - 取只关心其中的某些原始值

方案二：使用 useMemo 稳定引用 (Memoization)
  - useMemo 会缓存这个对象/数组，只有当 useMemo 自己的依赖项改变时，它才会重新创建一个新的对象/数组。

方案三：序列化为字符串 (Stringification)
  - 把它们转换成一个 JSON 字符串，因为字符串是原始值。

方案四：使用自定义 Hook (Deep Compare)
  - 创建一个自定义 Hook（例如 useRef）来存储前一个值，并在 useEffect 内部手动进行“深度比较”。

</Collapse>

### 31. jsx 为什么只允许有一个父节点

<Collapse>

**因为 JSX 最终会被编译成 JavaScript 函数调用，而 JavaScript 的函数一次只能返回一个值。**

核心原理：JSX 是 React.createElement() 的语法糖.

你写的 JSX 代码并不会直接在浏览器中运行。它需要一个转译器（最常见的是 Babel）将其转换为浏览器能理解的纯 JavaScript。
在 React 中，你写的每一段 JSX 标签都会被转译成一个 React.createElement(component, props, ...children) 函数调用
这个函数调用的返回值是一个 JavaScript 对象（用来描述你想要创建的 UI，也就是 React 元素或“虚拟 DOM”节点）

</Collapse>


### 32. react  函数式组件 setSate 会发生什么

<Collapse>

在 React 函数组件里调用 setState 会向当前 hook 的更新队列推入一个更新，并通过调度器批量安排一次重渲染；在下一次 render 阶段，React 会重新执行组件函数，用队列里的所有更新计算出新的 state，生成新的虚拟 DOM，再在 commit 阶段对真实 DOM 做 diff 更新，同时触发对应的 effect，所以当前 render 中的 state 不会立刻变化，变化只会体现在下一次渲染里。


</Collapse>




### 其他

- Immer 基于 Proxy（代理）拦截所有修改操作
  immer 的实现原理: 核心是 “Proxy + Draft”, Draft（草稿), Immer 会给传入的原始对象生成一个 草稿副本, Proxy, Immer 使用 JS Proxy 拦截对象的 get/set/delete 操作, 改 draft 时，实际上是在 Proxy 里被记录，而不是直接改原对象. Patch, Immer 会在修改结束后生成一个 差异记录（patch），用于生成最终的新对象,只有被修改的字段才会生成新的引用，其余保持引用不变（性能优化）。
- 再timeout 等异步操作中key使用 ref 读取最新的 state
- useImperativeHandle 可以限制子组件暴露的功能
- 要是多个 dom 需要获取多个ref, 可以放在一个ref内, 使用map  结构封装
- 将reducer 与 context 相结合，让任何组件读取和更新它的状态, 为子组件提供 state 和 dispatch 函数,创建两个 context (一个用于 state,一个用于 dispatch 函数),让组件的 context 使用 reducer,使用组件中需要读取的 context
- React 总是在执行下一轮渲染的 Effect 之前清理上一轮渲染的 Effect, 每个渲染的 Effect 都是相互独立的
- useSyncExternalStore 用内置的 Hook 订阅外部 store
- useCallback 就是封装 useMemo

  ```
  function useCallback(fn, deps) {
      return useMemo(() => fn, deps);
  }
  ```

- state 核心原理: state 存在 Fiber.memoizedState 链表里;更新通过环状链表队列存储;render 阶段重新计算最新 state;commit 阶段更新 DOM;异步 + 批量处理 保证性能
- useEffectEvent: 用 useEffectEvent 包裹一个函数，它返回的函数引用在组件整个生命周期内保持稳定;但函数内部读到的值永远是最新的 state/props。(useEffectEvent 的实现并不复杂 — 它的核心就是利用一个内部 ref 来保存当前的 callback，然后返回一个稳定的函数，调用时去执行最新的 callback)
- React 内部完整的更新过程可以拆成 调度（Schedule）→ 协调（Reconcile）→ 渲染（Render/Commit） 三个阶段。

  - 调度（Scheduling）目标：确定哪些更新先执行，保证优先级。核心：找到最紧急的更新任务，进入 Reconcile 阶段。
  - 协调（Reconciliation，Fiber 构建）目标：生成新的 Fiber 树，并标记需要修改的节点。结果：得到一棵新的 Fiber 树 + 副作用链表。
  - 渲染（Commit）目标：把变更真正应用到 DOM。Commit 阶段是同步的、不可中断，因为 UI 更新必须原子化。结果:DOM 与 Fiber 树同步，UI 展示最新状态。

- Fiber 的递归 = 深度优先遍历 Fiber 树。
  但实现方式不是函数递归，而是 链表 + 循环，能中断/恢复。
  Render 阶段就是不断执行 beginWork → completeWork，直到生成 effect list。

  “React Fiber 为什么要改用链表遍历而不是递归调用？”
  答：因为递归调用不能中断，而链表循环能在合适的时间切片，交还控制权给浏览器，避免卡顿。

   Fiber 的遍历过程:

   -（1）beginWork 阶段（向下走，构建子 Fiber）;先处理自己，再找 child。;如果有子节点，进入子节点。;如果没有子节点，进入 completeWork 阶段。
   - (2）completeWork 阶段（向上走，归并副作用）;没有子节点或子节点已经完成时，走 sibling。;如果没有 sibling，走 return（回到父节点）。;最后回到 root，完成整棵树

- 单个 Suspense 边界内：必须等所有子组件就绪，才能替换 fallback。想要部分先渲染 → 用多个 Suspense 边界包裹子组件

- React Router 的错误（loader/action/render）不会向外抛到 React 的全局 ErrorBoundary。它只会在路由树里「就地」捕获，然后渲染 errorElement。
    react ErrorBoundary 捕获的是 同步渲染阶段的错误。异步错误需要手动传递给边界。
    React 的 ErrorBoundary 只捕获渲染阶段的同步错误：render 方法;子组件 constructor;生命周期方法（class）;setState 或 derived state 时同步抛出的错误;useEffect 是 渲染完成后的副作用阶段，它执行在 commit 后，属于异步回调。即便你在 useEffect 里 throw new Error()，此时已经脱离了同步渲染阶段;React ErrorBoundary 无法捕获，只能抛到全局未捕获异常

- react lane 算法:
  Lane = Fiber 的任务优先级标记
  支持 并发渲染 + 批量更新 + 优先级调度
  React 内部算法：标记 Lane → 扫描最高优先级 → 协调更新 → 提交 → 清理 Lane

- React 18 的并发特性主要体现在：
  - 默认启用并发渲染（createRoot）
  - 优先级管理（startTransition / useTransition）
  - Suspense 数据加载（等待时不阻塞 UI）
  - 自动批处理（state 更新合并）
  - 底层 Fiber Lane 模型（调度 + 可中断 + 可恢复渲染）

- React Lane 模型就是用 位运算的通道（bitmask） 来管理不同优先级的更新，从而在并发渲染中做到 更灵活的任务调度与可中断渲染。
 
  | Lane 类型               | 典型任务                     | 优先级 |
  | ---------------------- | --------------------------- | ------ |
  | SyncLane               | 用户交互（点击、输入）         | 最高   |
  | InputContinuousLane    | 持续输入（滚动、拖拽）         | 高     |
  | DefaultLane            | 普通渲染任务                  | 中     |
  | TransitionLane         | 大更新（数据加载、页面切换）    | 低     |
  | IdleLane               | 空闲任务                      | 最低   |

- react工作原理
    React 的工作原理就是：通过 Fiber 架构把 UI 更新任务拆分成可中断的小任务，在协调阶段比对新旧 Fiber 树（Diff 算法），最后在提交阶段一次性同步更新真实 DOM 和副作用。

    React 的更新流程分为 调度（决定先后） → 协调（算出差异） → 渲染（一次性提交到 DOM），其中前两步可中断，最后一步必须同步完成。

- React 调度器
    React 调度器通过 MessageChannel 等事件循环机制把任务切片执行，并结合 Lanes（二进制优先级模型）来保证高优先级任务（如用户交互）能打断低优先级任务，实现可控的并发渲染。

    React 在 Fiber 架构下，会把更新任务包装成一个个“可被中断的小单元”。调度器负责决定什么时候、以什么优先级去执行它们。
    浏览器空闲时间 API, 时间切片（Time Slicing）:用户交互优先，长任务拆开执行。
    优先级: Lanes 模型

    类比: 

        调度器 = 高铁站调度员
          有多辆车（任务）要发车。
          按优先级（车次等级）安排先后顺序。
          如果有特快列车（高优先级）来了，可以插队。

        Lanes = 轨道编号
          不同任务被分配到不同轨道。
          优先执行轨道号低的（高优先级）。

- react 开发: 将可变的部分与不可变的部分分离, 使不变的部分能够命中bailout 缓存策略.(拆分组件, 或者将不变的或可变的通过 children 传人)

- react setState 是同步还是异步
  setState 既不是绝对同步，也不是绝对异步，它的执行取决于运行环境。
  1.批处理模式（Batching）下 → 异步表现 (在 事件回调 / 生命周期 / 合成事件 中，React 会对多次 setState 进行 批处理。)
  2.非批处理模式下 → 同步表现 (在 原生事件回调 / setTimeout / Promise.then 中，setState 不会被批处理。)

  React18 之后默认开启 自动批处理（Automatic Batching）：即使在 setTimeout / Promise.then 里，也会合并 setState.除非显式调用 ReactDOM.flushSync()，否则 React 都会尝试延迟合并更新。
  flushSync 可以强制同步

- React 实现“视口内才加载”?
```

import React, { useEffect, useState, Suspense } from 'react';

const LazyChart = React.lazy(() => import('./BigChart'));

export default function Page() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById('chart-container');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div id="chart-container" style={{ minHeight: 400 }}>
        {visible ? (
          <Suspense fallback={<div>Loading chart...</div>}>
            <LazyChart />
          </Suspense>
        ) : (
          <div>Chart will load when visible...</div>
        )}
      </div>
    </div>
  );
}

```