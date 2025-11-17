# Angular

## 学习笔记



1. 元素绑定动态属性使用[xxx], 绑定事件(click)="handle()", 使用 @if @for {{}} 等 @for 的时候使用 track 关键子绑定HTML
  - track 表达式允许 Angular 维护数据与页面上的 DOM 节点之间的关系。这使得 Angular 能够在数据更改时执行最少的必要 DOM 操作，从而优化性能。
2. 父组件使用子组件, 需要 imports 子组件, 再在template内写子组件的selector
3. 子组件获取props 使用 input() 模板使用则用xxx(), 子组件向上触发props的事件需要定义output(), 然后使用 emit 触发
4. Deferrable Views  可延迟视图
   - 使用 @defer 块包装注释组件以延迟加载它。
   - 可以设置 @placeholder @loading 2个都可以设置最小时间minimum
   - @defer (on viewport) 添加视口触发器，以便内容在进入视口后延迟加载。
   - 

5. NgOptimizedImage 指令可以优化图像
  - NgOptimizedImage 指令要求每张图片都同时具有width height这两个尺寸属性。 或者使用 fill 属性
  - LCP 元素是页面加载时屏幕上最大的图形元素。为了优化加载时间，请务必为“主图”或任何其他您认为可能属于 LCP 元素的图片添加 priority 属性。
  - 可以使用providers, provideImgixLoader 指定图片加载器

6. 路由使用 routerLink 跳转

7.表单有2种形式:模板驱动和响应式
  -  使用 FormsModule模块; [(ngModel)] 指令完成双向绑定
  -  使用 ReactiveFormsModule 模块, 通过 [formGroup]="profileForm"  与整个form 绑定
  -  表单验证使用 Validators 模块

8. 依赖注入 (DI) 是 Angular 框架最强大的功能之一。依赖注入是指 Angular 在运行时为应用程序提供所需资源的能力。依赖项可以是服务或其他资源。
  - 依赖注入可以用来值初始化类属性()

- Angular 服务是用于封装和共享业务逻辑、工具类、数据访问和跨组件通信的类
  - 当一个组件需要一个服务时，它不会自己创建这个服务，而是在构造函数中声明它需要这个服务。Angular 的 DI 系统会自动提供一个单例（Singleton）的服务实例给组件使用。



9. 管道是用于在模板中转换数据的函数。通常，管道是“纯”函数，不会产生副作用。Angular 有许多实用的内置管道，你可以导入它们并在组件中使用。也可以创建自定义管道。


10. Styling components  样式组件
   - 惰性加载组件下也会惰性加载
   - 每个组件都有一个视图封装设置，用于确定框架如何限定组件样式的作用域。视图封装模式有三种： Emulated 、 ShadowDom 和 None
   -  默认Emulated
   - ::ng-deep  默认不封装, 变为全局样式, 不建议
   - ShadowDom 组件变成有风险
   - None 变成全局样式
   -  支持引入外部样式. 外部样式不受模拟视图封装的影响

11.输入 input() 类似props
  -  输入可以设置必须
  -  输入可以设置转化函数
  -  转化类型
  -  内置转换: 将值强制转换为布尔值和数字
  -  指定 alias 选项来更改模板中输入的名称

模型输入是一种特殊类型的输入，它使组件能够将新值传播回其父组件。类似双向绑定

12. 自定义事件 output 
  - 与输入类似
  - 通过 emit 触发
  
13. ng-content 类似vue3 插槽, react children
    - 支持嵌套, 默认值
    
14. host 就是绑定到HTML 上的属性, 支持 style 属性绑定(css), 绑定是同步变化的
  宿主元素就是你的“组件”或“指令”所依附的那个 DOM 元素。

15. 生命周期
  - constructor
  - ngOnInit 组件的初始化逻辑, 仅执行一次,发起 API 请求、设置基于 @Input 的内部状态、订阅 Observables
  - ngOnChanges 响应来自父组件的数据变化
  - ngAfterViewInit 仅执行一次 在组件的视图 (Template) 及其所有子组件都完全初始化和渲染之后, 需要操作 DOM 的逻辑
  - ngOnDestroy   仅执行一次, 清理工作，防止内存泄漏

16. ViewChild 可以直接操作子组件的方法, 读取html


17. 继承 Inheritance
  - 继承组件  用于抽象出通用的组件逻辑, 子类基础
  - 继承服务

- 继承了什么？
  - 类属性 (如 isLoading, form)
  - 类方法 (如 resetForm(), ngOnDestroy)
  - @Input 和 @Output 装饰器
  - 生命周期钩子 (如 ngOnInit, ngOnDestroy)

- 不能继承什么?
  - @Component 装饰器元数据：
    - template 或 templateUrl 不会被继承。子组件必须提供自己的模板。
    - styles 或 styleUrls 不会被继承。
    - selector 不会被继承。
    - providers 不会被继承


18. 自定义元素
  用于将 Angular 组件打包成原生 Web Components 标准的自定义元素。
  
  它的核心目的是：让你在任何 HTML 环境（包括原生 JavaScript 应用、React、Vue、WordPress 等）中使用 Angular 组件，而不需要完整的 Angular 运行时环境。

  @Input()属性  => 	HTML 属性 (Attributes) 和 DOM 属性 (Properties)
  @Output() 事件 => @Output() 事件
  公共方法 => DOM 方法

19. 信号是对某个值的包装，当该值发生变化时，它会通知相关的消费者。信号可以包含任何值，从原始值到复杂的数据结构。

  - computed 计算是惰性求职的
  - effect 可以监听信号的变化, 只能定义在constructor, 可以通过其选项将 Injector 传递给 effect
  - effect只能在注入上下文 （可以访问 inject 函数的地方）中创建 
  - effect 函数参数, 函数第一个参数为 onCleanup 清除副作用函数

12. Angular中的依赖注入（Dependency Injection, DI）是一种设计模式，它允许在不直接创建对象的情况下获取它们的实例。依赖注入系统自动管理对象的生命周期和依赖关系，使得代码更加模块化、可测试和易于维护。

依赖注入是什么
提供者注册：首先，我们需要定义服务，并将其注册到依赖注入容器中。这可以通过@Injectable()装饰器来完成。
依赖声明：然后，在组件或另一个服务中，我们通过构造函数参数来表示需要依赖的服务或其他资源。
依赖解析：当Angular创建一个组件或服务时，它会查看其构造函数参数列表，查找每个参数所对应的依赖项。如果找到匹配的依赖项，Angular就会将这个依赖项的实例注入到构造函数中。

依赖注入是一种设计模式，Angular中使用它来管理组件和服务之间的依赖关系。通过使用依赖注入，您可以将组件和服务分离，并将它们的依赖关系委托给Angular框架，从而使代码更具可读性和可维护性。




### Angular 的 Signals 底层原理是啥

Angular Signals 的底层本质是一套“精细依赖追踪（fine-grained reactivity）”系统，基于 值引用 + 订阅关系 + 派发更新 的机制，类似于 Reactivity Core (Vue 3) 和 SolidJS 的实现。


| 名称           | 作用                 | 类比                                                 |
| ------------ | ------------------ | -------------------------------------------------- |
| `signal()`   | 创建一个可观察的值（源）       | Vue 的 `ref()`                                      |
| `computed()` | 派生值，自动追踪依赖的 signal | Vue 的 `computed()`                                 |
| `effect()`   | 产生副作用，监听信号变化       | Vue 的 `watchEffect()` / SolidJS 的 `createEffect()` |


Signal 的内部数据结构:
```
class Signal<T> {
  private value: T;
  private subscribers = new Set<Effect>();

  get(): T {
    // 在依赖追踪阶段，注册依赖
    if (currentComputation) {
      currentComputation.dependencies.add(this);
      this.subscribers.add(currentComputation);
    }
    return this.value;
  }

  set(newValue: T) {
    if (newValue !== this.value) {
      this.value = newValue;
      // 通知所有依赖此 signal 的副作用重新执行
      for (const eff of this.subscribers) {
        eff.schedule();
      }
    }
  }
}

```

solidjs





