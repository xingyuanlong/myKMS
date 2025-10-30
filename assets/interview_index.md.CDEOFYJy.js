import{_ as u,I as t,c as p,o as r,j as l,J as e,ah as o,a as n,w as i}from"./chunks/framework.fGi7qB65.js";const v=JSON.parse('{"title":"开放性问题, 场景性问题","description":"","frontmatter":{},"headers":[],"relativePath":"interview/index.md","filePath":"interview/index.md"}'),d={name:"interview/index.md"};function c(h,s,f,g,b,k){const a=t("Collapse");return r(),p("div",null,[s[19]||(s[19]=l("h1",{id:"开放性问题-场景性问题",tabindex:"-1"},[n("开放性问题, 场景性问题 "),l("a",{class:"header-anchor",href:"#开放性问题-场景性问题","aria-label":"Permalink to “开放性问题, 场景性问题”"},"​")],-1)),s[20]||(s[20]=l("h3",{id:"_1-如何判断用户是否离开当前页面",tabindex:"-1"},[n("1.如何判断用户是否离开当前页面? "),l("a",{class:"header-anchor",href:"#_1-如何判断用户是否离开当前页面","aria-label":"Permalink to “1.如何判断用户是否离开当前页面?”"},"​")],-1)),e(a,null,{default:i(()=>[...s[0]||(s[0]=[l("p",null,"一、页面可见性 Page Visibility API",-1),l("p",null,"判断用户标签页是否可见（切换到后台/最小化浏览器）",-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr"},[l("code",null,[l("span",{class:"line"},[l("span",null,"document.addEventListener('visibilitychange', () => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  if (document.hidden) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    console.log('用户离开页面（切换标签页或最小化）');")]),n(`
`),l("span",{class:"line"},[l("span",null,"  } else {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    console.log('用户回到页面');")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span",null,"});")])])])],-1),l("p",null,"二、窗口焦点（Focus / Blur）",-1),l("p",null,"检测窗口或 iframe 是否获得焦点",-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr"},[l("code",null,[l("span",{class:"line"},[l("span",null,"window.addEventListener('blur', () => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  console.log('用户离开了当前窗口/标签页');")]),n(`
`),l("span",{class:"line"},[l("span",null,"});")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"window.addEventListener('focus', () => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  console.log('用户回到当前窗口/标签页');")]),n(`
`),l("span",{class:"line"},[l("span",null,"});")])])])],-1),l("p",null,"三、用户离开页面 / 卸载（beforeunload / unload）",-1),l("p",null,"检测用户关闭页面、刷新或跳转。",-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr"},[l("code",null,[l("span",{class:"line"},[l("span",null,"window.addEventListener('beforeunload', (e) => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  console.log('用户可能离开页面');")]),n(`
`),l("span",{class:"line"},[l("span",null,"  // 阻止默认提示（可选）")]),n(`
`),l("span",{class:"line"},[l("span",null,"  e.preventDefault();")]),n(`
`),l("span",{class:"line"},[l("span",null,"  e.returnValue = '';")]),n(`
`),l("span",{class:"line"},[l("span",null,"});")])])])],-1),l("p",null,"四、鼠标 / 用户交互检测",-1),l("p",null,"当用户长时间没有交互（鼠标、键盘、触屏），可推测用户离开",-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr"},[l("code",null,[l("span",{class:"line"},[l("span",null,"let idleTimer;")]),n(`
`),l("span",{class:"line"},[l("span",null,"function resetIdle() {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  clearTimeout(idleTimer);")]),n(`
`),l("span",{class:"line"},[l("span",null,"  idleTimer = setTimeout(() => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    console.log('用户可能离开或无操作');")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }, 30000); // 30秒无操作")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"// 监听用户操作")]),n(`
`),l("span",{class:"line"},[l("span",null,"['mousemove','keydown','click','scroll','touchstart'].forEach(ev =>")]),n(`
`),l("span",{class:"line"},[l("span",null,"  document.addEventListener(ev, resetIdle)")]),n(`
`),l("span",{class:"line"},[l("span",null,");")]),n(`
`),l("span",{class:"line"},[l("span",null,"resetIdle();")])])])],-1),l("p",null,"可以检测“用户不活跃”，用于自动登出、心跳等.",-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr"},[l("code",null,[l("span",{class:"line"},[l("span",null,"let idleTimer;")]),n(`
`),l("span",{class:"line"},[l("span",null,"function onUserIdle() { console.log('用户离开页面或长时间不操作'); }")]),n(`
`),l("span",{class:"line"},[l("span",null,"function resetIdle() {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  clearTimeout(idleTimer);")]),n(`
`),l("span",{class:"line"},[l("span",null,"  idleTimer = setTimeout(onUserIdle, 30000);")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")]),n(`
`),l("span",{class:"line"},[l("span",null,"['mousemove','keydown','click','scroll','touchstart'].forEach(ev => ")]),n(`
`),l("span",{class:"line"},[l("span",null,"  document.addEventListener(ev, resetIdle)")]),n(`
`),l("span",{class:"line"},[l("span",null,");")]),n(`
`),l("span",{class:"line"},[l("span",null,"resetIdle();")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"document.addEventListener('visibilitychange', () => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  if (document.hidden) onUserIdle();")]),n(`
`),l("span",{class:"line"},[l("span",null,"});")]),n(`
`),l("span",{class:"line"},[l("span",null,"window.addEventListener('blur', onUserIdle);")]),n(`
`),l("span",{class:"line"},[l("span",null,"window.addEventListener('focus', resetIdle);")])])])],-1)])]),_:1}),s[21]||(s[21]=l("h3",{id:"_2-前端如何预览pdf",tabindex:"-1"},[n("2.前端如何预览pdf? "),l("a",{class:"header-anchor",href:"#_2-前端如何预览pdf","aria-label":"Permalink to “2.前端如何预览pdf?”"},"​")],-1)),e(a,null,{default:i(()=>[...s[1]||(s[1]=[l("p",null,[n("一、直接使用浏览器内置 PDF 渲染 - "),l("code",null,"<iframe>"),n(" 嵌入 - "),l("code",null,"<embed>"),n(" 标签 - 新开标签页")],-1),l("p",null,[n("二、使用 PDF.js - PDF.js 是最常用的前端 PDF 渲染库，可以在 "),l("code",null,"<canvas>"),n(" 上渲染 PDF 页面。")],-1)])]),_:1}),s[22]||(s[22]=l("h3",{id:"_3-前端批量请求失败toast重复弹窗怎么解决",tabindex:"-1"},[n("3.前端批量请求失败Toast重复弹窗怎么解决？ "),l("a",{class:"header-anchor",href:"#_3-前端批量请求失败toast重复弹窗怎么解决","aria-label":"Permalink to “3.前端批量请求失败Toast重复弹窗怎么解决？”"},"​")],-1)),e(a,null,{default:i(()=>[...s[2]||(s[2]=[l("ul",null,[l("li",null,"全局标志拦截: 无论多少错误只弹出一个错误"),l("li",null,"Toast 自身防抖, 短时间内只弹一次"),l("li",null,[n("错误聚合：在拦截器层面，收集短时间内的所有错误，然后合并成一条 Toast 显示 "),l("ul",null,[l("li",null,"在拦截器中不立即弹窗，而是将错误“收集”起来，用一个 debounce 函数在短时间后统一处理"),l("li",null,"错误分类队列和分类处理")])]),l("li",null,[n("业务层处理 "),l("ul",null,[l("li",null,"在发起请求时，告知拦截器“不要弹 Toast”，然后在业务代码中用 Promise.allSettled 手动处理所有结果")])]),l("li",null,"还可以加上重试机制和错误上报")],-1)])]),_:1}),s[23]||(s[23]=l("h3",{id:"_4-如何解决页面接口请求大规模并发问题",tabindex:"-1"},[n("4.如何解决页面接口请求大规模并发问题 "),l("a",{class:"header-anchor",href:"#_4-如何解决页面接口请求大规模并发问题","aria-label":"Permalink to “4.如何解决页面接口请求大规模并发问题”"},"​")],-1)),e(a,null,{default:i(()=>[...s[3]||(s[3]=[l("ul",null,[l("li",null,[l("p",null,"请求去重（防抖 + 节流 + 队列）"),l("ul",null,[l("li",null,"核心思想：同一资源、同一参数，不重复发请求。")])]),l("li",null,[l("p",null,"请求合并"),l("ul",null,[l("li",null,"把多个相似请求合并为一个。")])]),l("li",null,[l("p",null,"并发限制"),l("ul",null,[l("li",null,"控制同时发出的请求数，超过的进入队列。")])]),l("li",null,[l("p",null,"缓存")]),l("li",null,[l("p",null,"优化请求时机")])],-1)])]),_:1}),s[24]||(s[24]=l("h3",{id:"_5-渲染元素很多-如何保证页面不卡顿",tabindex:"-1"},[n("5.渲染元素很多, 如何保证页面不卡顿? "),l("a",{class:"header-anchor",href:"#_5-渲染元素很多-如何保证页面不卡顿","aria-label":"Permalink to “5.渲染元素很多, 如何保证页面不卡顿?”"},"​")],-1)),e(a,null,{default:i(()=>[...s[4]||(s[4]=[l("p",null,[n("核心思想是 "),l("strong",null,"只渲染用户可见的部分")],-1),l("p",null,[n("解决思路："),l("strong",null,"减少一次性渲染的 DOM 数量 + 批量更新 + GPU 加速 + 异步渲染")],-1),l("ul",null,[l("li",null,"虚拟列表（Virtual List）"),l("li",null,"时间分片（Time Slicing）/分批渲染"),l("li",null,[n("数据加载优化 "),l("ul",null,[l("li",null,"分页"),l("li",null,"无限滚动")])]),l("li",null,"DOM 操作批量化"),l("li",null,"避免复杂的 CSS 样式"),l("li",null,[n("减少重排与重绘 "),l("ul",null,[l("li",null,"合并 DOM 操作"),l("li",null,"避免频繁修改 layout 属性"),l("li",null,"使用 transform / opacity 做动画，配合 will-change 提前优化")])]),l("li",null,"CSS GPU 加速"),l("li",null,"虚拟 DOM / diff 优化"),l("li",null,[n("异步计算 "),l("ul",null,[l("li",null,"对大量计算操作使用 Web Worker"),l("li",null,"主线程只负责渲染，避免 JS 阻塞")])]),l("li",null,"框架优化")],-1)])]),_:1}),s[25]||(s[25]=l("h3",{id:"_6-前端低代码平台表单联动如何实现",tabindex:"-1"},[n("6.前端低代码平台表单联动如何实现 "),l("a",{class:"header-anchor",href:"#_6-前端低代码平台表单联动如何实现","aria-label":"Permalink to “6.前端低代码平台表单联动如何实现”"},"​")],-1)),e(a,null,{default:i(()=>[...s[5]||(s[5]=[l("ol",null,[l("li",null,"解析依赖关系"),l("li",null,"构建观察者 / 订阅机制"),l("li",null,"动态执行规则")],-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr"},[l("code",null,[l("span",{class:"line"},[l("span",null,"formFields = [")]),n(`
`),l("span",{class:"line"},[l("span",null,"  { field: 'province', type: 'select' },")]),n(`
`),l("span",{class:"line"},[l("span",null,"  { field: 'city', type: 'select', dependsOn: 'province', compute: (state) => cities[state.province] }")]),n(`
`),l("span",{class:"line"},[l("span",null,"]")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"// 生成依赖图")]),n(`
`),l("span",{class:"line"},[l("span",null,"depMap = {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  province: ['city']")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"// 字段值变化时触发依赖")]),n(`
`),l("span",{class:"line"},[l("span",null,"function onChange(field, value) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  formState[field] = value;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  (depMap[field] || []).forEach(depField => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    const compute = formFields.find(f => f.field === depField).compute;")]),n(`
`),l("span",{class:"line"},[l("span",null,"    if(compute) formState[depField] = compute(formState);")]),n(`
`),l("span",{class:"line"},[l("span",null,"  });")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])])],-1)])]),_:1}),s[26]||(s[26]=l("h3",{id:"_7-项目上遇到的难题",tabindex:"-1"},[n("7. 项目上遇到的难题 "),l("a",{class:"header-anchor",href:"#_7-项目上遇到的难题","aria-label":"Permalink to “7. 项目上遇到的难题”"},"​")],-1)),e(a),s[27]||(s[27]=l("h3",{id:"_8-想象一下-如果项目上线前一天-测试团队发现一个严重bug-但修复可能导致发布延期-你会如何处理",tabindex:"-1"},[n("8.想象一下，如果项目上线前一天，测试团队发现一个严重bug，但修复可能导致发布延期，你会如何处理？ "),l("a",{class:"header-anchor",href:"#_8-想象一下-如果项目上线前一天-测试团队发现一个严重bug-但修复可能导致发布延期-你会如何处理","aria-label":"Permalink to “8.想象一下，如果项目上线前一天，测试团队发现一个严重bug，但修复可能导致发布延期，你会如何处理？”"},"​")],-1)),e(a,null,{default:i(()=>[...s[6]||(s[6]=[l("p",null,"第一步：冷静评估 —— 判断问题的性质与影响范围",-1),l("ul",null,[l("li",null,"影响范围"),l("li",null,"复现条件"),l("li",null,"修复风险")],-1),l("p",null,"输出：问题严重程度报告（Critical / High / Medium / Low）+ 修复复杂度评估（简单 / 中等 / 高风险",-1),l("p",null,"第二步：权衡方案 —— 快速制定应急策略",-1),l("ul",null,[l("li",null,[l("p",null,"高风险 + 高影响（核心功能挂）"),l("ul",null,[l("li",null,"坚决延期上线")])]),l("li",null,[l("p",null,"低风险 + 高影响（可临时绕过）"),l("ul",null,[l("li",null,"上线但添加临时兜底方案")])]),l("li",null,[l("p",null,"高风险 + 低影响（边缘功能有隐患）"),l("ul",null,[l("li",null,"修复放入下个小版本或灰度")])]),l("li",null,[l("p",null,"沟通与协作策略"),l("ul",null,[l("li",null,"要让决策透明，团队共识明确")])]),l("li",null,[l("p",null,"上线后风控"),l("ul",null,[l("li",null,"快速回滚脚本"),l("li",null,"实时监控")])])],-1)])]),_:1}),s[28]||(s[28]=l("h3",{id:"_9-请分享一个你通过优化前端性能提升用户体验的案例-具体用了哪些技术手段",tabindex:"-1"},[n("9.请分享一个你通过优化前端性能提升用户体验的案例，具体用了哪些技术手段 "),l("a",{class:"header-anchor",href:"#_9-请分享一个你通过优化前端性能提升用户体验的案例-具体用了哪些技术手段","aria-label":"Permalink to “9.请分享一个你通过优化前端性能提升用户体验的案例，具体用了哪些技术手段”"},"​")],-1)),e(a,null,{default:i(()=>[...s[7]||(s[7]=[l("ul",null,[l("li",null,"路由级 按需加载"),l("li",null,"使用 Preload / Prefetch 提前请求关键资源"),l("li",null,"gzip 压缩"),l("li",null,"Tree Shaking"),l("li",null,"loading"),l("li",null,"合并接口/减少接口"),l("li",null,"渲染分级"),l("li",null,"骨架屏 + 异步渲染")],-1),l("p",null,"比如: 旧项目 webpackChunkName 设置不和导致code slipt 基本没效果, 根据项目实际重新配置 webpackChunkName",-1)])]),_:1}),s[29]||(s[29]=l("h3",{id:"_10-想象一下-如果你的团队在开发过程中遇到第三方库的严重漏洞-你会如何处理",tabindex:"-1"},[n("10.想象一下，如果你的团队在开发过程中遇到第三方库的严重漏洞，你会如何处理 "),l("a",{class:"header-anchor",href:"#_10-想象一下-如果你的团队在开发过程中遇到第三方库的严重漏洞-你会如何处理","aria-label":"Permalink to “10.想象一下，如果你的团队在开发过程中遇到第三方库的严重漏洞，你会如何处理”"},"​")],-1)),e(a,null,{default:i(()=>[...s[8]||(s[8]=[l("p",null,"1️⃣ 立即评估风险",-1),l("ul",null,[l("li",null,"确认漏洞影响范围"),l("li",null,"确定漏洞严重性")],-1),l("p",null,"2️⃣ 暂时缓解方案 如果漏洞立即可被利用：",-1),l("ul",null,[l("li",null,"临时回退/锁定依赖版本：回退到无漏洞的历史版本；"),l("li",null,"增加防护：例如在后端增加校验、限制敏感接口调用、关闭受影响功能；"),l("li",null,"升级依赖库：如果官方已经修复，尽快升级并回归测试。")],-1),l("p",null,[n("关键点："),l("strong",null,"先保护生产环境，保证业务安全")],-1),l("p",null,"3️⃣ 团队协作与信息通报",-1),l("ul",null,[l("li",null,"通知相关团队：产品、测试、运维和安全团队；"),l("li",null,"记录漏洞事件：漏洞类型、影响范围、临时处理方案；"),l("li",null,"同步上线计划：判断是否需要紧急发布补丁，或在下次发布中修复。")],-1),l("p",null,"4️⃣ 长期解决方案",-1),l("ul",null,[l("li",null,"建立依赖管理策略"),l("li",null,"替换或隔离高风险库"),l("li",null,"增强 CI/CD 安全管控")],-1)])]),_:1}),s[30]||(s[30]=l("h3",{id:"_11-请求竞态如何处理",tabindex:"-1"},[n("11.请求竞态如何处理? "),l("a",{class:"header-anchor",href:"#_11-请求竞态如何处理","aria-label":"Permalink to “11.请求竞态如何处理?”"},"​")],-1)),e(a,null,{default:i(()=>[...s[9]||(s[9]=[l("p",null,"竞态往往导致了 UI 显示错误的旧数据",-1),l("ol",null,[l("li",null,"请求标识（requestId + 比对）")],-1),l("ul",null,[l("li",null,"每个请求都有唯一 ID，只保留最后一次发出的响应结果。 react 可以使用 ref 包裹 lastRequestId")],-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr"},[l("code",null,[l("span",{class:"line"},[l("span",null,"let lastRequestId = 0;")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"async function fetchData(query) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  const requestId = ++lastRequestId; // 每次请求自增")]),n(`
`),l("span",{class:"line"},[l("span",null,"  const res = await fetch(`/api/search?q=${query}`);")]),n(`
`),l("span",{class:"line"},[l("span",null,"  const data = await res.json();")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  if (requestId === lastRequestId) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    setData(data); // 只有最新请求才能更新UI")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])])],-1),l("ol",{start:"2"},[l("li",null,"AbortController（中断旧请求）")],-1),l("ul",null,[l("li",null,"在发新请求前，主动“中止”旧请求。")],-1),l("ol",{start:"3"},[l("li",null,"使用 useEffect + cleanup")],-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr"},[l("code",null,[l("span",{class:"line"},[l("span",null,"useEffect(() => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  let canceled = false;")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  (async () => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    const res = await fetch(`/api/data?id=${id}`);")]),n(`
`),l("span",{class:"line"},[l("span",null,"    const data = await res.json();")]),n(`
`),l("span",{class:"line"},[l("span",null,"    if (!canceled) setData(data);")]),n(`
`),l("span",{class:"line"},[l("span",null,"  })();")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  return () => (canceled = true); // 清理逻辑")]),n(`
`),l("span",{class:"line"},[l("span",null,"}, [id]);")])])])],-1),l("ol",{start:"4"},[l("li",null,"使用 SWR / React Query 等数据层库")],-1),l("p",null,"请求竞态的本质是异步返回的先后顺序失序。",-1),l("p",null,"解决方案的核心思想就是：",-1),l("ul",null,[l("li",null,"要么 中止旧请求；"),l("li",null,"要么 忽略旧响应；"),l("li",null,"或者 让库帮你管理一致性。")],-1)])]),_:1}),s[31]||(s[31]=l("h3",{id:"_12-实现-从详情页返回列表页保存上次加载的数据和自动还原上次的浏览位置。",tabindex:"-1"},[n("12.实现 从详情页返回列表页保存上次加载的数据和自动还原上次的浏览位置。 "),l("a",{class:"header-anchor",href:"#_12-实现-从详情页返回列表页保存上次加载的数据和自动还原上次的浏览位置。","aria-label":"Permalink to “12.实现 从详情页返回列表页保存上次加载的数据和自动还原上次的浏览位置。”"},"​")],-1)),e(a,null,{default:i(()=>[...s[10]||(s[10]=[l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"方案"),l("th",null,"实现原理"),l("th",null,"适用场景")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("strong",null,"方案 1：状态提升到全局")]),l("td",null,"把列表数据与滚动位置存入全局状态（Context、Redux、Recoil、Zustand等）"),l("td",null,"✅ 通用、推荐")]),l("tr",null,[l("td",null,[l("strong",null,"方案 2：缓存整个列表组件")]),l("td",null,[n("使用 "),l("code",null,"<KeepAlive>"),n(" 或路由缓存（React Router + custom cache）")]),l("td",null,"✅ 简单但侵入性较高")])])],-1),l("p",null,[n("Vue 3 自带了"),l("code",null," <KeepAlive>"),n(" 组件")],-1),l("p",null,"react 实现 keep-alive",-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr"},[l("code",null,[l("span",{class:"line"},[l("span",null,"// KeepAlive.jsx ")]),n(`
`),l("span",{class:"line"},[l("span",null,"import { useRef } from 'react';")]),n(`
`),l("span",{class:"line"},[l("span",null,"import { useLocation } from 'react-router-dom';")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"export default function KeepAlive({ children }) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  const location = useLocation();")]),n(`
`),l("span",{class:"line"},[l("span",null,"  const cacheRef = useRef({});")]),n(`
`),l("span",{class:"line"},[l("span",null,"  const path = location.pathname;")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  Object.keys(cacheRef.current).forEach((key) => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    cacheRef.current[key].style.display = key === path ? 'block' : 'none';")]),n(`
`),l("span",{class:"line"},[l("span",null,"  });")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  if (!cacheRef.current[path]) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    const div = document.createElement('div');")]),n(`
`),l("span",{class:"line"},[l("span",null,"    div.style.display = 'block';")]),n(`
`),l("span",{class:"line"},[l("span",null,"    cacheRef.current[path] = div;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  return (")]),n(`
`),l("span",{class:"line"},[l("span",null,"    <>")]),n(`
`),l("span",{class:"line"},[l("span",null,"      {Object.entries(cacheRef.current).map(([key, container]) => (")]),n(`
`),l("span",{class:"line"},[l("span",null,"        <div")]),n(`
`),l("span",{class:"line"},[l("span",null,"          key={key}")]),n(`
`),l("span",{class:"line"},[l("span",null,"          style={{ display: key === path ? 'block' : 'none' }}")]),n(`
`),l("span",{class:"line"},[l("span",null,"        >")]),n(`
`),l("span",{class:"line"},[l("span",null,"          {key === path ? children : null}")]),n(`
`),l("span",{class:"line"},[l("span",null,"        </div>")]),n(`
`),l("span",{class:"line"},[l("span",null,"      ))}")]),n(`
`),l("span",{class:"line"},[l("span",null,"    </>")]),n(`
`),l("span",{class:"line"},[l("span",null,"  );")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])])],-1)])]),_:1}),s[32]||(s[32]=l("h3",{id:"_13-设计一套全站页面加载耗时统计工具",tabindex:"-1"},[n("13. 设计一套全站页面加载耗时统计工具 "),l("a",{class:"header-anchor",href:"#_13-设计一套全站页面加载耗时统计工具","aria-label":"Permalink to “13. 设计一套全站页面加载耗时统计工具”"},"​")],-1)),e(a,null,{default:i(()=>[...s[11]||(s[11]=[l("ul",null,[l("li",null,"实时/离线监控页面加载体验（首屏、交互、资源、网络等）。"),l("li",null,"支持 SPA + MPA、移动端与桌面端。"),l("li",null,"能按 URL、用户群、地理/运营维度切分（例如：p50/p90/p95）。"),l("li",null,"支持异常告警（例如：p95 突增、LCP 超阈值）。"),l("li",null,"低埋点侵入、低成本存储、可扩展分析与可视化。")],-1),l("p",null,"指标（What to collect）",-1),l("ul",null,[l("li",null,[l("p",null,"分为「关键体验指标（Web Vitals）」与「补充指标」："),l("ul",null,[l("li",null,[n("核心（必须） "),l("ul",null,[l("li",null,"LCP（Largest Contentful Paint）"),l("li",null,"FCP（First Contentful Paint）"),l("li",null,"TTFB（Time To First Byte）"),l("li",null,"DOMContentLoaded（DCL）"),l("li",null,"Load Event（onload）"),l("li",null,"CLS（Cumulative Layout Shift）"),l("li",null,"FID / INP（First Input Delay / Interaction to Next Paint）"),l("li",null,"JS/Vue/React 渲染耗时（自定义埋点）"),l("li",null,"页面总体耗时：导航开始到 onload、以及自定的“首交互完成”时间")])])])]),l("li",null,[l("p",null,"资源类（可选）"),l("ul",null,[l("li",null,"Resource timing（各静态资源的加载耗时：dns, connect, ssl, request, response, duration）"),l("li",null,"图片/字体/第三方脚本的失败率与耗时")])])],-1),l("p",null,"网络/环境上下文（必须）",-1),l("ul",null,[l("li",null,"URL / route（路由名）"),l("li",null,"Referrer / entry type（navigate, reload, back_forward）"),l("li",null,"UserAgent / 浏览器、版本、操作系统"),l("li",null,"网络信息：effectiveType、downlink、rtt（若可用）"),l("li",null,"地点（可选：基于 IP 反查或前端传入地区）"),l("li",null,"Client timestamp / server timestamp（用于校准）")],-1),l("p",null,"错误上下文（可选）",-1),l("ul",null,[l("li",null,"JS 错误（message, stack, filename, lineno）以便关联慢页面与错误。")],-1),l("p",null,"采样与频率",-1),l("ul",null,[l("li",null,"生产环境：默认采样率 1% - 10%（视流量与预算），关键页面或实验中 100% 采集。"),l("li",null,"支持动态下发采样策略（CDN / 配置中心）。")],-1),l("p",null,"前端采集 SDK（关键实现要点 + 代码示例）",-1),l("p",null,"要点：",-1),l("ul",null,[l("li",null,"仅在 document.visibilityState === 'visible' 时采集（避免 background 干扰）"),l("li",null,"优先用 PerformanceObserver 捕获 LCP / FID / CLS / Paint"),l("li",null,"收集 performance.getEntriesByType('resource')（资源耗时，限量采样）"),l("li",null,"批量上报：合并短时间内的多条事件，阈值（条数/时长）触发上报"),l("li",null,"在 pagehide/unload 用 navigator.sendBeacon 发送最后一条数据"),l("li",null,"控制上报体积：每次上报限制 10KB 左右，过大时只上报关键字段或采样")],-1),l("p",null,"js sdk",-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr"},[l("code",null,[l("span",{class:"line"},[l("span",null,"// perf-sdk.js (浏览器端核心逻辑, 精简示例)")]),n(`
`),l("span",{class:"line"},[l("span",null,"(function (window) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  const APP = {};")]),n(`
`),l("span",{class:"line"},[l("span",null,"  const SEND_URL = '/beacon/perf';")]),n(`
`),l("span",{class:"line"},[l("span",null,"  const BATCH_MAX = 20;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  const BATCH_INTERVAL = 5000; // ms")]),n(`
`),l("span",{class:"line"},[l("span",null,"  let queue = [];")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  function now() { return Math.round(performance.now()); }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  // 收集 web vitals")]),n(`
`),l("span",{class:"line"},[l("span",null,"  function installVitals() {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    // LCP")]),n(`
`),l("span",{class:"line"},[l("span",null,"    try {")]),n(`
`),l("span",{class:"line"},[l("span",null,"      const po = new PerformanceObserver((list) => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"        const entries = list.getEntries();")]),n(`
`),l("span",{class:"line"},[l("span",null,"        const last = entries[entries.length - 1];")]),n(`
`),l("span",{class:"line"},[l("span",null,"        if (last) push({ k: 'lcp', v: Math.round(last.startTime) });")]),n(`
`),l("span",{class:"line"},[l("span",null,"      });")]),n(`
`),l("span",{class:"line"},[l("span",null,"      po.observe({ type: 'largest-contentful-paint', buffered: true });")]),n(`
`),l("span",{class:"line"},[l("span",null,"    } catch (e) {}")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"    // CLS")]),n(`
`),l("span",{class:"line"},[l("span",null,"    try {")]),n(`
`),l("span",{class:"line"},[l("span",null,"      let clsValue = 0;")]),n(`
`),l("span",{class:"line"},[l("span",null,"      const po2 = new PerformanceObserver((list) => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"        for (const entry of list.getEntries()) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"          if (!entry.hadRecentInput) clsValue += entry.value;")]),n(`
`),l("span",{class:"line"},[l("span",null,"        }")]),n(`
`),l("span",{class:"line"},[l("span",null,"      });")]),n(`
`),l("span",{class:"line"},[l("span",null,"      po2.observe({ type: 'layout-shift', buffered: true });")]),n(`
`),l("span",{class:"line"},[l("span",null,"      window.addEventListener('visibilitychange', () => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"        if (document.visibilityState === 'hidden') push({ k: 'cls', v: clsValue });")]),n(`
`),l("span",{class:"line"},[l("span",null,"      });")]),n(`
`),l("span",{class:"line"},[l("span",null,"    } catch (e) {}")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"    // FCP")]),n(`
`),l("span",{class:"line"},[l("span",null,"    try {")]),n(`
`),l("span",{class:"line"},[l("span",null,"      const po3 = new PerformanceObserver((list) => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"        const fcp = list.getEntries()[0];")]),n(`
`),l("span",{class:"line"},[l("span",null,"        if (fcp) push({ k: 'fcp', v: Math.round(fcp.startTime) });")]),n(`
`),l("span",{class:"line"},[l("span",null,"      });")]),n(`
`),l("span",{class:"line"},[l("span",null,"      po3.observe({ type: 'paint', buffered: true });")]),n(`
`),l("span",{class:"line"},[l("span",null,"    } catch (e) {}")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  function captureNavigation() {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    const nav = performance.getEntriesByType('navigation')[0];")]),n(`
`),l("span",{class:"line"},[l("span",null,"    if (nav) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"      push({ k: 'ttfb', v: Math.round(nav.responseStart) });")]),n(`
`),l("span",{class:"line"},[l("span",null,"      push({ k: 'domcontentloaded', v: Math.round(nav.domContentLoadedEventEnd) });")]),n(`
`),l("span",{class:"line"},[l("span",null,"      push({ k: 'load', v: Math.round(nav.loadEventEnd) });")]),n(`
`),l("span",{class:"line"},[l("span",null,"    } else if (performance.timing) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"      const t = performance.timing;")]),n(`
`),l("span",{class:"line"},[l("span",null,"      push({ k: 'ttfb', v: t.responseStart - t.requestStart });")]),n(`
`),l("span",{class:"line"},[l("span",null,"    }")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  function push(event) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    const payload = {")]),n(`
`),l("span",{class:"line"},[l("span",null,"      ts: Date.now(),")]),n(`
`),l("span",{class:"line"},[l("span",null,"      url: location.pathname + location.search,")]),n(`
`),l("span",{class:"line"},[l("span",null,"      ua: navigator.userAgent,")]),n(`
`),l("span",{class:"line"},[l("span",null,"      navType: performance.getEntriesByType('navigation')[0]?.type || 'navigate',")]),n(`
`),l("span",{class:"line"},[l("span",null,"      ...event")]),n(`
`),l("span",{class:"line"},[l("span",null,"    };")]),n(`
`),l("span",{class:"line"},[l("span",null,"    queue.push(payload);")]),n(`
`),l("span",{class:"line"},[l("span",null,"    if (queue.length >= BATCH_MAX) flush();")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  function flush() {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    if (queue.length === 0) return;")]),n(`
`),l("span",{class:"line"},[l("span",null,"    const body = JSON.stringify(queue.splice(0, BATCH_MAX));")]),n(`
`),l("span",{class:"line"},[l("span",null,"    // prefer sendBeacon")]),n(`
`),l("span",{class:"line"},[l("span",null,"    if (navigator.sendBeacon) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"      navigator.sendBeacon(SEND_URL, body);")]),n(`
`),l("span",{class:"line"},[l("span",null,"    } else {")]),n(`
`),l("span",{class:"line"},[l("span",null,"      fetch(SEND_URL, { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body }).catch(()=>{});")]),n(`
`),l("span",{class:"line"},[l("span",null,"    }")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  // 定时发送")]),n(`
`),l("span",{class:"line"},[l("span",null,"  setInterval(flush, BATCH_INTERVAL);")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  // 在卸载页面时发送")]),n(`
`),l("span",{class:"line"},[l("span",null,"  window.addEventListener('pagehide', flush);")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  // init")]),n(`
`),l("span",{class:"line"},[l("span",null,"  installVitals();")]),n(`
`),l("span",{class:"line"},[l("span",null,"  captureNavigation();")]),n(`
`),l("span",{class:"line"},[l("span",null,"  APP.flush = flush;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  window.__PerfSDK = APP;")]),n(`
`),l("span",{class:"line"},[l("span",null,"})(window);")])])])],-1)])]),_:1}),s[33]||(s[33]=l("h3",{id:"_14-h5-如何解决移动端适配问题",tabindex:"-1"},[n("14. H5 如何解决移动端适配问题 "),l("a",{class:"header-anchor",href:"#_14-h5-如何解决移动端适配问题","aria-label":"Permalink to “14. H5 如何解决移动端适配问题”"},"​")],-1)),e(a,null,{default:i(()=>[...s[12]||(s[12]=[l("p",null,[n("HTML"),l("code",null,"<meta viewport>"),n("标签告诉浏览器页面的“逻辑宽度”和缩放比例。")],-1),l("p",null,[l("code",null,'<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">')],-1),l("ul",null,[l("li",null,[l("p",null,[l("code",null,"width=device-width"),n("：逻辑宽度等于设备宽度；")])]),l("li",null,[l("p",null,[l("code",null,"initial-scale=1.0"),n("：不缩放；")])]),l("li",null,[l("p",null,"禁止用户缩放，避免布局错乱。")]),l("li",null,[l("p",null,"使用 rem 适配 ;")]),l("li",null,[l("p",null,"使用 vw/vh 适配")])],-1)])]),_:1}),s[34]||(s[34]=l("h3",{id:"_15-函数式编程",tabindex:"-1"},[n("15. 函数式编程 "),l("a",{class:"header-anchor",href:"#_15-函数式编程","aria-label":"Permalink to “15. 函数式编程”"},"​")],-1)),e(a,null,{default:i(()=>[...s[13]||(s[13]=[l("p",null,"函数式编程是一种编程范式，它强调使用函数进行计算，尽量避免可变状态和副作用。",-1),l("ul",null,[l("li",null,[l("strong",null,"函数是一等公民：函数可以像变量一样传递、返回、赋值。")]),l("li",null,[l("strong",null,"避免共享状态：数据不可变，改变数据会产生新副本。")]),l("li",null,[l("strong",null,"组合函数：通过小函数组合形成大函数。")])],-1),l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"概念"),l("th",null,"说明"),l("th",null,"示例（JS）")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("strong",null,"纯函数（Pure Function）")]),l("td",null,"相同输入，永远得到相同输出，不修改外部状态"),l("td",null,[l("code",null,"const add = (a,b) => a+b;")])]),l("tr",null,[l("td",null,[l("strong",null,"不可变数据（Immutable）")]),l("td",null,"数据不被修改，每次操作返回新对象/数组"),l("td",null,[l("code",null,"const newArr = [...arr, 4];")])]),l("tr",null,[l("td",null,[l("strong",null,"高阶函数（Higher-Order Function）")]),l("td",null,"函数作为参数或返回值"),l("td",null,[l("code",null,"arr.map(x => x*2)")])]),l("tr",null,[l("td",null,[l("strong",null,"函数组合（Function Composition）")]),l("td",null,"小函数组合形成复杂逻辑"),l("td",null,[l("code",null,"const f = x => x+1; const g = x => x*2; const h = x => g(f(x));")])]),l("tr",null,[l("td",null,[l("strong",null,"递归（Recursion）")]),l("td",null,"FP 常用代替循环"),l("td",null,[l("code",null,"const factorial = n => n<=1?1:n*factorial(n-1);")])]),l("tr",null,[l("td",null,[l("strong",null,"不可变状态与副作用控制")]),l("td",null,"避免修改全局变量"),l("td",null,[n("使用 "),l("code",null,"map"),n(", "),l("code",null,"filter"),n(", "),l("code",null,"reduce")])])])],-1)])]),_:1}),s[35]||(s[35]=l("h3",{id:"_16-js如何统计长任务时间、长任务执行次数",tabindex:"-1"},[n("16. js如何统计长任务时间、长任务执行次数 "),l("a",{class:"header-anchor",href:"#_16-js如何统计长任务时间、长任务执行次数","aria-label":"Permalink to “16. js如何统计长任务时间、长任务执行次数”"},"​")],-1)),e(a,null,{default:i(()=>[...s[14]||(s[14]=[l("p",null,[l("strong",null,"当主线程（Main Thread）执行某个任务超过 50ms"),n("，它就被标记为一个 “Long Task”。")],-1),l("p",null,'浏览器提供了 PerformanceObserver 接口，监听类型为 "longtask" 的性能条目。',-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr"},[l("code",null,[l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"let longTaskCount = 0;")]),n(`
`),l("span",{class:"line"},[l("span",null,"let totalLongTaskTime = 0;")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"if ('PerformanceObserver' in window) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  const observer = new PerformanceObserver((list) => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    list.getEntries().forEach(entry => {")]),n(`
`),l("span",{class:"line"},[l("span",null,"      // 每个 entry 表示一个长任务")]),n(`
`),l("span",{class:"line"},[l("span",null,"      longTaskCount++;")]),n(`
`),l("span",{class:"line"},[l("span",null,"      totalLongTaskTime += entry.duration;")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"      console.log(`[LongTask] ${entry.name} 耗时 ${entry.duration.toFixed(2)}ms`);")]),n(`
`),l("span",{class:"line"},[l("span",null,"      console.log('来源：', item.name, '类型：', item.entryType, 'URL：', item.containerSrc);")]),n(`
`),l("span",{class:"line"},[l("span",null,"    });")]),n(`
`),l("span",{class:"line"},[l("span",null,"  });")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  observer.observe({ entryTypes: ['longtask'] });")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])])],-1)])]),_:1}),s[36]||(s[36]=l("h3",{id:"_18-如何禁止别人调试自己的前端页面代码",tabindex:"-1"},[n("18. 如何禁止别人调试自己的前端页面代码? "),l("a",{class:"header-anchor",href:"#_18-如何禁止别人调试自己的前端页面代码","aria-label":"Permalink to “18. 如何禁止别人调试自己的前端页面代码?”"},"​")],-1)),e(a,null,{default:i(()=>[...s[15]||(s[15]=[l("ul",null,[l("li",null,[l("p",null,"代码混淆 & 压缩 (obfuscation / minification)")]),l("li",null,[l("p",null,"不提供／禁用 source-map 在生产环境")]),l("li",null,[l("p",null,"检测 DevTools 或控制台开启并做限制"),l("ul",null,[l("li",null,"无限 debugger, 定时器内无限 debugger, 打卡DevTools 就会无限DevTools"),l("li",null,"无限 debugger 代码 加密 混淆, 用 eval 执行"),l("li",null,"判断宽高变化")])]),l("li",null,[l("p",null,"将核心逻辑或敏感信息放到服务端执行")]),l("li",null,[l("p",null,"限制 API／资源访问，通过认证、授权、接口防滥用")])],-1)])]),_:1}),s[37]||(s[37]=l("h3",{id:"_19-web-系统里面-如何对图片进行优化",tabindex:"-1"},[n("19.web 系统里面， 如何对图片进行优化？ "),l("a",{class:"header-anchor",href:"#_19-web-系统里面-如何对图片进行优化","aria-label":"Permalink to “19.web 系统里面， 如何对图片进行优化？”"},"​")],-1)),e(a,null,{default:i(()=>[...s[16]||(s[16]=[l("p",null,[n("总体目标: "),l("strong",null,"以 最小的文件体积、最快的加载速度、最好的视觉质量 呈现图片。"),n(" 图片优化是提升用户体验、提高网站性能、减少流量消耗和增加搜索引擎曝光度的关键因素。")],-1),l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"优化方向"),l("th",null,"关键手段"),l("th",null,"说明")])]),l("tbody",null,[l("tr",null,[l("td",null,"1️⃣ 格式优化"),l("td",null,"WebP / AVIF / SVG 等新格式"),l("td",null,"减少体积，兼容回退")]),l("tr",null,[l("td",null,"2️⃣ 压缩优化"),l("td",null,"无损 / 有损压缩"),l("td",null,"使用工具或 CI 自动处理")]),l("tr",null,[l("td",null,"3️⃣ 尺寸优化"),l("td",null,[n("响应式图片（"),l("code",null,"srcset"),n("）")]),l("td",null,"按设备分发合适大小")]),l("tr",null,[l("td",null,"4️⃣ 缓存优化"),l("td",null,"HTTP 缓存 + CDN 缓存"),l("td",null,"减少重复加载")]),l("tr",null,[l("td",null,"5️⃣ 加载优化"),l("td",null,"懒加载 / 占位图"),l("td",null,"减少首屏压力")]),l("tr",null,[l("td",null,"6️⃣ 传输优化"),l("td",null,"CDN 加速 + Brotli/Gzip 压缩"),l("td",null,"优化网络传输层")]),l("tr",null,[l("td",null,"7️⃣ 渲染优化"),l("td",null,"使用 CSS / SVG 替代位图"),l("td",null,"减少渲染消耗")]),l("tr",null,[l("td",null,"8️⃣ 预加载与优先级控制"),l("td",null,"preload / fetchpriority"),l("td",null,"优化关键资源加载顺序")])])],-1),l("p",null,"格式优化：选对图片格式",-1),l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"类型"),l("th",null,"适用场景"),l("th",null,"优点"),l("th",null,"缺点")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("strong",null,"JPEG")]),l("td",null,"照片、复杂色彩"),l("td",null,"体积小"),l("td",null,"有损压缩")]),l("tr",null,[l("td",null,[l("strong",null,"PNG")]),l("td",null,"图标、透明图"),l("td",null,"无损"),l("td",null,"体积大")]),l("tr",null,[l("td",null,[l("strong",null,"SVG")]),l("td",null,"矢量图、图标"),l("td",null,"无限放大不失真"),l("td",null,"不适合照片")]),l("tr",null,[l("td",null,[l("strong",null,"WebP")]),l("td",null,"通用"),l("td",null,"小体积 + 透明 + 动图"),l("td",null,"旧浏览器兼容性较差")]),l("tr",null,[l("td",null,[l("strong",null,"AVIF")]),l("td",null,"下一代格式"),l("td",null,"比 WebP 再小 20%+"),l("td",null,"解码慢，部分浏览器不支持")]),l("tr",null,[l("td",null,[l("strong",null,"GIF → video")]),l("td",null,"动图替换"),l("td",null,"用 MP4 / WebM"),l("td",null,"体积更小，流畅度高")]),l("tr",null,[l("td",null,[l("strong",null,"使用 WebP")]),l("td"),l("td"),l("td")])])],-1),l("p",null,"性能监控与指标追踪",-1),l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"指标"),l("th",null,"说明"),l("th",null,"监控方式")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("strong",null,"LCP (Largest Contentful Paint)")]),l("td",null,"首屏最大图片加载时间"),l("td",null,[l("code",null,"PerformanceObserver")])]),l("tr",null,[l("td",null,[l("strong",null,"CLS (Cumulative Layout Shift)")]),l("td",null,"图片未占位导致布局抖动"),l("td",null,"预设宽高可避免")]),l("tr",null,[l("td",null,[l("strong",null,"Image Decode Time")]),l("td",null,"解码耗时"),l("td",null,[l("code",null,"PerformanceEntry")])])])],-1),l("p",null,[l("strong",null,"“新格式、小体积、延迟加载、缓存稳、动态转。”"),n(" 即：WebP/AVIF + 压缩 + LazyLoad + CDN + 缓存。")],-1)])]),_:1}),s[38]||(s[38]=l("h3",{id:"_20-后端一次性返回树形结构数据-数据量非常大-前端该如何处理",tabindex:"-1"},[n("20.后端一次性返回树形结构数据，数据量非常大, 前端该如何处理？ "),l("a",{class:"header-anchor",href:"#_20-后端一次性返回树形结构数据-数据量非常大-前端该如何处理","aria-label":"Permalink to “20.后端一次性返回树形结构数据，数据量非常大, 前端该如何处理？”"},"​")],-1)),e(a,null,{default:i(()=>[...s[17]||(s[17]=[l("p",null,[l("strong",null,"“只渲染用户当前可见的部分 + 按需加载或异步展开 + 高效数据结构存取”")],-1),l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"目标"),l("th",null,"核心思路"),l("th",null,"实现方式")])]),l("tbody",null,[l("tr",null,[l("td",null,"降低初始渲染压力"),l("td",null,"懒加载、虚拟化"),l("td",null,"按需展开、按需渲染")]),l("tr",null,[l("td",null,"优化渲染性能"),l("td",null,"虚拟滚动、diff 优化"),l("td",null,"react-window / vue-virtual-scroller")]),l("tr",null,[l("td",null,"优化数据结构"),l("td",null,"扁平化存储"),l("td",null,"Map + parent/children 索引")]),l("tr",null,[l("td",null,"提升交互性能"),l("td",null,"异步渲染 / 分片渲染"),l("td",null,"requestIdleCallback + 分批渲染")]),l("tr",null,[l("td",null,"资源分块"),l("td",null,"分页 / 分层加载"),l("td",null,"后端分页返回子节点")])])],-1),l("ul",null,[l("li",null,[n("后端按需返回 "),l("ul",null,[l("li",null,"前端仅请求需要展开的节点子树")])]),l("li",null,[n("虚拟滚动 "),l("ul",null,[l("li",null,"即使数据全在内存中，也只渲染可视范围内的节点")])]),l("li",null,[n("数据扁平化 + Map 索引结构 "),l("ul",null,[l("li",null,"将嵌套树结构转成扁平表结构，快速查找与局部更新。")])]),l("li",null,[n("分片渲染（Chunk Rendering） "),l("ul",null,[l("li",null,"当必须一次性渲染大量节点时，用时间分片让主线程喘口气 😮")])]),l("li",null,[n("Worker 分线程解析数据 "),l("ul",null,[l("li",null,"在后台线程中解析 / 扁平化树，主线程只负责渲染")])])],-1),l("p",null,[l("strong",null,"“懒加载、虚拟化、扁平存、分片渲、后台解。”")],-1)])]),_:1}),s[39]||(s[39]=l("h3",{id:"_21-你认为组件封装的一些基本准则是什么",tabindex:"-1"},[n("21.你认为组件封装的一些基本准则是什么？ "),l("a",{class:"header-anchor",href:"#_21-你认为组件封装的一些基本准则是什么","aria-label":"Permalink to “21.你认为组件封装的一些基本准则是什么？”"},"​")],-1)),e(a,null,{default:i(()=>[...s[18]||(s[18]=[l("p",null,"组件封装的一些基本准则包括：",-1),l("ol",null,[l("li",null,"单一职责原则：一个组件应该具有单一的功能，并且只负责完成该功能，避免组件过于庞大和复 杂。"),l("li",null,"高内聚低耦合：组件内部的各个部分之间应该紧密相关，组件与其他组件之间应该尽量解耦，减少 对外部的依赖。"),l("li",null,"易用性：组件应该易于使用，提供清晰的接口和文档，使用户能够方便地使用组件。"),l("li",null,"可扩展性：组件应该具有良好的扩展性，能够方便地添加新的功能或进行修改，同时不影响已有的 功能。"),l("li",null,"可重用性：组件应该是可重用的，能够在多个项目中使用，减少重复开发的工作量。"),l("li",null,"高效性：组件应该具有高性能和低资源消耗的特点，不会成为整个系统的性能瓶颈。"),l("li",null,"安全性：组件应该具有安全性，能够防止恶意使用或攻击。"),l("li",null,"可测试性：组件应该容易进行单元测试和集成测试，以保证组件的质量和稳定性")],-1)])]),_:1}),s[40]||(s[40]=o("<hr><ol><li><p>如何设计一个UI组件库? 架构 → 技术选型 → 组件设计 → 工程化 → 发布维护 架构选型: 组件模型, 样式方案, 构建工具, 语言 设计原则: 颗粒度, 可配置性, 主题化 &amp; 样式扩展, 无障碍, 国际化 工程化: 按需加载 文档与演示 测试 ci/cd 发布 开放流程: 定义 API（props、事件、样式接口）=&gt; 设计交互（考虑鼠标、触屏、键盘）=&gt; 实现逻辑（React Hooks / Vue Composition API）=&gt; 写测试用例（props、边界情况、交互）=&gt; 写文档 + Demo（Storybook / VitePress）=&gt; 布版本 (语义化版本管理)</p></li><li><p>前端架构设计 模块化, 状态管理, 组件设计, 代码分割, 协作策略</p></li><li><p>前端性能监控与优化 前端埋点 + 异常日志上报(Sentry 自研)</p></li><li><p>前端国际化与可扩展性</p></li><li><p>设计一个拖拉拽的低平台要注意什么</p></li><li><p>作为前端 TL 如何管理团队 技术把关人,团队赋能者,项目推动者 技术管理: 制定规范,把控架构,代码评审,技术沉淀 人员管理: 任务拆解,人尽其才,成长规划 项目管理: 明确目标,可视化进度,风险预警,跨团队沟通</p></li><li><p>一般怎么做代码重构</p></li></ol>",2))])}const y=u(d,[["render",c]]);export{v as __pageData,y as default};
