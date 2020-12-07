import Vue from "vue"
import Router from "vue-router"

// import login from "../pages/login"
import Home from "~/pages/home"
import Index from "~/pages/index"
import SupervisionSewage from '~/pages/supervision/supervisionSewage'
import SupervisionCompany from '~/pages/supervision/supervisionCompany'
import CompanyItem from '~/pages/company/item'
import CompanySewage from '~/pages/company/sewage'
import MapPositon from '~/components/mapPositon'
import Mapbox from '~/components/map'
import CompanyMachine from '~/pages/company/machine'
import CompanyOps from '~/pages/company/ops'

Vue.use(Router)

const routes = [
    {
        // 首页-控制台
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                // 控制台
                path: '/',
                name: 'Index',
                component: Index
            },
            {
                // 监管-污水站
                path: '/supervision/sewage',
                name: 'SupervisionSewage',
                component: SupervisionSewage
            },
            {
                // 监管-业主数据
                path: '/supervision/company',
                name: 'SupervisionCompany',
                component: SupervisionCompany
            },
            {
                // 业主-项目管理
                path: '/company/item',
                name: 'CompanyItem',
                component: CompanyItem
            },
            {
                // 业主-污水站管理
                path: '/company/sewage',
                name: 'CompanySewage',
                component: CompanySewage
            },
            {
                // 业主-设备管理
                path: '/company/machine',
                name: 'CompanyMachine',
                component: CompanyMachine
            },
            {
                // 业主-运维管理
                path: '/company/ops',
                name: 'CompanyOps',
                component: CompanyOps
            }

        ]
    },
    {
        // 地图展示
        path: '/mapPositon',
        name: 'MapPositon',
        component: MapPositon,
    },
    {
        // 地图详情
        path: '/mapBox',
        name: 'Mapbox',
        component: Mapbox,
    },
];

const router = new Router({
    mode: 'history',
    routes
});

// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
    // to将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 是一个函数，表示方行
    // next() 放行    next(/login) 强行跳转

    // if (to.path === '/login') {
    //     return next()
    // }

    // const tokenStr = window.localStorage.getItem('token')
    // if (!tokenStr) {
    //     return next('/login')
    // }
    next()
})

export default router;