import Vue from 'vue'
import Vuex from 'vuex'
import { SET_LOGIN, SET_MODALTYPE } from '~/utils/mutation-types'

Vue.use(Vuex)

export const state = () => ({
    isLogin: false,
    // login/reg
    modalType: 'login'
})

export const getters = {
    isLogin: (state) => state.isLogin,
    modalType: (state) => state.modalType
}

export const mutations = {
    [SET_LOGIN](state, status) {
        state.isLogin = status
    },
    [SET_MODALTYPE](state, type) {
        state.modalType = type
    }
}

export const actions = {
    setLogin: ({ commit }, status) => commit(SET_LOGIN, status),
    setModalType: ({ commit }, type) => commit(SET_MODALTYPE, type)
}
