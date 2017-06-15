import capitalize from './capitalize'
import toWords from './towords'
import pluralize from './pluralize'

function install (Vue) {
  Vue.filter('toWords', toWords)
  Vue.filter('capitalize', capitalize)
  Vue.filter('pluralize', pluralize)
}

export default install
