import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    filter: undefined,
    todoList: [],
};

const store = new Vuex.Store({
    state,
    getters: {
        getTodoList: (state) => () => {
            if (state.filter === 'Active') {
                return state.todoList.filter((todoItem) => !todoItem.finished);
            } else if (state.filter === 'Complete') {
                return state.todoList.filter((todoItem) => todoItem.finished);
            } else {
                return state.todoList;
            }
        },
    },
    mutations: {
        filterAll(state) {
            state.filter = undefined;
        },
        filterActive(state) {
            state.filter = 'Active';
        },
        filterComplete(state) {
            state.filter = 'Complete';
        },
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
