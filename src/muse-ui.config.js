import 'muse-ui/lib/styles/base.less'
import {
  Icon,
  Tabs,
  BottomNav
} from 'muse-ui'
const components = [Tabs, Icon, BottomNav]
export default {
  // Vue.use会触发一个 名叫install触发并接受Vue对象作为第一个参数
  install(Vue) {
    components.forEach(c => Vue.use(c))
  }
}
