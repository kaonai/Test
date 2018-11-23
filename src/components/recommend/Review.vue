<template>
    <div>
      <div class="header">
        <h1>推荐影评</h1>
      </div>
      <div class="box" v-for="(item,index) in text" :key="index">
        <div class="left">
        <div class="title">
          {{item.title}}
        </div>
          <div class="source">
            {{item.source}}
          </div>
          <div class="time">
            {{item.time}}
          </div>
        </div>
        <div class="right">
          <img :src="item.img" width="100%" height="100%">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          text: []
        }
      },
      created() {
        this.axios('/api/review')
          .then(res => {
            res = res.data
            this.text = res.data
          })
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .header
    margin-left: 10px
    color: #0e29ff
  .box
    margin-top: 10px
    padding: 10px
    height: 100px
    position: relative
    .left
      width: 65%
      .title
        font-weight: 800
        font-size: 15px
      .source
        padding: 5px
        font-size: 13px
        color: #ccbaaf
      .time
        position: absolute
        bottom: 0
        left: 10px
        font-size: 12px
        color: #afafaf
    .right
      height: 70px
      width: 107px
      position: absolute
      right: 10px
      top: 10px
</style>
