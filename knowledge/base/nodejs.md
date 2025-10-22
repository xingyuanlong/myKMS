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

### 5.JWT 如何自动更新 token

采用JWT 双 Token 模式：Access Token + Refresh Token
| 类型                | 作用                  | 有效期          | 存储位置                          |
| ----------------- | ------------------- | ------------ | ----------------------------- |
| **Access Token**  | 每次请求携带，用于认证用户身份     | 短（几分钟 ~ 几小时） | 浏览器内存 / localStorage / cookie |
| **Refresh Token** | 用于申请新的 Access Token | 长（几天 ~ 几周）   | 安全 Cookie / HttpOnly 存储       |


当前端收到 401 且检测到是 “Access Token 过期”时, 用Refresh Token 获取新的Access Token

前端思路:

- 封装请求拦截器；
- 如果请求返回 401，且不是刷新请求；
- 尝试调用 /auth/refresh；
- 刷新成功 → 重试原请求；
- 刷新失败 → 跳转登录。

1. 滑动过期（Sliding Expiration）
    - 每次用户请求时，如果 Access Token 快过期，自动签发新 Token(playload 可以加过期时间)

2. 令牌版本号机制
    - 每个用户在数据库中维护一个 tokenVersion；当刷新或登出时，更新版本号；旧的 Refresh Token 因版本号不匹配立即失效。

3. JWT 自动续期时的“并发刷新冲突问题”
    - 同一时间只允许一次刷新操作,其他请求等待刷新完成后再继续。
        -  请求队列 + 刷新锁
        - 当第一个请求检测到 token 过期时：
            - 标记一个全局变量 isRefreshing = true
            - 发起 /auth/refresh 请求
            - 其他同时失败的请求 不要立即刷新，而是放进一个队列 pendingRequests
        - 刷新成功后：
            - 更新新的 token；
            - 依次重放（retry）队列中的请求；
            - 清空队列；
            - 重置 isRefreshing = false。
    - 刷新令牌幂等化
        - 若在短时间内多次使用同一个 refresh token,后端可以检测并返回同一个新 token（或最新有效 token），而不是直接报错“refresh token 已被使用”。
    - 刷新限流
        - 对同一个用户的刷新操作设置时间间隔限制（例如 5 秒内只允许一次刷新）


### 6.扫描登录如何实现?

PC浏览器 <———> 服务器 <———> 手机App

- 浏览器打开登录页
    - 前端请求后端生成一个 唯一的登录二维码
    - 二维码内容通常是一个 临时 login_token（或UUID）
    - 二维码展示给用户

- 用户用手机App扫码
    - App 扫描二维码，得到 login_token
    - App 发请求到服务器，验证该二维码是否合法
    - 如果合法，App 显示提示「是否允许登录该网页？」

- 用户在手机上点击「确认登录」
    - App 带着登录状态的用户信息，调用后端接口
    - 服务端保存：该 login_token 对应的登录状态

- 网页端轮询或WebSocket等待登录结果
    - 网页端每隔1-2秒查询登录结果
    - 如果发现 login_token 已被确认绑定用户，则返回成功状态 + 用户信息

- 浏览器登录成功
    - 前端拿到 token（如JWT），存入 Cookie / LocalStorage
    - 重定向到首页，登录完成

### 其他

- **eggjs 默认worker 和cpu核心数相同, 如果是物理机器,可能需要指定worker 数**
- 登录后页面多次自动重复刷新后,才正常进去, a 服务颁发的token, b 服务短时间后才正常认证,可能是2个机器时间不一致,差几秒或者几十秒