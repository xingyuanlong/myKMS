# 开放性问题, 场景性问题

### 1.如何判断用户是否离开当前页面?

<Collapse>

一、页面可见性 Page Visibility API

判断用户标签页是否可见（切换到后台/最小化浏览器）
```
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('用户离开页面（切换标签页或最小化）');
  } else {
    console.log('用户回到页面');
  }
});

```

二、窗口焦点（Focus / Blur）

检测窗口或 iframe 是否获得焦点
```
window.addEventListener('blur', () => {
  console.log('用户离开了当前窗口/标签页');
});

window.addEventListener('focus', () => {
  console.log('用户回到当前窗口/标签页');
});

```

三、用户离开页面 / 卸载（beforeunload / unload）

检测用户关闭页面、刷新或跳转。
```
window.addEventListener('beforeunload', (e) => {
  console.log('用户可能离开页面');
  // 阻止默认提示（可选）
  e.preventDefault();
  e.returnValue = '';
});

```

四、鼠标 / 用户交互检测

当用户长时间没有交互（鼠标、键盘、触屏），可推测用户离开
```
let idleTimer;
function resetIdle() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    console.log('用户可能离开或无操作');
  }, 30000); // 30秒无操作
}

// 监听用户操作
['mousemove','keydown','click','scroll','touchstart'].forEach(ev =>
  document.addEventListener(ev, resetIdle)
);
resetIdle();

```
可以检测“用户不活跃”，用于自动登出、心跳等.


```
let idleTimer;
function onUserIdle() { console.log('用户离开页面或长时间不操作'); }
function resetIdle() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(onUserIdle, 30000);
}
['mousemove','keydown','click','scroll','touchstart'].forEach(ev => 
  document.addEventListener(ev, resetIdle)
);
resetIdle();

document.addEventListener('visibilitychange', () => {
  if (document.hidden) onUserIdle();
});
window.addEventListener('blur', onUserIdle);
window.addEventListener('focus', resetIdle);

```

</Collapse>


### 2.前端如何预览pdf?

<Collapse>

一、直接使用浏览器内置 PDF 渲染
    - `<iframe>` 嵌入
    - `<embed>` 标签
    - 新开标签页

二、使用 PDF.js
    - PDF.js 是最常用的前端 PDF 渲染库，可以在 `<canvas>` 上渲染 PDF 页面。


</Collapse>

### 3.前端批量请求失败Toast重复弹窗怎么解决？
<Collapse>

- 全局标志拦截: 无论多少错误只弹出一个错误 
- Toast 自身防抖, 短时间内只弹一次
- 错误聚合：在拦截器层面，收集短时间内的所有错误，然后合并成一条 Toast 显示
  - 在拦截器中不立即弹窗，而是将错误“收集”起来，用一个 debounce 函数在短时间后统一处理
  - 错误分类队列和分类处理
- 业务层处理
  - 在发起请求时，告知拦截器“不要弹 Toast”，然后在业务代码中用 Promise.allSettled 手动处理所有结果
- 还可以加上重试机制和错误上报

</Collapse>

### 4.如何解决页面接口请求大规模并发问题
<Collapse>

- 请求去重（防抖 + 节流 + 队列）
   - 核心思想：同一资源、同一参数，不重复发请求。

- 请求合并
  - 把多个相似请求合并为一个。

- 并发限制
   - 控制同时发出的请求数，超过的进入队列。

- 缓存
- 优化请求时机
</Collapse>


### 5.渲染元素很多, 如何保证页面不卡顿?
<Collapse>

核心思想是 **只渲染用户可见的部分**

解决思路：**减少一次性渲染的 DOM 数量 + 批量更新 + GPU 加速 + 异步渲染**

- 虚拟列表（Virtual List）
- 时间分片（Time Slicing）/分批渲染
- 数据加载优化
  - 分页
  - 无限滚动
- DOM 操作批量化
- 避免复杂的 CSS 样式
- 减少重排与重绘
  - 合并 DOM 操作 
  - 避免频繁修改 layout 属性
  - 使用 transform / opacity 做动画，配合 will-change 提前优化
- CSS GPU 加速
- 虚拟 DOM / diff 优化
- 异步计算
  - 对大量计算操作使用 Web Worker
  - 主线程只负责渲染，避免 JS 阻塞
- 框架优化


</Collapse>


### 6.前端低代码平台表单联动如何实现

<Collapse>

1. 解析依赖关系
2. 构建观察者 / 订阅机制
3. 动态执行规则

```
formFields = [
  { field: 'province', type: 'select' },
  { field: 'city', type: 'select', dependsOn: 'province', compute: (state) => cities[state.province] }
]

// 生成依赖图
depMap = {
  province: ['city']
}

// 字段值变化时触发依赖
function onChange(field, value) {
  formState[field] = value;
  (depMap[field] || []).forEach(depField => {
    const compute = formFields.find(f => f.field === depField).compute;
    if(compute) formState[depField] = compute(formState);
  });
}

```

</Collapse>


### 7. 项目上遇到的难题
<Collapse>



</Collapse>


### 8.想象一下，如果项目上线前一天，测试团队发现一个严重bug，但修复可能导致发布延期，你会如何处理？

<Collapse>

第一步：冷静评估 —— 判断问题的性质与影响范围
- 影响范围
- 复现条件
- 修复风险

输出：问题严重程度报告（Critical / High / Medium / Low）+ 修复复杂度评估（简单 / 中等 / 高风险

第二步：权衡方案 —— 快速制定应急策略
- 高风险 + 高影响（核心功能挂）
   - 坚决延期上线
- 低风险 + 高影响（可临时绕过）
  - 上线但添加临时兜底方案
- 高风险 + 低影响（边缘功能有隐患）
  - 修复放入下个小版本或灰度

- 沟通与协作策略
  - 要让决策透明，团队共识明确
- 上线后风控
  - 快速回滚脚本
  -  实时监控

</Collapse>


### 9.请分享一个你通过优化前端性能提升用户体验的案例，具体用了哪些技术手段

<Collapse>

- 路由级 按需加载
- 使用 Preload / Prefetch 提前请求关键资源
- gzip 压缩
- Tree Shaking
- loading
- 合并接口/减少接口
- 渲染分级
- 骨架屏 + 异步渲染

比如: 旧项目 webpackChunkName 设置不和导致code slipt 基本没效果, 根据项目实际重新配置 webpackChunkName

</Collapse>


### 10.想象一下，如果你的团队在开发过程中遇到第三方库的严重漏洞，你会如何处理

<Collapse>


1️⃣ 立即评估风险
- 确认漏洞影响范围
- 确定漏洞严重性

2️⃣ 暂时缓解方案
如果漏洞立即可被利用：
- 临时回退/锁定依赖版本：回退到无漏洞的历史版本；
- 增加防护：例如在后端增加校验、限制敏感接口调用、关闭受影响功能；
- 升级依赖库：如果官方已经修复，尽快升级并回归测试。

关键点：**先保护生产环境，保证业务安全**

3️⃣ 团队协作与信息通报
- 通知相关团队：产品、测试、运维和安全团队；
- 记录漏洞事件：漏洞类型、影响范围、临时处理方案；
- 同步上线计划：判断是否需要紧急发布补丁，或在下次发布中修复。


4️⃣ 长期解决方案
- 建立依赖管理策略
- 替换或隔离高风险库
- 增强 CI/CD 安全管控


</Collapse>


### 11.请求竞态如何处理?


<Collapse>

竞态往往导致了 UI 显示错误的旧数据

1. 请求标识（requestId + 比对）
- 每个请求都有唯一 ID，只保留最后一次发出的响应结果。
  react 可以使用 ref 包裹 lastRequestId
```
let lastRequestId = 0;

async function fetchData(query) {
  const requestId = ++lastRequestId; // 每次请求自增
  const res = await fetch(`/api/search?q=${query}`);
  const data = await res.json();

  if (requestId === lastRequestId) {
    setData(data); // 只有最新请求才能更新UI
  }
}

```
2. AbortController（中断旧请求）
- 在发新请求前，主动“中止”旧请求。

3. 使用 useEffect + cleanup
```
useEffect(() => {
  let canceled = false;

  (async () => {
    const res = await fetch(`/api/data?id=${id}`);
    const data = await res.json();
    if (!canceled) setData(data);
  })();

  return () => (canceled = true); // 清理逻辑
}, [id]);

```

4. 使用 SWR / React Query 等数据层库


请求竞态的本质是异步返回的先后顺序失序。
 
解决方案的核心思想就是：
- 要么 中止旧请求；
- 要么 忽略旧响应；
- 或者 让库帮你管理一致性。

</Collapse>


### 12.实现 从详情页返回列表页保存上次加载的数据和自动还原上次的浏览位置。

<Collapse>

| 方案                | 实现原理                                                | 适用场景       |
| ----------------- | --------------------------------------------------- | ---------- |
| **方案 1：状态提升到全局**  | 把列表数据与滚动位置存入全局状态（Context、Redux、Recoil、Zustand等）     | ✅ 通用、推荐    |
| **方案 2：缓存整个列表组件** | 使用 `<KeepAlive>` 或路由缓存（React Router + custom cache） | ✅ 简单但侵入性较高 |

Vue 3 自带了` <KeepAlive>` 组件



react 实现 keep-alive
```
// KeepAlive.jsx 
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function KeepAlive({ children }) {
  const location = useLocation();
  const cacheRef = useRef({});
  const path = location.pathname;

  Object.keys(cacheRef.current).forEach((key) => {
    cacheRef.current[key].style.display = key === path ? 'block' : 'none';
  });

  if (!cacheRef.current[path]) {
    const div = document.createElement('div');
    div.style.display = 'block';
    cacheRef.current[path] = div;
  }

  return (
    <>
      {Object.entries(cacheRef.current).map(([key, container]) => (
        <div
          key={key}
          style={{ display: key === path ? 'block' : 'none' }}
        >
          {key === path ? children : null}
        </div>
      ))}
    </>
  );
}

```


</Collapse>

### 13. 设计一套全站页面加载耗时统计工具

<Collapse>


- 实时/离线监控页面加载体验（首屏、交互、资源、网络等）。
- 支持 SPA + MPA、移动端与桌面端。
- 能按 URL、用户群、地理/运营维度切分（例如：p50/p90/p95）。
- 支持异常告警（例如：p95 突增、LCP 超阈值）。
- 低埋点侵入、低成本存储、可扩展分析与可视化。

指标（What to collect）

- 分为「关键体验指标（Web Vitals）」与「补充指标」：
  - 核心（必须）
    - LCP（Largest Contentful Paint）
    - FCP（First Contentful Paint）
    - TTFB（Time To First Byte）
    - DOMContentLoaded（DCL）
    - Load Event（onload）
    - CLS（Cumulative Layout Shift）
    - FID / INP（First Input Delay / Interaction to Next Paint）
    - JS/Vue/React 渲染耗时（自定义埋点）
    - 页面总体耗时：导航开始到 onload、以及自定的“首交互完成”时间

- 资源类（可选）
  - Resource timing（各静态资源的加载耗时：dns, connect, ssl, request, response, duration）
  - 图片/字体/第三方脚本的失败率与耗时

网络/环境上下文（必须）

  - URL / route（路由名）
  - Referrer / entry type（navigate, reload, back_forward）
  - UserAgent / 浏览器、版本、操作系统
  - 网络信息：effectiveType、downlink、rtt（若可用）
  - 地点（可选：基于 IP 反查或前端传入地区）
  - Client timestamp / server timestamp（用于校准）

错误上下文（可选）

  - JS 错误（message, stack, filename, lineno）以便关联慢页面与错误。

采样与频率

  - 生产环境：默认采样率 1% - 10%（视流量与预算），关键页面或实验中 100% 采集。
  - 支持动态下发采样策略（CDN / 配置中心）。


前端采集 SDK（关键实现要点 + 代码示例）

要点：

- 仅在 document.visibilityState === 'visible' 时采集（避免 background 干扰）
- 优先用 PerformanceObserver 捕获 LCP / FID / CLS / Paint
- 收集 performance.getEntriesByType('resource')（资源耗时，限量采样）
- 批量上报：合并短时间内的多条事件，阈值（条数/时长）触发上报
- 在 pagehide/unload 用 navigator.sendBeacon 发送最后一条数据
- 控制上报体积：每次上报限制 10KB 左右，过大时只上报关键字段或采样

js sdk
```
// perf-sdk.js (浏览器端核心逻辑, 精简示例)
(function (window) {
  const APP = {};
  const SEND_URL = '/beacon/perf';
  const BATCH_MAX = 20;
  const BATCH_INTERVAL = 5000; // ms
  let queue = [];

  function now() { return Math.round(performance.now()); }

  // 收集 web vitals
  function installVitals() {
    // LCP
    try {
      const po = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        if (last) push({ k: 'lcp', v: Math.round(last.startTime) });
      });
      po.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {}

    // CLS
    try {
      let clsValue = 0;
      const po2 = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) clsValue += entry.value;
        }
      });
      po2.observe({ type: 'layout-shift', buffered: true });
      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') push({ k: 'cls', v: clsValue });
      });
    } catch (e) {}

    // FCP
    try {
      const po3 = new PerformanceObserver((list) => {
        const fcp = list.getEntries()[0];
        if (fcp) push({ k: 'fcp', v: Math.round(fcp.startTime) });
      });
      po3.observe({ type: 'paint', buffered: true });
    } catch (e) {}
  }

  function captureNavigation() {
    const nav = performance.getEntriesByType('navigation')[0];
    if (nav) {
      push({ k: 'ttfb', v: Math.round(nav.responseStart) });
      push({ k: 'domcontentloaded', v: Math.round(nav.domContentLoadedEventEnd) });
      push({ k: 'load', v: Math.round(nav.loadEventEnd) });
    } else if (performance.timing) {
      const t = performance.timing;
      push({ k: 'ttfb', v: t.responseStart - t.requestStart });
    }
  }

  function push(event) {
    const payload = {
      ts: Date.now(),
      url: location.pathname + location.search,
      ua: navigator.userAgent,
      navType: performance.getEntriesByType('navigation')[0]?.type || 'navigate',
      ...event
    };
    queue.push(payload);
    if (queue.length >= BATCH_MAX) flush();
  }

  function flush() {
    if (queue.length === 0) return;
    const body = JSON.stringify(queue.splice(0, BATCH_MAX));
    // prefer sendBeacon
    if (navigator.sendBeacon) {
      navigator.sendBeacon(SEND_URL, body);
    } else {
      fetch(SEND_URL, { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body }).catch(()=>{});
    }
  }

  // 定时发送
  setInterval(flush, BATCH_INTERVAL);

  // 在卸载页面时发送
  window.addEventListener('pagehide', flush);

  // init
  installVitals();
  captureNavigation();
  APP.flush = flush;
  window.__PerfSDK = APP;
})(window);


```

</Collapse>


### 14. H5 如何解决移动端适配问题


<Collapse>

HTML`<meta viewport>`标签告诉浏览器页面的“逻辑宽度”和缩放比例。

`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`

  - `width=device-width`：逻辑宽度等于设备宽度；

  - `initial-scale=1.0`：不缩放；

  - 禁止用户缩放，避免布局错乱。

- 使用 rem 适配 ;

- 使用  vw/vh 适配



</Collapse>


### 15. 函数式编程


<Collapse>

函数式编程是一种编程范式，它强调使用函数进行计算，尽量避免可变状态和副作用。

- **函数是一等公民：函数可以像变量一样传递、返回、赋值。**
- **避免共享状态：数据不可变，改变数据会产生新副本。**
- **组合函数：通过小函数组合形成大函数。**


| 概念                              | 说明                    | 示例（JS）                                                            |
| ------------------------------- | --------------------- | ----------------------------------------------------------------- |
| **纯函数（Pure Function）**          | 相同输入，永远得到相同输出，不修改外部状态 | `const add = (a,b) => a+b;`                                       |
| **不可变数据（Immutable）**            | 数据不被修改，每次操作返回新对象/数组   | `const newArr = [...arr, 4];`                                     |
| **高阶函数（Higher-Order Function）** | 函数作为参数或返回值            | `arr.map(x => x*2)`                                               |
| **函数组合（Function Composition）**  | 小函数组合形成复杂逻辑           | `const f = x => x+1; const g = x => x*2; const h = x => g(f(x));` |
| **递归（Recursion）**               | FP 常用代替循环             | `const factorial = n => n<=1?1:n*factorial(n-1);`                 |
| **不可变状态与副作用控制**                 | 避免修改全局变量              | 使用 `map`, `filter`, `reduce`                                      |

</Collapse>


### 16. js如何统计长任务时间、长任务执行次数

<Collapse>

**当主线程（Main Thread）执行某个任务超过 50ms**，它就被标记为一个 “Long Task”。

浏览器提供了 PerformanceObserver 接口，监听类型为 "longtask" 的性能条目。

```

let longTaskCount = 0;
let totalLongTaskTime = 0;

if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach(entry => {
      // 每个 entry 表示一个长任务
      longTaskCount++;
      totalLongTaskTime += entry.duration;

      console.log(`[LongTask] ${entry.name} 耗时 ${entry.duration.toFixed(2)}ms`);
      console.log('来源：', item.name, '类型：', item.entryType, 'URL：', item.containerSrc);
    });
  });

  observer.observe({ entryTypes: ['longtask'] });
}


```

</Collapse>



### 18. 如何禁止别人调试自己的前端页面代码?

<Collapse>

- 代码混淆 & 压缩 (obfuscation / minification)

- 不提供／禁用 source-map 在生产环境

- 检测 DevTools 或控制台开启并做限制
  - 无限 debugger, 定时器内无限 debugger, 打卡DevTools 就会无限DevTools
  - 无限 debugger 代码 加密 混淆, 用 eval 执行
  - 判断宽高变化

- 将核心逻辑或敏感信息放到服务端执行

- 限制 API／资源访问，通过认证、授权、接口防滥用

</Collapse>

### 19.web 系统里面， 如何对图片进行优化？

<Collapse>

总体目标: **以 最小的文件体积、最快的加载速度、最好的视觉质量 呈现图片。**
图片优化是提升用户体验、提高网站性能、减少流量消耗和增加搜索引擎曝光度的关键因素。

| 优化方向          | 关键手段                    | 说明            |
| ------------- | ----------------------- | ------------- |
| 1️⃣ 格式优化      | WebP / AVIF / SVG 等新格式  | 减少体积，兼容回退     |
| 2️⃣ 压缩优化      | 无损 / 有损压缩               | 使用工具或 CI 自动处理 |
| 3️⃣ 尺寸优化      | 响应式图片（`srcset`）         | 按设备分发合适大小     |
| 4️⃣ 缓存优化      | HTTP 缓存 + CDN 缓存        | 减少重复加载        |
| 5️⃣ 加载优化      | 懒加载 / 占位图               | 减少首屏压力        |
| 6️⃣ 传输优化      | CDN 加速 + Brotli/Gzip 压缩 | 优化网络传输层       |
| 7️⃣ 渲染优化      | 使用 CSS / SVG 替代位图       | 减少渲染消耗        |
| 8️⃣ 预加载与优先级控制 | preload / fetchpriority | 优化关键资源加载顺序    |


格式优化：选对图片格式

| 类型              | 适用场景    | 优点             | 缺点           |
| --------------- | ------- | -------------- | ------------ |
| **JPEG**        | 照片、复杂色彩 | 体积小            | 有损压缩         |
| **PNG**         | 图标、透明图  | 无损             | 体积大          |
| **SVG**         | 矢量图、图标  | 无限放大不失真        | 不适合照片        |
| **WebP**        | 通用      | 小体积 + 透明 + 动图  | 旧浏览器兼容性较差    |
| **AVIF**        | 下一代格式   | 比 WebP 再小 20%+ | 解码慢，部分浏览器不支持 |
| **GIF → video** | 动图替换    | 用 MP4 / WebM   | 体积更小，流畅度高    |
**使用 WebP**


性能监控与指标追踪

| 指标                                 | 说明          | 监控方式                  |
| ---------------------------------- | ----------- | --------------------- |
| **LCP (Largest Contentful Paint)** | 首屏最大图片加载时间  | `PerformanceObserver` |
| **CLS (Cumulative Layout Shift)**  | 图片未占位导致布局抖动 | 预设宽高可避免               |
| **Image Decode Time**              | 解码耗时        | `PerformanceEntry`    |


**“新格式、小体积、延迟加载、缓存稳、动态转。”** 即：WebP/AVIF + 压缩 + LazyLoad + CDN + 缓存。

</Collapse>


### 20.后端一次性返回树形结构数据，数据量非常大, 前端该如何处理？

<Collapse>

**“只渲染用户当前可见的部分 + 按需加载或异步展开 + 高效数据结构存取”**

| 目标       | 核心思路         | 实现方式                                |
| -------- | ------------ | ----------------------------------- |
| 降低初始渲染压力 | 懒加载、虚拟化      | 按需展开、按需渲染                           |
| 优化渲染性能   | 虚拟滚动、diff 优化 | react-window / vue-virtual-scroller |
| 优化数据结构   | 扁平化存储        | Map + parent/children 索引            |
| 提升交互性能   | 异步渲染 / 分片渲染  | requestIdleCallback + 分批渲染          |
| 资源分块     | 分页 / 分层加载    | 后端分页返回子节点                           |


- 后端按需返回
  - 前端仅请求需要展开的节点子树
- 虚拟滚动
  - 即使数据全在内存中，也只渲染可视范围内的节点
- 数据扁平化 + Map 索引结构
  - 将嵌套树结构转成扁平表结构，快速查找与局部更新。
- 分片渲染（Chunk Rendering）
  -  当必须一次性渲染大量节点时，用时间分片让主线程喘口气 😮
- Worker 分线程解析数据
  - 在后台线程中解析 / 扁平化树，主线程只负责渲染

**“懒加载、虚拟化、扁平存、分片渲、后台解。”**


</Collapse>


### 21.你认为组件封装的一些基本准则是什么？

<Collapse>

组件封装的一些基本准则包括：
1. 单一职责原则：一个组件应该具有单一的功能，并且只负责完成该功能，避免组件过于庞大和复
杂。
2. 高内聚低耦合：组件内部的各个部分之间应该紧密相关，组件与其他组件之间应该尽量解耦，减少
对外部的依赖。
3. 易用性：组件应该易于使用，提供清晰的接口和文档，使用户能够方便地使用组件。
4. 可扩展性：组件应该具有良好的扩展性，能够方便地添加新的功能或进行修改，同时不影响已有的
功能。
5. 可重用性：组件应该是可重用的，能够在多个项目中使用，减少重复开发的工作量。
6. 高效性：组件应该具有高性能和低资源消耗的特点，不会成为整个系统的性能瓶颈。
7. 安全性：组件应该具有安全性，能够防止恶意使用或攻击。
8. 可测试性：组件应该容易进行单元测试和集成测试，以保证组件的质量和稳定性

</Collapse>




---

1. 如何设计一个UI组件库?
    架构 → 技术选型 → 组件设计 → 工程化 → 发布维护
    架构选型: 组件模型, 样式方案, 构建工具, 语言
    设计原则: 颗粒度, 可配置性, 主题化 & 样式扩展, 无障碍, 国际化
    工程化: 按需加载 文档与演示 测试 ci/cd 发布
    开放流程: 定义 API（props、事件、样式接口）=> 设计交互（考虑鼠标、触屏、键盘）=> 实现逻辑（React Hooks / Vue Composition API）=> 写测试用例（props、边界情况、交互）=> 写文档 + Demo（Storybook / VitePress）=> 布版本 (语义化版本管理)


2. 前端架构设计
    模块化, 状态管理, 组件设计, 代码分割, 协作策略


3. 前端性能监控与优化
      前端埋点 + 异常日志上报(Sentry 自研)

4. 前端国际化与可扩展性

5. 设计一个拖拉拽的低平台要注意什么


6. 作为前端 TL 如何管理团队
    技术把关人,团队赋能者,项目推动者
    技术管理: 制定规范,把控架构,代码评审,技术沉淀
    人员管理: 任务拆解,人尽其才,成长规划
    项目管理: 明确目标,可视化进度,风险预警,跨团队沟通

7. 一般怎么做代码重构