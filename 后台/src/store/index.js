import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state: {
        root: 1, //角色  1业主，2运维 3监管 4超级管理员
    }
})

export default store