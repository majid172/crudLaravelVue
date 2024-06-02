<script setup>
import { onMounted } from "vue";
import { useTodoStore } from "../store/todoStore.js";

const todoStore = useTodoStore();

onMounted(() => {
    todoStore.getLists();
});
</script>
<template>

    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="shadow p-3 mb-5 bg-body rounded">
                <router-link :to="{name:'Create'}" class="btn btn-sm btn-success mb-3">Create User</router-link>
                <div class="card">
                    <div class="overflow-auto" style="max-height: 300px;">
                        <div class="card-body p-3">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" v-for="(item, i) in todoStore.todos" :key="i"> {{i+1}}. {{
                                        item.name }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


</template>
<style>

</style>
