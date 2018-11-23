<template>
  <div class="search-view">
    <div class="header">
      <div class="searchBar">
        <mu-icon value="search" size="20" class="icon"></mu-icon>
        <input type="text" class="search" v-model="keyword" placeholder="电影/电视剧/影人">
      </div>
      <div class="cancel" @click="cancel(false)">取消</div>
    </div>
        <div class="content" @click="itemClick(item)" v-for="(item,index) in allDataList" :key="index">
          <div class="picture"> <img :src="item.images.small" width="100%" height="100%"/></div>
          <div class="text">
            <p class="title">{{item.title}}</p>
            <p class="name">{{item.year}}年/{{item.rating.average}}分</p>
          </div>
        </div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters, mapActions} from 'vuex'
  import {SEARCH_CANCEL} from '../../store/mutations-types'
  export default {
    data() {
      return {
        keyword: ''
      }
    },
    methods: {
      ...mapMutations({cancel: SEARCH_CANCEL}),
      ...mapActions(['showDetail']),
      itemClick(item) {
        this.showDetail(item)
        this.cancel(false)
      }
    },
    computed: {
      ...mapGetters(['allData']),
      allDataList() {
        // 只根据用户名查询
        let result = []
        let str = this.keyword.trim()

        if (!str) { // 内容为空不展示
          return result
        }
        result = this.allData.filter(f => {
          let reg = new RegExp(str, 'gim')
          return reg.test(f.title)
        })
        return result
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .search-view
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: #fff
    z-index: 100
    .header
      display: flex
      box-sizing: border-box
      height: 45px
      background-color: #1ad54f
      padding: 10px 4px 10px 10px
      .searchBar
        flex: 1
        border-radius: 5px
        margin-left: 10px
        width: 80%
        background-color: #fff
        .search
          width: 270px
          line-height: 25px
          font-size: 12px
          vertical-align: top
          border: none
          outline: none
          background: transparent
      .cancel
        flex: 0 0 30px
        margin-left: 10px
        color: #ffff
        font-size: 15px
    .content
      padding: 10px
      height: 110px
      .picture
        float: left
        height: 95px
        width: 67px
        clear: both
      .text
        width: 100%
        height: 100%
        line-height: 30px
        .title
          margin-left: 80px
          font-size: 16px
          font-weight: 700
        .name
          margin-left: 80px
</style>
