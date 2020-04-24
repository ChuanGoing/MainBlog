import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    user: {
        isAuthenticated: false,
        token: undefined,
        icon: undefined
    },
    // the flag of login page
    onLogin: false,
    // the flag of user login 
    isLogin: false,
    // login/reg
    modalType: 'login'
})

export const getters = {
    user: (state) => state.user,
    onLogin: (state) => state.onLogin,
    isLogin: (state) => state.isLogin,
    modalType: (state) => state.modalType
}

export const mutations = {
    setOnLogin(state, status) {
        state.onLogin = status
    },
    setModalType(state, type) {
        state.modalType = type
    },
    setLogin(state, token) {
        Object.assign(state.user, {
            isAuthenticated: true,
            token
        })
        state.isLogin = true
    },
    setLoginOut(state) {
        Object.assign(state.user, {
            isAuthenticated: false,
            token: undefined
        })
        state.isLogin = false
    }
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        if (!req) return
        const token = req.ctx.cookies.get('access_token')
        if (token) {
            commit('setLogin', token)
        } else {
            commit('setLoginOut')
        }
    },
    setOnLogin: ({ commit }, status) => commit('setOnLogin', status),
    setLogin: ({ commit }, token) => commit('setLogin', token),
    setLoginOut: ({ commit }) => commit('setLoginOut'),
    setModalType: ({ commit }, type) => commit('setModalType', type)
}
