<template>
  <div id="app">
    <router-view/>
    <div class="tabbar">
      <bottombar></bottombar>
    </div>
      <detail-view v-if="chat"></detail-view>
      <search-view v-if="cancel"></search-view>
  </div>
</template>

<script >
  import {mapState} from 'vuex'
  import Bottombar from './components/bottombar/Bottombar'
  import DetailView from './components/detailView/DetailView'
  import SearchView from './components/searchView/SearchView'
export default {
  components: {
    Bottombar,
    DetailView,
    SearchView
  },
  computed: mapState({showDetail: 'showDetail', chat: 'chat', cancel: 'cancel'})
}
</script>

<style lang="sass">
  .tabbar
   width: 100%
   position: fixed
   bottom: 0
   left: 0
</style>
