import { createStore } from "vuex";

export default createStore({
    state: {
        todos: [
        ],
    },
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo);
        },
        deleteTodo(state, todo) {
            const todoIdx = state.todos.indexOf(todo);
            state.todos.splice(todoIdx, 1);
        },
        changeTodoStatus(state, payload) {
            const todoIdx = state.todos.indexOf(payload.todo);
            const todo = state.todos[todoIdx];
            todo.active = payload.active;
        },
    },
    actions: {
        addTodo({ commit }, todo) {
            commit('addTodo', todo);
        },
        removeTodo({ commit }, todo) {
            commit('deleteTodo', todo);
        },
        changeTodoStatus({ commit }, {todo, active}) {
            commit('changeTodoStatus', {todo, active});
        },
    },
});
