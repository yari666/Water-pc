import axios from 'axios'
import { baseUrl } from './env'
import { Message } from 'element-ui'
import router from '~/router'

// 创建axios实例
const service = axios.create({
    baseURL: baseUrl, // 配置后台api根路径
    timeout: 10000 // 请求超时时间
})

// 生成环境跨域处理
if (process.env.NODE_ENV !== 'development') {
    service.withCredentials = true
}

// 挂在请求配置
service.interceptors.request.use(config => {
    // config.headers['content-type'] = 'image/png';
    config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token');
    return config
})

// axios 响应拦截器
service.interceptors.response.use(
    response => {
        // return response

        // 过滤
        return {
            status: response.status,
            data: response.data,
            statusText: response.statusText
        };
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401: {
                    window.localStorage.setItem('token', '');

                    router.replace({
                        path: '/login',
                        // 登录成功后跳入浏览的当前页面
                        query: { redirect: router.currentRoute.fullPath }
                    })
                    break
                }
                case 403: {
                    console.log('错误：' + error.response)
                    Message({
                        message: error.response.data.error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })
                    break
                }
                case 500: {
                    Message({
                        message: error.response.data.error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })
                }
            }
        }
        return Promise.reject(error)
    }
)

export default service

