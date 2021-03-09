// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import constRouter from './router/routerss'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'
import installPlugin from '@/plugin'
import './index.less'
import { getToken } from '@/libs/util.js'
import '@/assets/icons/iconfont.css'
import '@/assets/myicons/iconfont.css'
import { isThisISOWeek } from 'date-fns';

// 实际打包时应该不引入mock
/* eslint-disable */
//if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)
Vue.directive('clickOutside', clickOutside)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App),
  mounted() {
      if (!getToken()) {
        this.$router.push({name: 'login'})
        return false
      }
      let addRoutess  = []
      addRoutess = window.localStorage.getItem('routes')
      addRoutess = JSON.parse(addRoutess)
      // router.addRoutes(addRoutess.concat(constRouter))
      this.$store.dispatch('GenerateRoutes', addRoutess.concat(constRouter))
  }
})