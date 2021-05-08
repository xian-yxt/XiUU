/**
 * @author xiooLoo
 * Date: 21/05/05
 */
import WButton from './button/index.js';
import WRow from './row/index'
import WCol from './col/index'
import WAlert from './alert/index'
import WLoadingBar from './loading-bar/index'
import Skeleton from './skeleton/index'
import '@fm/elementui/theme-chalk/src/index.scss'
import XiButton from './xi-button/index'

const components = [
  WButton,
  WRow,
  WCol,
  WAlert,
  Skeleton,
  XiButton
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WButton,
  WRow,
  WCol,
  WAlert,
  WLoadingBar,
  Skeleton,
  XiButton
}
