import Vue from 'vue'
Vue.config.productionTip = false

import { sync } from 'vuex-router-sync'
import store from '@/store'
import router from '@/router'
sync(store, router)

store.dispatch('initialize')

import installFilters from '@/filters'
installFilters(Vue)

import 'material-components-web/dist/material-components-web.css'
import * as mdc from 'material-components-web/dist/material-components-web.js'
Object.defineProperty(Vue.prototype, '$mdc', {value: mdc})

import VueTimeago from 'vue-timeago'
Vue.use(VueTimeago, {
  name: 'timeago',
  locale: 'en-US',
  locales: {
    'en-US': require('vue-timeago/locales/en-US.json')
  }
})

import App from '@/App'
import SiteHeader from '@/components/SiteHeader'
import SiteNav from '@/components/SiteNav'
Vue.component('site-header', SiteHeader)
Vue.component('site-nav', SiteNav)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
})
