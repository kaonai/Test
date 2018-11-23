<template>
    <div class="user_view">
      <div class="bg">
        <span class="title">{{userData.title}}</span>
        <div class="back" @click="userChat(false)">
          <mu-icon class="icon" value="keyboard_arrow_left" size="34"></mu-icon>
          <span class="hui">返回</span>
        </div>
      </div>
        <div class="content">
          <div class="text">
            <span class="name">{{userData.name}}</span>
            <span class="shuo">说</span>
            <span class="tex">{{userData.text}}</span>
          </div>
          <div class="titl">电影:<span class="tit">{{userData.title}}</span></div>
          <div class="img">
            <img :src="userData.img" width="100%">
          </div>
        </div>
      <div class="ping">评: <star :score=userData.num size="16"></star>
        <span class="num">{{userData.num}}</span>
      </div>
      <div class="bottom">
        <span class="time">{{userData.time}}</span>
        来自 <span class="come"> {{userData.come}}</span>
      </div>
    </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import Star from '../../widgets/Star'
    export default {
      computed: {
        ...mapState(['userData'])
      },
      methods: {
        ...mapMutations({userChat: 'USER_CHAT'})
      },
      components: {
        Star
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .user_view
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    z-index: 180
    background-color: #fff
    .bg
      padding: 8px
      background-color: #90837b
      text-align: center
      .title
        font-size: 18px
        color: #fff
      .back
        position: absolute
        top: 0
        left: 0
        color: #e4e4e4
        margin-top: 6px
        .hui
          vertical-align: top
          font-size: 16px
          line-height: 30px
    .content
      position: relative
      padding: 20px 10px 10px 8px
      .text
        width: 60%
        .name
          color: #45aafb
        .shuo
          font-weight: 600
          color: #339b10
          font-size: 16px
          padding: 0 3px
      .titl
        .tit
          color: #339b10
      .img
        position: absolute
        right: 20px
        top: 23px
        width: 23%
    .ping
      margin: 10px 8px
      .num
        color: #339b10
    .bottom
      margin-left: 8px
      color: #CCCCCC
      .time
        color: black
      .come
        color: #45aafb
</style>
