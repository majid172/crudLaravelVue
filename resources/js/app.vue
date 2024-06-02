<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useTodoStore } from "./store/todoStore.js";

const todoStore = useTodoStore();

onMounted(() => {
    todoStore.getLists();
});
</script>

<style>
/* Add any styles here */
</style>
