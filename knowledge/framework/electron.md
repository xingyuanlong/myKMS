# Electron

### 1.Electron 的主进程和渲染进程有什么区别？
    主进程负责管理应用的生命周期，如创建窗口、处理应用启动和退出等。渲染进程负责管理页面内容和用户界面。

### 2.如何在 Electron 中进行远程通信？
可以使用 Electron 的 IPC（Inter-Process Communication）机制在主进程和渲染进程之间进行通信。使用 preload + contextBridge 暴露 API 是推荐方式，以保持安全.

### 3.Electron 应用的性能如何优化？
    优化策略包括减少不必要的模块加载、合理使用异步IO、利用多线程、避免长时间运行的脚本阻塞主线程等。
在 Electron 中提升性能的关键在于“测量驱动优化 + 避免阻塞主/渲染线程 + 减少启动/加载开销 + 精细管理资源/通信”。具体来说，首先要用 DevTools、内存快照、CPU 分析等工具定位瓶颈；其次，主进程与渲染进程不能被同步 I/O、密集计算或重模块加载所阻塞，应将重任务移至子进程或 Worker；再者，启动时不能一股脑 require 所有模块，应采用打包、按需加载、代码拆分方式，加快首屏渲染；还要控制渲染进程压力，如使用虚拟列表、减少 DOM 更新频率、卸载无用监听器等；IPC 通信也需要避免频繁或大体量调用，优先使用异步通信；此外，要防止内存泄漏（清理事件、定时器、销毁窗口时释放资源）和减少不必要的 polyfills 或过期兼容代码。合理运用这些策略，就能让 Electron 应用既流畅又资源友好。

### 4.Electron 中如何实现自动更新？
    可以使用 electron-updater 或其他第三方库来实现应用的自动更新。

### 5.Electron 应用的安全性如何保障？

  | 安全特性                           | 含义 /作用                                                                                 | 如何启用 /配置                                                                                                              |
| ------------------------------ | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **NodeIntegration = false**    | 渲染进程不自动拥有 Node.js 的权限，避免渲染内容滥用 `require` 等 API。                                        | 在创建 `BrowserWindow` 时设置 `webPreferences.nodeIntegration: false`。                                    |
| **Context Isolation**          | 渲染进程（加载网页内容）和 preload 脚本 / Electron API 运行在不同的 JS 上下文中，网页无法直接访问 Electron 内部或 Node API。 | 自 Electron 12 起默认启用；确认 `contextIsolation: true`，并使用 `contextBridge.exposeInMainWorld(...)` 安全暴露必要 API。 |
| **Preload 脚本 + contextBridge** | preload 脚本在受限环境中运行，用来暴露极少且受控的 API 给前端，不把全部 Node 权限暴露给渲染进程。        |                                                                                                                       |
| **禁用或谨慎使用 `remote` 模块**        | `remote` 模块早经被认为存在安全隐患，因为它可能使渲染进程间接访问主进程 Node API。                                     | 尽量不用 `remote`；如果必须用，升级到 Electron 安全版本，仔细控制权限。                                                       |
| **内容安全策略（CSP）**                | 限制脚本／资源只从可信源加载，防止 XSS（跨站脚本）等攻击。                                                        | 在渲染内容中设 `Content-Security-Policy`，禁止 `unsafe-eval`、只允许 `'self'`、HTTPS 等源。                            |
| **沙箱（sandboxing）**             | 将渲染进程运行在更受限的环境里，使其权限受限，不能随意访问系统资源。                                                     | 在创建窗口时设置 `sandbox: true` 或其他相关选项。                                                                     |
| **只加载可信内容**                    | 避免加载远程 HTML/JS，或第三方内容／依赖，防止恶意代码注入。                                                     | 使用本地打包资源；如果必须加载网络内容，用 HTTPS；禁用 `allowRunningInsecureContent`。                                          |

