import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    todoList: []
};

const store = new Vuex.Store({
    state,
    getters: {
        getAllTodoList: (state) => () => {
            return state.todoList;
        },
        showActiveTodoList: (state) => () => {
            return state.todoList.filter((todoItem) => !todoItem.finished);
        },
        showCompleteTodoList: (state) => () => {
            return state.todoList.filter((todoItem) => todoItem.finished);
        },
    },
    mutations: {
        addItem(state, todoItemWithoutIndex) {
            const index = state.todoList.length;
            Vue.set(state.todoList, index, {...todoItemWithoutIndex, index: index});
        },
        updateTodoItem(state, todoItem) {
            Vue.set(state.todoList, index, todoItem);
        },
    }
});

export default store
