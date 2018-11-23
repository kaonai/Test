<template>
    <div>
      <div class="comment" @click="itemClick(item)" v-for="(item,index) in comment" :key="index">
        <div class="img">
          <img :src="item.img" width="100%" height="100%">
        </div>
        <div class="text">
          <p class="title">{{item.title}}</p>
          <p class="name">热门评论</p>
        </div>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
      data() {
        return {
          comment: '',
          num: ''
        }
      },
      created() {
        this.axios('/api/comment')
          .then(res => {
            res = res.data
            this.comment = res.data
          })
      },
      methods: {
        ...mapActions(['commentDetail']),
        itemClick(user) {
          this.commentDetail(user)
        }
      },
      components: {
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .comment
    padding: 10px
    height: 120px
    border-bottom: 1px solid #ccc
    .img
      float: left
      clear: both
      width: 67px
      height: 94px
    .text
      margin-left: 80px
      .title
        font-size: 16px
        font-weight: 700
      .name
        margin-top: 20px
        font-size: 14px
        color: #ff615d
</style>
