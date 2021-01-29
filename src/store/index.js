import axios from 'axios';
import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    todos: [{
        id: 1,
        title: 'Vuex Cource 1'
      },
      {
        id: 2,
        title: 'Vuex Cource 2'
      }
    ]
  },
  actions: {
    async fetchTodos({
      commit
    }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      commit('setTodos', response.data);
    },
    async addTodo({
      commit
    }, title) {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      commit('addTodos', response.data);
    },
    async deleteTodos({
      commit
    }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit('deleteTodo', id);
    },
    async filterTodos({
      commit
    }, e) {
      //get selected number
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      );
      console.log(limit);
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
      commit('setTodos', response.data);
    },
    async updateTodos({
      commit
    }, updTodo) {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`);
      commit('updateTodo', updTodo)
    }
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    addTodos: (state, newTodo) => (state.todos.unshift(newTodo)),
    deleteTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    updateTodo: (state, updTodo) => {
      const index = state.todos.findIndex(todo => todo.id === updTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, updTodo)
      }
    }
  },
  getters: {
    allTodos: (state) => state.todos
  },
  modules: {}
})
