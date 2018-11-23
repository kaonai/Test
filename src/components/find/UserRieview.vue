<template>
    <div>
      <div @click="itemClick(item)" class="user_rieview" v-for="(item,index) in user" :key="index">
        <div class="head">
          <div class="icon">
            <img :src="item.head" width="100%">
          </div>
        </div>
        <div class="content">
          <div class="title">
          <span>{{item.name}}</span> 评
          <span>{{item.title}}</span>
          <span class="num">{{item.num}}</span>
          </div>
          <div class="text">{{item.text}}</div>

        </div>
        <div class="img">
          <img :src="item.img" width="100%">
        </div>
      </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
      data() {
        return {
          user: ''
        }
      },
      created() {
        this.axios('/api/user')
          .then(res => {
            res = res.data
            this.user = res.data
          })
      },
      methods: {
        ...mapActions(['userDeatil']),
        itemClick(val) {
          this.userDeatil(val)
        }
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .user_rieview
    padding: 15px 10px 10px 10px
    height: 100px
    width: 100%
    border-bottom: 1px solid #e2e2e2
    .head
      height: 100px
      width: 10%
      float: left
      .icon
        width: 100%
        height: 35px
        border-radius: 10px
        overflow: hidden
    .content
      float: left
      padding-left: 10px
      height: 80px
      overflow: hidden
      width: 70%
      .title
        font-size: 14px
        font-weight: 600
        .num
          padding: 2px
          color: #fff
          background-color: #3fc619
      .text
        font-size: 10px
        text-indent: 2em
        text-overflow: ellipsis
        display:  -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 3
        overflow: hidden
    .img
      float: right
      width: 17%
</style>
