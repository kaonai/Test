<template>
    <div class="find">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img width="100%" height="100%"
              src="http://image.dushemovie.com/other/20181122/1301/5bf6383d6adeb.png"/>
            <div class="title">看童年回忆维尼熊走进现实，是一种怎样的体验</div>
          </div>
          <div class="swiper-slide">
            <img width="100%" height="100%"
              src="http://image.dushemovie.com/other/20181122/1143/5bf625f178413.jpg"/>
            <div class="title">「奇葩说」翻身之作</div>
          </div>
          <div class="swiper-slide">
            <img width="100%" height="100%"
              src="http://image.dushemovie.com/other/20181122/1307/5bf6397b9dacf.png"/>
            <div class="title">科恩兄弟新作，口碑爆炸！</div>
          </div>
          <div class="swiper-slide">
            <img width="100%" height="100%"
                 src="http://image.dushemovie.com/other/20181122/1133/5bf62383d5280.png"/>
            <div class="title">年度第二国产片终于逆袭</div>
          </div>
          <div class="swiper-slide">
            <img width="100%" height="100%"
                 src="http://image.dushemovie.com/other/20181122/1128/5bf6225c68ab1.jpg"/>
            <div class="title">仙气美女又演砸了</div>
          </div>
        </div>
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!--<div class="swiper-button-prev"></div>-->
        <!--<div class="swiper-button-next"></div>-->

      </div>
      <mu-tabs class="tab" :value.sync="active" color="black" inverse indicator-color="black" full-width>
        <mu-tab>讨论</mu-tab>
        <mu-tab>微评</mu-tab>
        <mu-tab>在看</mu-tab>
        <mu-tab>看过</mu-tab>
        <mu-tab>影评</mu-tab>
      </mu-tabs>
      <div class="scroll" ref="find">
      <div class="demo-text" v-if="active === 0">
        <comment></comment>
      </div>
      <div class="demo-text" v-if="active === 1">
      <user-rieview></user-rieview>
      </div>
      <div class="demo-text" v-if="active === 2">

      </div>
      <div class="demo-text" v-if="active === 3">

      </div>
      <div class="demo-text" v-if="active === 4">

      </div>
    </div>
      <comment-view v-if="commentClick"></comment-view>
      <user-view v-if="userClick"></user-view>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import Comment from './Comment'
  import CommentView from './CommentView'
  import UserRieview from './UserRieview'
  import UserView from './UserView'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
    export default {
    data() {
      return {
        active: 0
      }
    },
      computed: {
        ...mapState({commentClick: 'commentClick', userClick: 'userClick'})
      },
      mounted() {
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {
          autoplay: 1500,
          disableOnInteraction: false,
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          loop: true
        })
        this.$nextTick(() => {
          if (this.Scroll) {
            this.Scroll.refresh()
          } else {
            if (this.$refs.find) {
              this.Scroll = new BScroll(this.$refs.find, {
                click: true
              })
            }
          }
        })
      },

      components: {
        Comment,
        CommentView,
        UserRieview,
        UserView
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.find
  z-index: 200
  .header
    text-align: center
    padding: 10px
    background-color: #fff
    z-index: 666
    .name
      font-size: 16px
      vertical-align: top
  .swiper-container
    width: 100%
    height: 200px
    .swiper-slide
      position: relative
      width: 100%
      .title
        position: absolute
        bottom: 0
        left: 0
        color: #fff
  .scroll
    position: fixed
    top: 250px
    left: 0
    right: 0
    bottom: 56px
</style>
