import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'

const Service = axios.create({
  timeout: 1000 * 5,
  baseURL: '/',
  headers: {},
})
// 请求拦截器
Service.interceptors.request.use(
  (config) => {
    config.headers['token'] = Vue.cookie.get('token') || ''
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
Service.interceptors.response.use(
  (response) => {
    const { status } = response
    if (status === 200) {
      return Promise.resolve(response.data)
    } else {
      errorHandle(status)
      return Promise.reject(response)
    }
  },
  (error) => {
    const { message } = error
    if (message.includes('timeout')) {
      errorHandle(408)
    } else {
      errorHandle(504)
    }
    return Promise.reject(error)
  }
)

/**
 * 根据状态码判断请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
function errorHandle(status) {
  let message = ''
  switch (status) {
    case 401:
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      message = '未授权(401)，请重新登录'
      // store.dispatch('info/jumpToLogin')
      break
    case 403:
      // 403 token过期
      // 登录过期对用户进行提示
      // 清除本地token和清空vuex中token对象
      // 跳转登录页面
      message = '拒绝访问(403)，请刷新后重试'
      // 清除token
      // removeCookie()
      // setTimeout(() => {
      //   store.dispatch('info/jumpToLogin')
      // }, 1000)
      break
    case 400:
      message = '请求错误（400），请刷新后重试'
      break
    case 404:
      message = '请求错误（404），网络请求不存在'
      break
    case 408:
      message = '请求超时（408），请稍后重试'
      break
    case 450:
      message = '请求异常（450），请求参数错误'
      break
    case 500:
      message = '服务错误（500），请稍后重试！'
      break
    case 502:
      message = '网络错误（502），请稍后重试！'
      break
    case 503:
      message = '服务异常（503），正在维护，请稍等！'
      break
    case 504:
      message = '网络超时（504），请检查网络！'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `请求失败（${status}），请检查网络或联系管理员！`
  }
  Toast.fail(message)
}
