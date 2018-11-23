<template>
  <div>
    <div class="discuss" v-for="(item,index) in discuss" :key="index">
      <p class="title">{{item.title}}</p>
      <p class="num">{{item.num}}</p>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          discuss: ''
        }
      },
      created() {
        this.axios('/api/discuss')
          .then(res => {
            res = res.data
            this.discuss = res.data
          })
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .discuss
    padding: 10px
    border-bottom: 1px solid #e2e2e2
    .title
      font-weight: 600
      font-size: 16px
    .num
      margin-top: 3px
      font-size: 12px
      color: #a6a6a6
</style>
