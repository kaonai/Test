<template>
  <div class="detail">
    <div class="title">
      <div class="icon"  @click="closeChat(false)"><mu-icon value="keyboard_arrow_left" size="32"></mu-icon></div>
      {{nowDetail.title}}
    </div>

    <div class="background">
      <div class="picture">
        <img class="img" :src="nowDetail.images.small"/>
      </div>
    </div>
    <div class="text">
      <div class="score">
        <p class="score_dou">豆瓣评分</p>
        <p class="score_num">{{nowDetail.rating.average}}</p>
        <star :score=nowDetail.rating.average size="16"></star>
      </div>
      <div class="header">
       <h1> {{nowDetail.title}}</h1>
      </div>
      <div class="content">
        <p>年份: {{nowDetail.year}}</p>
        <p>类型: {{nowDetail.genres}}</p>
        <p>原名: {{nowDetail.original_title}}</p>
      </div>
      <div class="brief">

      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  import {TOGGLE_CHAT} from '../../store/mutations-types'
  import Star from '../../widgets/Star'
    export default {

      methods: {
        ...mapMutations({closeChat: TOGGLE_CHAT})
      },
      computed: {
        ...mapState(['nowDetail'])
      },
      components: {
        Star
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .detail
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    background-color: #fff
    z-index: 100
    .title
      position: relative
      text-align: center
      height: 40px
      line-height: 40px
      color: #fff
      background-color: rgba(101, 101, 4, 0.6)
      .icon
        position: absolute
        left: 0
        top: 3px
    .background
      background-color: rgba(101, 101, 4, 0.6)
      height: 300px
      .picture
        text-align: center
        .img
          margin-top: 20px
          width: 180px
          height: 250px
    .text
      position: relative
      padding: 0 20px 0 20px
      .score
        padding: 8px
        text-align: center
        position: absolute
        top: 0
        right: 25px
        height: 90px
        width: 90px
        box-shadow: 2px 2px 5px #888888
        background-color: #fff
        .score_dou
          font-size: 10px
          color: #CCCCCC
        .score_num
          font-size: 18px
          font-weight: 900
      .header
        width: 70%
        font-size: 12px
      .content
        font-size: 12px
        color: #868686
</style>
