import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    certis: [
      { id: 32, name: 'juan', telf: 34 },
      { id: 2, name: 'pedro', telf: 36 },
      { id: 3, name: 'loco', telf: 35 },
      { id: 4, name: 'osmar', telf: 39 },
      { id: 555, name: 'pasto', telf: 340 },
      { id: 6, name: 'lpppp', telf: 345 }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
