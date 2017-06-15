<template>
  <div id="app">
    <div id="loading" v-if="loading">
      Loading...
    </div>
    <div v-if="!loading">
      <!--<transition :name="slide">-->
        <router-view></router-view>
      <!--</transition>-->
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    data () {
      return {
        slide: ''
      }
    },
    computed: {
      ...mapGetters([
        'loading'
      ])
    }
//    watch: {
//      '$route' (to, from) {
//        const toDepth = to.path.split('/').length
//        const fromDepth = from.path.split('/').length
//        this.slide = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//      }
//    }
  }
</script>
<style>
  .content {
    display: flex;
    flex: 1 1 auto;
    height: 100%;
  }
  main {
    /*padding-left: 16px;*/
    width: 100%;
  }
  body {
    padding: 0;
    margin: 0;
  }
</style>
