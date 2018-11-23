<template>
    <div class="commentView">
      <div class="bg">
        <span class="title">{{commentData.title}}</span>
        <div class="back" @click="commnetChat(false)">
        <mu-icon class="icon" value="keyboard_arrow_left" size="34"></mu-icon>
        <span class="hui">返回</span>
        </div>
      </div>
      <div class="header">{{commentData.title}}剧情简介:</div>
      <div class="plot">{{commentData.plot}}</div>
      <div class="content" v-for="(item,index) in commentData.user" :key="index">
        <i class="icon"><img :src="item.head" width="100%" height="100%"/></i>
        <span class="name">{{item.name}}</span>
        <star class="star" :score=item.star*2></star>
        <span class="time">{{item.time}}</span>
        <div class="text">{{item.text}}</div>
      </div>
    </div>

</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import Star from '../../widgets/Star'
  import {COMMENT_CHAT} from '../../store/mutations-types'
    export default {
    computed: {
      ...mapState(['commentData'])
    },
      methods: {
        ...mapMutations({commnetChat: COMMENT_CHAT})
      },
      components: {
        Star
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .bg
    padding: 8px
    position: fixed
    top: 0
    left: 0
    width: 100%
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
  .commentView
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    overflow-y: scroll
    overflow-x: hidden
    background-color: #fff
    z-index: 150
    .header
      margin-top: 50px
      padding: 10px
      color: #0ad10d
      font-size: 18px
    .plot
      margin-bottom: 20px
      display: -webkit-box
      text-indent: 2em
      overflow: hidden
      -webkit-box-orient: vertical
      -webkit-line-clamp: 6
    .content
      padding: 10px
      border-top: 1px solid #ccc
      .icon
        display: inline-block
        height: 50px
        width: 50px
        border-radius: 50%
        overflow: hidden
      .star
        margin-top: 10px
        margin-left: 5px
      .name
        color: #2C8DFB
        display: inline-block
        margin-top: 10px
        vertical-align: top
      .time
        margin-left: 5px
        color: #adadad
        display: inline-block
        margin-top: 10px
        vertical-align: top
      .text

</style>
