import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      content: []
    },
    getters: {
      
    },
    actions: {
      // Fetch API
      async FETCH_API ( { commit }) {
        await axios.get('https://cms.studiojohannesbissinger.com/api/data').then((response) => {
          commit('SET_CONTENT', { list: response.data })
        }, (err) => {
          console.log(err)
        })
      },

      //Nuxt Server Init
      async nuxtServerInit ({ commit, dispatch }) {
        await dispatch('FETCH_API')
      }
    },
    mutations: {
      SET_CONTENT: (state, { list }) => {
        state.content = list
      }
    }
  })
}

export default createStore
