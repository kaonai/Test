<template>
  <div>
    <div class="search" @click="cancel(true)">
      <mu-icon value="search" class="icon"></mu-icon><span class="name">电影/电视剧/影人</span>
    </div>
    <mu-tabs ref="msgView" class="footer" :value.sync="active1" color="yellow" inverse indicator-color="yellow"
             full-width>
      <mu-tab>正在热映</mu-tab>
      <mu-tab>最新点评</mu-tab>
    </mu-tabs>
    <div class="content" ref="contents">
      <div class="demo-text" v-if="active1 === 0">
        <div class="box" v-for="(item,index) in subjects" :key="index" @click="itemClick(item)">
          <div>
            <div class="left_img">
              <img :src="getScore(item.images.small)" width="100%" height="100%">
            </div>
          </div>
          <div class="right_text">
            <div class="title">
              {{item.title}}
            </div>
            <star :score=item.rating.average size="24"></star>
            <span class="star">{{item.rating.average}}分</span>
            <div class="text" v-for="(text,index) in item.directors" :key="index">
              <p>导演: {{text.name}}</p>
            </div>
            <div>
              主演: <span class="text" v-for="(text,index) in item.casts" :key="index">
                    <span>{{text.name}}/</span>
            </span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="demo-text" v-if="active1 === 1">
    <review></review>
    </div>
  </div>

</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  import BScroll from 'better-scroll'
  import Star from '../../widgets/Star'
  import Review from './Review'
  import {SEARCH_CANCEL} from '../../store/mutations-types'
  export default {
    data() {
      return {
        active1: 0,
        data: []
      }
    },

    computed: {
      ...mapState({
        ajax: 'isAjax',
        subjects: state => state.data.subjects
      })
    },
    components: {
      Star,
      Review
    },
    mounted() {
      this.$nextTick(() => {
        if (this.Scroll) {
          this.Scroll.refresh()
        } else {
          if (this.$refs.contents) {
            this.Scroll = new BScroll(this.$refs.contents, {
              click: true
            })
          }
        }
      })
    },
    methods: {
      getScore(score) {
        // eslint-disable-next-line
        return score ? score : 0
      },
      ...mapActions(['showDetail']),
      itemClick(item) {
        this.showDetail(item)
      },
      ...mapMutations({cancel: SEARCH_CANCEL})
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .search
    position: relative
    padding: 10px
    border-radius: 5px
    background-color: #eeeeee
    text-align: center
    .icon
      position: absolute
      left: 25%
      top: 20%
    .name
      color: #a8a8a8
  .content
    position: fixed
    left: 0
    right: 0
    top: 90px
    bottom: 48px
    overflow: hidden
    .box
      left: 0
      padding: 10px
      border-top: 1px solid #ccc
      .left_img
        float: left
        width: 70px
        height: 100px
        content: ''
        display: block
        clear: both
      .right_text
        margin-left: 80px
        margin-right: 30px
        .title
          font-size: 16px
          color: black
          font-weight: 900
        .star
          font-size: 12px
          color: #858585
          vertical-align: top
          margin-left: 5px
</style>
