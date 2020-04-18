// import Cookies from 'js-cookie'
import { Message } from 'element-ui'

export default function ({ $axios, redirect, store, route }) {
    $axios.onRequest((config) => {
        console.log('request=', config)
    })
    $axios.onRequestError((error) => {
        console.log('onRequestError=', error)
    })
    $axios.onError((error) => {
        const code = parseInt(error.response && error.response.status)
        if (code === 401) {
            //   // 没有权限，还没有登录
            //   Cookies.remove('access_token')
            //   store.commit('SET_User_Logout')
            //   store.commit('SET_Login', true)
        } else if (code === 403 && error.response.data.errorCode === 201304) {
            Message.error('当前账号异常，请联系管理员')
            //   Cookies.remove('access_token')
            //   store.commit('SET_User_Logout')
            return redirect('/')
            // next('/')
        }
    })
}
