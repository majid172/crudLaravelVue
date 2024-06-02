// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import List from './../components/List.vue';
import Create from './../components/Create.vue'; // Ensure the import matches the component name

const routes = [
    {
      path: '/',
      name:'List',
      component: List,
    },
    {
        path: '/create',
        name: 'Create',
        component: Create, // Use the correct component name
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

