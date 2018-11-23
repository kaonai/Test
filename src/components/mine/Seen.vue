<template>
  <div>
    <div class="seen">
      <p class="title">{{commentData.title}}</p>
      <p class="text">{{commentData.num}}</p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      computed: {
        ...mapState(['commentData'])
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .seen
    padding: 10px
    .title
      font-size: 16px
    .text
      font-size: 12px
      color: #ccc
</style>
