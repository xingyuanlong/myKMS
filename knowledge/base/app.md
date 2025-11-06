# 小程序

### 1. vue 编译到小程序等原理


<Collapse>

Vue 本身是一个 前端框架，它的运行环境是浏览器，依赖 DOM API。小程序环境（如微信小程序）是 非浏览器环境，没有 DOM，取而代之的是 小程序的组件体系（如 view, text, image 等）和 小程序 JS 运行环境（WXML + WXSS + JS）。


核心原理:

1. 模板编译
- Vue 的模板（`<template>`）最终会被编译成 渲染函数。
- 在小程序环境下：
    - Vue 模板会被转换成 小程序的 WXML。
    - Vue 的指令（v-if, v-for, v-bind 等）会被转换成对应的小程序指令：
        - v-for → wx:for
        - v-if → wx:if
        - v-bind:xxx → 对应绑定写法
- 这个过程就是 模板转换器（template compiler）


2. 组件映射

- Vue 组件 → 小程序自定义组件

- 需要做的事情：

  - 生成 JSON 配置文件（小程序每个组件/页面需要 component.json 或 page.json）
  - 生成 WXML 模板
  - 生成 JS 逻辑文件，小程序的 JS 运行环境有限，所以需要把 Vue 的响应式、事件等改写成小程序的方式。


3. 响应式系统适配

- Vue 通过 Proxy/Observer 做响应式，渲染到 DOM。

- 小程序没有 DOM，需要手动触发更新。

- 所以 Vue-to-mini-program 框架通常会：
  - 在数据变动时调用 setData（小程序的状态更新 API）
  - setData 是小程序的核心，更新 WXML
  - Vue 响应式的数据变动 → 自动映射到 setData 调用

注意：setData 有性能限制（不要更新太大对象），所以很多框架会 做脏检查或数据扁平化。


4. 生命周期映射


编译流程概览:

1. 解析 SFC（Single File Component）
  - template → AST
  - script → JS
  - style → CSS / WXSS

2. 模板编译
  - AST → WXML
  - 指令和事件转换（v-on → bindtap）

3. 逻辑处理
  - Vue 响应式系统 → 小程序 data + setData
  - 方法 → 小程序 JS 方法绑定

4. 样式转换
  - CSS → WXSS
  - Scoping / 样式命名空间处理

5. 输出小程序目录

  - page.js, page.wxml, page.wxss, page.json
  - component.js, component.wxml, component.wxss, component.json

6. 打包

  - 工具（webpack / vite / cli）打包 JS
  - 输出小程序可识别的目录结构


| 框架        | 原理与特点                                        |
| --------- | -------------------------------------------- |
| mpvue     | Vue 2 → 小程序，用 Vue 的 render + setData         |
| uni-app   | 支持 Vue 2/3，跨端输出（小程序、H5、App），模板和指令转换 + API 封装 |
| Taro      | React 风格 → 多端小程序，核心是抽象组件 + 生命周期 + API 适配     |
| Vue3-mini | Vue3 composition API + 响应式 → setData         |


核心就是三件事：

- 模板编译 → Vue template → WXML

- 响应式适配 → Vue 响应式 → 小程序 setData

 -生命周期和 API 映射 → Vue 生命周期 +事件 → 小程序生命周期+事件

⚡ 核心瓶颈：

- setData 性能

- 样式隔离

- 组件递归 / 动态组件

</Collapse>


