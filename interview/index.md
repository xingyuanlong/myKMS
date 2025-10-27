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