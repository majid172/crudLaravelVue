import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todos: [],
        todoForm: {
            name: null,
            email: null
        }
    }),
    getters: {
        completedTodos(state) {
            return state.todos.filter(todo => todo.completed);
        },
    },
    actions: {
        async getLists() {
            try {
                const { data } = await axios.get('http://127.0.0.1:8000/api/users');
                this.todos = data;
            } catch (error) {
                console.error('Error fetching todo lists:', error);
            }
        },
        // async createTask(){
        //     const {data} = await axios.post('http://127.0.0.1:8000/api/users',this.todoForm);
        //     // console.log(data);
        //     this.todos.push(data);
        //     this.todos.reverse();
        //     this.todoForm.title = null;
        // },
        async submitForm(){
            const {data} = await axios.post('http://127.0.0.1:8000/api/users/store',this.todoForm)
            console.log(data)
            this.todos.push(data);
            this.todoForm.name = null;
            this.todoForm.email = null;
        }


    }
});
