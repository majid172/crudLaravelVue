import { defineStore } from 'pinia';
import axios from 'axios';

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todos: [],
        todoForm: {
            name: '',
            email: ''
        }
    }),
    getters: {
        completedTodos(state) {
            return state.todos.filter(todo => todo.completed);
        }
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
        async submitForm(router) {
            try {
                const { data } = await axios.post('http://127.0.0.1:8000/api/users/store', this.todoForm);
                this.todoForm.name = '';
                this.todoForm.email = '';
                this.todos.push(data);

                router.push({ name: 'List' });
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    }
});
