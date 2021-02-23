# vue-component-example
vue组件一些内容的梳理



### 组件通信常用方式

- props
- $emit / $on
- event bus
- vuex

边界情况

- $parent / $children
- $root
- $refs
- provide / inject

非prop特性

- $attrs
- $listeners

> 包含了父作用域中不作为 **prop** 识别（且获取）的特性绑定（class和style除外）。当一个组件没有声明任何prop时，这里包含所有父作用域的绑定（class和style除外），并且可以通过 v-bind="$attrs" 传入内部组件--在创建高级别的组件时非常有用。

```vue
// 跨层级传递 爷孙 之间通讯 转发，隔代传递
v-bind="$attrs"


```



### 发布订阅

> ​    事件处理就是典型的发布订阅，通常发布者和订阅者是同一个人

```vue
index.vue
	child1.vue
	child2.vue
child1.vue
	mounted
		this.$parent.$on('event-from-child2', msg => {
          console.log('来自child1的信息', msg)
        })
		this.$bus.$on('event-from-child2', msg => {
          console.log('来自child1的信息', msg)
        })
child2.vue
	methods
		this.$parent.$emit('event-from-child2', '我是child2的信息')		
		this.$bus.$emit('event-from-child2', '我是child2的信息')
```

