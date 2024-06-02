
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="shadow p-3 mb-5 bg-body rounded">
                <router-link :to="{name:'List'}" class="btn btn-outline-success mb-2">Show List</router-link>
                <div class="card p-3">
                    <form @submit.prevent="todoStore.submitForm">
                        <div class="form-group mb-2">
                            <label for="">User Name</label>
                            <input type="text" placeholder="Enter user name" class="form-control"
                                   v-model="todoStore.todoForm.name">
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Email</label>
                            <input type="email" placeholder="Enter user email" class="form-control"
                                   v-model="todoStore.todoForm.email">
                        </div>

                        <button class="btn btn-lg btn-success" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import {useTodoStore} from "../store/todoStore.js";
const todoStore = useTodoStore();

</script>
<style>

</style>
