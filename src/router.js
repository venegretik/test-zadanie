import { createRouter, createWebHistory } from 'vue-router';
import FormPage from './pages/FormPage.vue';
import Preview from './pages/Preview.vue';
const routes = [
    {
        path: '/',
        name: 'FormPage',
        component: FormPage
    },
    {
        path: '/Preview',
        name: 'Preview',
        component: Preview
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;