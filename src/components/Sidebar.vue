<template lang="html">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>
    <div class="panel-body">
        <h1 class="text-center">{{ time }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
    }
  },
  computed: {
    time () {
      // 获取全局的state某个状态，不能直接修改，如果修改必须需要通过actions调用mutaion改变state
      return this.$store.state.totalTime
    }
  }
}
</script>

<style lang="css">
</style>
