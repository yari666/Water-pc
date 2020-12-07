import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import less from 'less'
import router from "./router"
import store from './store'

import App from './App'

Vue.use(ElementUI)
Vue.use(less)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
