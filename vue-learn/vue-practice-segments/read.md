# vue

1. 安装 (done)

1. 介绍 (done)

1. vue实例(vm)

    实例属性: 实例属性前面以`$`以区分(实例属性中定义生命周期函数和一些文档中定的属性比如`el,template`等) 代理属性: 创建vm实例时在`data`中定义的属性。

   vm实例的生命周期

1. 模版

    v-once

    v-html

    v-bind绑定属性(mustache不允许属性绑定值)

    js表达式

    只能访问vue中定义的一些方法和属性(js表达式运行在定义的沙箱中),详细件`vue`源码中的`allowedGlobals`变量

    修饰符

    过滤器

1. **`计算属性`**

    计算属性VS在method中定义的方法:

    1. 计算属性的计算，依赖于他的依赖属性，依赖修改，计算属性则计算

    1. 计算属性的可以自定义set方法，但在里面不能直接修改计算属性

    1. 重新渲染时，模版中调用的方法会重新调用

    1. class与style

1. 条件渲染

    v-if

    v-if-else

    v-else

    `key`标记元素是否复用

   **`注意v-if和v-show的区别`**

1. 列表渲染

     v-for

    `dom操作是非常耗时和损伤性能的，所以vue默认会尽最大可能复用之前生成的dom,`

1. 事件处理

1. 组件
