import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    todoList: []
};

const store = new Vuex.Store({
    state,
    getters: {
    },
    mutations: {

    }
});

export default store
