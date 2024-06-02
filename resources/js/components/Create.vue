<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="shadow p-3 mb-5 bg-body rounded">
                <router-link :to="{ name: 'List' }" class="btn btn-outline-success mb-2">Show List</router-link>
                <div class="card p-3">
                    <form @submit.prevent="handleSubmit">
                        <div class="form-group mb-2">
                            <label for="username">User Name</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter user name"
                                class="form-control"
                                v-model="todoStore.todoForm.name"
                            />
                        </div>

                        <div class="form-group mb-3">
                            <label for="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter user email"
                                class="form-control"
                                v-model="todoStore.todoForm.email"
                            />
                        </div>

                        <button class="btn btn-lg btn-success" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useTodoStore } from '../store/todoStore.js';

const router = useRouter();
const todoStore = useTodoStore();

const handleSubmit = () => {
    todoStore.submitForm(router);
};
</script>

<style>
/* Add your custom styles here */
</style>
