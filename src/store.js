import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalOpen: false,
    tasks: [
      {
        name: "Dry Cleaning",
        notes: "Don't forget the suit!"
      },
      {
        name: "Dog Food",
        notes: "Taste of the Wild"
      },
      {
        name: "Bills",
        notes: "Internet bill!"
      }
    ]
  },
  mutations: {
    toggleModal (state, payload) {
      state.modalOpen = payload
    },
    deleteTask (state, index) {
      state.tasks.splice(index, 1);
    },
    addTasks (state, form) {
      state.tasks.push(form);
    }
  },
  actions: {
    openModal ({ commit }) {
      commit('toggleModal', true);
    },
    closeModal ({ commit }) {
      commit('toggleModal', false);
    },
    deleteTask ({ commit }, index) {
      commit('deleteTask', index);
    },
    addTasks ({ commit }, form) {
      commit('addTasks', form);
    }
  }
})
