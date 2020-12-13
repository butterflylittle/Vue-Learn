<template>
  <div>
    <!-- {{store.state.count}} -->
    <h3>{{ $store.getters.showNum }}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
    <button @click="btnHandler3">+1 Async</button>
    <button @click="btnHandler4">+N Async</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  data() {
    return {}
  },
  methods: {
    // eslint-disable-next-line
    btnHandler1() {
      this.$store.commit('add')
    },
    btnHandler2() {
      this.$store.commit('addN', 3)
    },
    btnHandler3() {
      /* dispatch 函数处理异步操作 */
      this.$store.dispatch('addAsync')
    },
    btnHandler4() {
      this.$store.dispatch('addNAsync', 5)
    }
  }
}
</script>

<style>
</style>
