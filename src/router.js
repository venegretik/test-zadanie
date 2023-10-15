import { createRouter, createWebHistory } from 'vue-router';
import FormPage from './pages/FormPage.vue';
import Preview from './pages/Preview.vue';
const routes = [
    {
        path: '/test-zadanie/',
        name: 'FormPage',
        component: FormPage
    },
    {
        path: '/test-zadanie/Preview',
        name: 'Preview',
        component: Preview
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;