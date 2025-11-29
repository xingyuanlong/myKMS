
## 1.px 如何转化为rem

<Collapse>

基础原理
- rem 是相对于根元素 `<html>` 的字体大小（font-size）来计算的单位。
- 浏览器默认根字体大小一般是 16px，可以通过 CSS 修改：

rem值=px值​/根元素字体大小

动态适配:
- 根据屏幕宽度设置根字体大小
- Sass / Less 自动转换 px -> rem

</Collapse>


## 2.flex: 1  是什么意思

<Collapse>

```
flex: <flex-grow> <flex-shrink> <flex-basis>;
// 等价于
.item {
  flex-grow: 1;    /* 可以占用剩余空间 */
  flex-shrink: 1;  /* 空间不足时可以缩小 */
  flex-basis: 0;   /* 初始主轴大小为 0 */
}

```

常用:

1. 等分容器
```
.item { flex: 1; }
```
每个子元素平分父容器剩余空间

2. 弹性填充剩余空间
```
.item-left { width: 100px; }
.item-right { flex: 1; }
```
左边固定宽度，右边占满剩余空间

3. 手风琴布局 / 分屏
```
.item { flex: 1; }      /* 占满剩余 */
.item.active { flex: 3; } /* 当前展开项占更多空间 */
```


flex: 1：“从 0 开始按比例分” → 更像均分 / 填满

flex: auto：“先按内容定底，再按比例分” → 更像自适应内容

</Collapse>


## 3. will-change 是干嘛的

<Collapse>

CSS will-change 是一个 性能优化相关的 CSS 属性，用来告诉浏览器 某个元素的哪些属性即将发生变化，让浏览器提前做好优化准备，从而提高动画或交互的性能。

```
.element {
  will-change: transform, opacity;
}
```

- 作用：提示浏览器，元素的 transform 和 opacity , scroll-position属性可能在未来发生变化
- 浏览器优化：可以提前创建复合图层（compositing layer），减少重排（reflow）和重绘（repaint）开销
- 适用场景：动画、交互、滚动过渡效果等
- 不能乱用，不支持任意属性，过多会占用显存。

</Collapse>


## 4.BFC

<Collapse>

BFC 是 Block Formatting Context（块级格式化上下文） 的缩写，是 Web 页面中的一个独立渲染区域，其内部的元素布局遵循自己的规则，不会影响外部元素。

- BFC 是一个 独立的布局环境
- 内部元素的 垂直 margin 会发生折叠 与外部无关
- 外部元素也不会影响内部元素的布局
- 常用于解决 浮动重叠、清除浮动、margin 折叠 等问题


BFC 的特性: 

- 元素不会与浮动元素重叠
  - BFC 的边界会避免与外部浮动元素重叠
- 垂直外边距（margin）不会折叠到 BFC 外部
  - 内部元素 margin 折叠只在 BFC 内部
- 包含浮动元素
  - BFC 可以包含内部浮动元素的高度，使父容器自适应高度
- 阻止元素重叠
  - 可以避免外部元素与 BFC 内部元素发生 margin 折叠或覆盖

BFC 的触发条件 
| 条件                                                      | 描述                                 |
| ------------------------------------------------------- | ---------------------------------- |
| `float` 不为 `none`                                       | 左浮动或右浮动元素                          |
| `position` 为 `absolute` 或 `fixed`                       | 绝对定位或固定定位元素                        |
| `display` 为 `inline-block`、`table-cell`、`table-caption` | 特定 display 值的元素                    |
| `overflow` 不为 `visible`                                 | `hidden`、`auto`、`scroll` 都可以触发 BFC |
| `display: flow-root`                                    | CSS3 新增专门触发 BFC 的 display 值        |
| `contain: layout`                                       | CSS Containment，也可以触发 BFC          |


常见应用场景
- 清除浮动
- 防止 margin 折叠
- 布局避免干扰浮动元素

</Collapse>


### 5.CSS怎么隐藏一个元素，对回流和重绘的隐藏，对事件响应机制的影响

<Collapse>


| 隐藏方式                                | 是否占位 | 回流 | 重绘 | 事件响应    | 性能特点         | 推荐使用场景             |
| ----------------------------------- | ---- | -- | -- | ------- | ------------ | ------------------ |
| `display: none`  元素彻底从渲染树中移除。                       | ❌    | ✅  | ✅  | ❌       | 删除渲染树节点，性能稍重 | 元素彻底移除（如 Tab 切换）   |
| `visibility: hidden`    元素依然在文档流中，只是视觉上“不可见”。              | ✅    | ❌  | ✅  | ❌       | 保留布局结构       | 占位但不可见（如占位动画）      |
| `opacity: 0`  仅透明度为 0，但仍在渲染树中。                      | ✅    | ❌  | ✅  | ✅       | 仅重绘          | 视觉隐藏但仍可交互（如淡入淡出动画） |
| `position: absolute; left: -9999px` 通过把元素移出可视区域达到隐藏效果。 | ❌    | ✅  | ✅  | ❌       | 性能中等         | 屏幕外隐藏（SEO / 辅助阅读）  |
| `pointer-events: none`              | ✅    | ❌  | ❌  | ❌       | 无重绘          | 禁用交互，常与 opacity 结合 |
| `transform: scale(0)`     图形级裁剪或缩放。            | ✅    | ❌  | ✅  | ⚠️ 可能响应 | GPU 加速       | 动画过渡中隐藏            |



</Collapse>


### 6.href 和 src 

<Collapse>

| 维度       | href                                   | src                                               |
| -------- | -------------------------------------- | ------------------------------------------------- |
| **核心作用** | 表示资源的“引用”或目标地址                         | 表示资源的“来源”，立即下载和渲染                                 |
| **立即加载** | 不会立即加载资源（除非 `<link rel="stylesheet">`） | 浏览器会立即请求资源                                        |
| **典型元素** | `<a>`、`<link>`、`<area>`                | `<img>`、`<script>`、`<iframe>`、`<audio>`、`<video>` |
| **渲染阻塞** | 不阻塞页面渲染（普通 `<a>`）                      | `<script>` 会阻塞渲染（同步）                              |
| **导航作用** | 用于跳转或引用外部文档                            | 用于插入资源，页面不跳转                                      |
| **事件触发** | 点击 `<a>` 才触发请求                         | 插入 DOM 元素时就触发请求                                   |
| **可重用性** | 可用于预加载（如 `<link rel="preload">`）       | 每个 `src` 元素只用于一个资源                                |


</Collapse>

