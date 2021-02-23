<template>
  <div>
    <h2>child2 的 parent</h2>
    <!-- 使用 v-bind方式，将所有的值都传递了 -->
    <Child2 v-bind="$attrs" />
    <!-- 需要一个一个展开，不推荐 -->
    <!-- <Child2 :msg="$attrs.msg" :msg2="$attrs.msg2" /> -->
  </div>
</template>

<script>
import Child2 from '@/components/communication/Child2'
export default {
  name: 'chid2parent',
  components: { Child2 }
}
</script>
