<template>
  <div>
    <h3>communication test 组件通讯</h3>
    <!-- props，自定义事件 -->
    <Child1
      msg="来自父组件index的信息1"
      foo="非props属性内容"
      @some-event="onSomeEvent"></Child1>
    <!-- 事件总线 -->
    <Child2></Child2>
    <!-- 非props传值，爷孙之间 -->
    <child2-parent msg="index页面，parent的传值内容" msg2="第二条数据内容"></child2-parent>
  </div>
</template>

<script>
import Child1 from './Child1'
import Child2 from './Child2'
import Child2Parent from './Child2Parent.vue'
export default {
  name: 'communication',
  components: {
    Child1,
    Child2,
    Child2Parent
  },
  methods: {
    onSomeEvent(msg) {
      console.log('communication indexpage ', msg)
    }
  }
}
</script>

<style scoped>

</style>
