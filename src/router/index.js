import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: {name: "IndexPage"}
        },
        {
            path: "/index",
            name: "IndexPage",
            component: () => import("../views/IndexPage.vue")
        },
    ]
})

export default router
