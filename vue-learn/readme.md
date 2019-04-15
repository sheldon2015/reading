# vuex

## 特点

1. 集中式管理应用的状态
2. mutations类似事件，store comiit就是触发事件
3. mutations同步事物,修改state
4. action异步事物,commit mutions
5. 严格模式，限定所有的状态改变必须是commit mutation(ps:生产环境不建议开启严格模式)

## 疑问

1. store是怎么注册到所有的组件中的
