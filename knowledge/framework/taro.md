
## 目录

1. Taro 的跨端编译原理
2. H5 与小程序端的运行时差异
3. 编译时与运行时分别做了什么
4. 如何实现跨端组件
5. 页面性能优化
6. 全局状态管理方式
7. 生命周期映射关系
8. 常见兼容性问题与解决
9. 请求层封装思路
10. 插件与 CLI 扩展机制

---

## **1️⃣ Taro 的跨端编译原理**

**考点：** DSL 转译与架构设计

* 核心原理：将 React/Vue 语法编译为小程序语法（WXML/JS/JSON）。
* 编译器：`@taro/transformer-wx` + Babel。
* 每个端有单独的 `taro-platform-xxx`（如 weapp、h5、rn）。
* 构建流程：

  ```
  源码(JSX) → AST解析 → 模板组件映射 → 目标平台产物
  ```
* Webpack 打包通过 `taro-mini-runner`。

**加分：**

* 了解 AST 转换过程；
* 熟悉 taro-h5 与 taro-mini-runner 差异。

---

## **2️⃣ H5 与小程序端的运行时差异**

**考点：** 环境差异、API 适配

| 项目   | H5 端                 | 小程序端             |
| ---- | -------------------- | ---------------- |
| 运行环境 | 浏览器 DOM              | 小程序独立渲染层         |
| 渲染方式 | ReactDOM             | 虚拟 DOM → setData |
| 全局对象 | `window`, `document` | 无，需 Taro 封装      |
| 路由机制 | history / hash       | 小程序页面栈           |

**环境判断：**

```js
if (process.env.TARO_ENV === 'weapp') {
  // 小程序逻辑
}
```

---

## **3️⃣ 编译时与运行时职责**

**编译时：**

* 解析 `app.config.ts`；
* 转换 JSX；
* 生成 JSON / WXML；
* 静态分析依赖。

**运行时：**

* 注册组件、挂载虚拟 DOM；
* 派发事件；
* 维护页面栈；
* 桥接数据层与视图层。

**关键模块：**

* `@tarojs/runtime` 管理虚拟 DOM；
* `@tarojs/taro` 提供统一 API。

---

## **4️⃣ 跨端组件实现方式**

**方式一：条件编译**

```tsx
// #ifdef weapp
<View>微信小程序</View>
// #endif
// #ifdef h5
<div>H5 页面</div>
// #endif
```

**方式二：按端文件名区分**

```
Player.weapp.tsx
Player.h5.tsx
```

**方式三：运行时选择**

```tsx
const Player = process.env.TARO_ENV === 'h5' ? H5Player : WeappPlayer
```

---

## **5️⃣ 页面性能优化**

**常见优化点：**

* 减少 setData 次数；
* 使用 `React.memo` / `useCallback`；
* 图片懒加载；
* 分包加载；
* 使用虚拟列表（`taro-virtual-list`）；
* 减少复杂组件嵌套；
* CSS 样式按需导入。

**性能分析：**

* 微信开发者工具 → 性能面板；
* H5 端使用 Performance API。

---

## **6️⃣ 全局状态管理方案**

| 方案                   | 特点      | 适用场景      |
| -------------------- | ------- | --------- |
| Redux / MobX         | 官方支持    | 中大型项目     |
| Zustand              | 极轻量     | Hooks 项目  |
| Recoil / Jotai       | 现代化原子状态 | 模块化项目     |
| Context + useReducer | 简单易用    | 小项目       |
| Taro Storage         | 跨页面缓存   | 登录态、配置类数据 |

**示例：Zustand**

```ts
import { create } from 'zustand'

const useStore = create(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 }))
}))
```

---

## **7️⃣ 生命周期映射关系**

| Taro Hook    | React 生命周期                    | 触发时机 |
| ------------ | ----------------------------- | ---- |
| `useLoad`    | componentDidMount             | 页面加载 |
| `useDidShow` | componentDidMount / DidUpdate | 页面显示 |
| `useDidHide` | componentWillUnmount          | 页面隐藏 |
| `useUnload`  | componentWillUnmount          | 页面卸载 |

**特殊小程序钩子：**

* `usePullDownRefresh`
* `useReachBottom`
* `usePageScroll`

---

## **8️⃣ 常见兼容性问题与解决**

**问题 & 解决：**

| 问题                | 解决方案                            |
| ----------------- | ------------------------------- |
| WXML 不支持某些 JSX 属性 | 转为标准组件语法                        |
| rpx 与 px 差异       | 配置 `postcss.pxtransform`        |
| H5 图片路径错误         | 使用绝对路径或 `require()`             |
| canvas 渲染差异       | 区分平台封装组件                        |
| 第三方库兼容问题          | 通过 `defineConstants` 或 alias 替换 |

---

## **9️⃣ 请求层封装思路**

```ts
import Taro from '@tarojs/taro'

export function request(options) {
  return Taro.request({
    url: process.env.API_URL + options.url,
    method: options.method || 'GET',
    data: options.data || {},
    header: {
      Authorization: Taro.getStorageSync('token') || ''
    }
  }).then(res => {
    if (res.statusCode !== 200) {
      Taro.showToast({ title: '请求失败', icon: 'error' })
    }
    return res.data
  })
}
```

**优化：**

* 加入拦截器；
* 统一错误处理；
* 区分小程序端与 H5 端网络层。

---

## **🔟 Taro 插件与 CLI 扩展机制**

**插件结构示例：**

```js
// my-taro-plugin/index.js
module.exports = ctx => {
  ctx.onBuildStart(() => console.log('开始构建'));
  ctx.modifyWebpackChain(chain => {
    chain.plugin('define').tap(args => {
      args[0]['CUSTOM_ENV'] = JSON.stringify('test');
      return args;
    });
  });
}
```

**注册方式：**

```js
// config/index.js
plugins: ['my-taro-plugin']
```

**可实现：**

* Webpack 扩展；
* 自定义命令；
* 构建钩子注入；
* 条件编译注入。

---

## 📘 面试加分方向

* 熟悉 Taro CLI 生命周期：`onBuildStart`, `modifyWebpackChain`, `modifyMiniConfigs`
* 掌握小程序渲染架构与通信机制；
* 熟悉 taro runtime 源码；
* 能手写跨端自定义组件；
* 会排查 setData 性能问题。


