import auth from '../../api/auth'

const state = {
  user: null,
  isLogin: false
}

const getters = {//页面虽然有多个模块，但会把所有模块的getters直接拿到，所以h关键数据放在getters里面方便取
  user:state=>state.user,
  isLogin:state=>state.isLogin
}

const mutations = {
  setUser(state, payload) {
    state.user = payload.user
  },

  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}

const actions = {
  login({ commit }, { username, password }) {
    return auth.login({ username, password })
      .then(res => {
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
      })
  },

  async register({ commit }, { username, password }) {
    let res = await auth.register({ username, password })
    commit('setUser', { user: res.data })
    commit('setLogin', { isLogin: true })
    return res.data
  },

  async logout({ commit }) {
    await auth.logout()
    commit('setUser', { user: null })
    commit('setLogin', { isLogin: false })
  },

  async checklogin({ commit, state}) {
    if(state.isLogin) return true
    let res = await auth.getinfo()
    commit('setLogin', { isLogin: res.isLogin })
    if(!res.isLogin) return false
    commit('setUser', { user: res.data })
    return true
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
