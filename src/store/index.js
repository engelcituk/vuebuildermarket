import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../modules/auth'

import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth']

})
export default new Vuex.Store({
  state: {
    loading: false //lo defino aqui porque lo podría ocupar de manera global
  },

  //para modificar el loading
  mutations:{
    setLoading(state,bool) {
      state.loading = bool
    }
  },
  modules:{
    auth
  },
  plugins:[vuexLocal.plugin]
})
