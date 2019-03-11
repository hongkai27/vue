import auth from '../../api/auth'

const state = {
  user: null,
  isLogin: false
}

const getters = {}

const mutations = {
  setUser(state, payload) {
    state.user = payload.user
  },
  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}

const actions = {
    async register({commit}, {username,password}) {
        let res = auth.register({username,password})
        commit('setUser', {user: res.data})
        commit('setLogin', {isLogin: true})
        return res.data
      },
      login({commit}, {username,password}) {
        return auth.login({username,password}).then((res) => {
          commit('setUser', {user: res.data})
          commit('setLogin', {isLogin: true})
        })
      },
      async logout({commit}){
          await auth.logout()
          commit('setUser',{user:null})
          commit('setLogin',{isLogin:false})
      },
      async checklogin({commit,state}){
          if(state.isLogin) return true
          let res = await auth.getinfo()
          commit('setLogin',{isLogin:res.isLogin})
          if(!res.isLogin) return false
          commit('setUser',{user:res.data})
          return true
      }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
