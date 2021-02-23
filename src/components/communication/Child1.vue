<template>
  <div class="child1" @click="$emit('some-event', 'chid1传出来的数据')">
    <h3> child1</h3>
    <p>msg: {{msg}}</p>
    <p>非props内容： {{$attrs.foo}}</p>
  </div>
</template>

<script>
export default {
  name: 'child1',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  mounted() {
    // 1. 使用 bus 通讯
    // this.$bus.$on('event-from-child2', msg => {
    //   console.log('来自child1的信息', msg)
    // })
    // 2. 使用 $parent 实现
    this.$parent.$on('event-from-child2', msg => {
      console.log('来自child1的信息', msg)
    })
  }
}
</script>

<style scoped>
.child1 {
  padding: 20px;
  border: 1px dotted pink;
  margin: 20px;
}
</style>
