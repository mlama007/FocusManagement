import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalOpen: false,
    tasks: [
      {
        title: "Dry Cleaning",
        content: "Don't forget the suit!"
      },
      {
        title: "Dog Food",
        content:
          "Taste of the Wild"
      },
      {
        title: "Bills",
        content:
          "Internet bill!"
      }
    ]
  },
  mutations: {
    toggleModal (state, payload) {
      state.modalOpen = !state.modalOpen
    },
    deleteTask (state, index) {
      state.tasks.splice(index, 1);
    }
  },
  actions: {

  }
})
