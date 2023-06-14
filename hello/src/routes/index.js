import { createRouter, createWebHistory } from 'vue-router'
import Book from '../pages/Book.vue'
import Home from '../Home.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    // redirect: "/home/",
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/tobook/",
    name: "book",
    component: Book,
    meta: {
      requestAuth: true,
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router