<template>
    <div>
      <div class="header">
        <div class="head">
          <img src="https://muse-ui.org/img/uicon.ac3913bf.jpg" width="100%" height="100%">
        </div>
        <div class="user">
          用户名
        </div>
      </div>
      <mu-tabs class="tab" :value.sync="active1" color="black" inverse indicator-color="black" full-width>
        <mu-tab>讨论</mu-tab>
        <mu-tab>看过</mu-tab>
        <mu-tab>在看</mu-tab>
        <mu-tab>想看</mu-tab>
        <mu-tab>影评</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active1 === 0">
       <div class="bg">
         <span>参与或浏览过的讨论区将出现在这里</span>
       </div>
        <riscuss></riscuss>
      </div>
      <div class="demo-text" v-if="active1 === 1">
        <div class="bg">
          <span>最新看过的一条评论</span>
        </div>
        <seen></seen>
      </div>
      <div class="demo-text" v-if="active1 === 2">
        <div class="bg">
          0 部
        </div>
      </div>
      <div class="demo-text" v-if="active1 === 3">
        <div class="bg">
          0 部
        </div>
      </div>
      <div class="demo-text" v-if="active1 === 4">
        <div class="bg">
          0 篇
        </div>
      </div>
    </div>
</template>

<script>

  import Riscuss from './Riscuss'
  import Seen from './Seen'
    export default {
      data () {
        return {
          // 图片列表[arr]
          active1: 0
        }
      },
      components: {
        Riscuss,
        Seen
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .header
    position: relative
    height: 180px
    background: url("../../assets/timg.jpg")
    background-size: 100% 100%
    .head
      position: absolute
      top: 50px
      left: 35px
      height: 65px
      width: 65px
      border-radius: 50%
      overflow: hidden
      border: 2px solid #fff
    .user
      position: absolute
      top: 50px
      left: 120px
      font-size: 18px
      color: #fff
  .bg
    padding: 10px
    background-color: #dcdcdc
    font-size: 12px
  .swiper-container
    width: 300px
    height: 300px
    background-color: #CCCCCC
    .swiper-slide
      width: 200px
      height: 200px
      background-color: pink
</style>
