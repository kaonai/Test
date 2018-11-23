<template>
  <div>
    <mu-bottom-nav @change="change" :value.sync="tab" >
      <mu-bottom-nav-item value="recommend"  title="热映" icon="pets"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="find" title="发现" icon="textsms"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="mine" title="我的" icon="person"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
    export default {
      data() {
        return {tab: 'find'}
      },
      methods: {
        change(val) {
          this.$router.push(val)
        }
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

</style>
