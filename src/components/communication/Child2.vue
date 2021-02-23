<template>
  <div class="child1">
    <h3>child12</h3>
    <p>从child2Parent传递过来的： {{$attrs.msg}} / {{$attrs.msg2}}</p>
    <button @click="sendToChild1">sendToChild1</button>
  </div>
</template>

<script>
export default {
  name: 'child2',
  methods: {
    sendToChild1() {
      // 1. 使用 bus 通讯
      // this.$bus.$emit('event-from-child2', '我是child2的信息')
      // 2. 使用 $parent 实现
      this.$parent.$emit('event-from-child2', '我是child2的信息')
    }
  }
}
</script>

<style scoped>
.child1 {
  padding: 20px;
  border: 1px dashed green;
  margin: 20px;
}
</style>
