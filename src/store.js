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
    ],
    announce: ''
  },
  mutations: {
    TOGGLEMODAL (state, payload) {
      state.modalOpen = payload
    },
    DELETETASK (state, index) {
      state.tasks.splice(index, 1);
    },
    ADDTASKS (state, form) {
      state.tasks.push(form);
    },
    UPDATEANNOUNCE (state, payload) {
      state.announce = payload
    }
  },
  actions: {
    openModal ({ commit }) {
      commit('TOGGLEMODAL', true);
    },
    closeModal ({ commit }) {
      commit('TOGGLEMODAL', false);
    },
    deleteTask ({ commit }, {index, task}) {
      commit('DELETETASK', index);
      commit('UPDATEANNOUNCE', `${task.name} has been deleted.`);
      document.getElementById('pageTitle').focus();
    },
    addTasks ({ commit }, form) {
      commit('ADDTASKS', form);
      commit('UPDATEANNOUNCE', `${form.name} has been added.`);
      document.getElementById('pageTitle').focus();
    }
  }
})
