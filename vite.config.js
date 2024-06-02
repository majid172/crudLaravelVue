import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath, URL } from 'url';  // Add this import for fileURLToPath

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),  // Correct usage of fileURLToPath
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
        }
    }
});
