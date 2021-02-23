<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 组件的通讯 -->
    <communication></communication>
  </div>
</template>

<script>
import Communication from '@/components/communication'
export default {
  name: 'HelloWorld',
  components: { Communication },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
