### 1.Node 中 require 时发生了什么? 

路径解析 => 缓存检查 => 创建模块对象 => 读取与编译 => 执行模块代码 => 标记完成并返回

require() 缓存检查顺序：
   - 1. 检查原生模块缓存; 
   - 2. 检查 require.cache（路径解析后的绝对路径作为 key）。
   - 3. 如果缓存未命中 → 走模块解析; 
   - 4. 执行模块，填充 require.cache，返回 module.exports。


### 2.Node.js 事件循环机制


六个阶段: 
1. Timers（计时器阶段）执行 setTimeout() 和 setInterval() 的回调
2. Pending callbacks（待定回调阶段）执行系统操作的回调，如 TCP 错误
3. Idle, prepare（闲置准备阶段）内部使用阶段
4. Poll（轮询阶段） - 最重要的阶段 检索新的 I/O 事件，执行 I/O 相关回调
5. Check（检查阶段）执行 setImmediate() 的回调
6. Close callbacks（关闭回调阶段）执行关闭事件的回调，如 socket.on('close', ...)

```
每个阶段的宏任务执行完 →
    执行所有 nextTick 回调 →
    执行所有微任务 (Promise)
→ 进入下一个阶段
```
注意: 滥用 process.nextTick：会阻塞后续阶段（饿死循环）。

**优先级关系**
**process.nextTick() > Promise.then() > setTimeout() > setImmediate()**


- Node 的事件循环由 libuv 实现，循环有 timers → pending → poll → check → close 等阶段。
- 微任务： process.nextTick（最高优先）→ Promise.then（微任务）。
- setImmediate 与 setTimeout(0) 的先后取决于上下文（在 I/O 回调中 setImmediate 会优先）。
- 线程池 用于无法立即非阻塞完成的工作（默认线程数 ≈4，可通过 UV_THREADPOOL_SIZE 设置）。
- 不要阻塞 主线程，必要时用 worker_threads 或外部服务/进程。

### 3.process.nextTick 与 setTimeout 的区别

- process.nextTick 在当前事件循环结束时执行
- setTimeout(fn, 0) 在下一个事件循环开始时执行
- nextTick 优先级更高

### 4.Koa 与 Express 的区别

1. 中间件机制

- Express：单向流动，中间件通过 next() 线性执行，一旦响应结束就不能修改
- Koa：洋葱模型，中间件既可以处理请求也可以处理响应，支持统一的错误处理

2. 异步处理

- Express：基于回调函数，容易陷入回调地狱，异步错误处理相对复杂
- Koa：基于 Promise 和 async/await，代码更简洁，异步流程控制更直观

3. 上下文对象

- Express：req 和 res 是分离的对象，功能相对分散
- Koa：ctx 统一上下文，封装了 request 和 response，API 设计更简洁优雅

4. 功能内置

- Express：内置了很多中间件，功能齐全，开箱即用
- Koa：核心功能精简，需要通过第三方中间件扩展，更加灵活

5. 路由系统

- Express：内置了强大的路由系统，支持链式调用
- Koa：路由需要通过第三方中间件实现（如 koa-router）

6.社区生态

- Express：历史更悠久，社区更成熟，资源更丰富
- Koa：较新但发展迅速，设计更现代，适合新项目

7. 错误处理

- Express：通过特殊的错误处理中间件，需要手动传递错误
- Koa：通过 try/catch 优雅地处理错误，统一的错误处理更方便

8. 适用场景

- Express：适合快速开发，现有项目迁移，团队熟悉度高
- Koa：适合追求优雅代码，需要更好的异步流程控制的场景

