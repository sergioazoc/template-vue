import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'characters',
      component: () => import('@/views/CharactersView.vue')
    },
    {
      path: '/character/:id',
      name: 'character',
      component: () => import('@/views/CharacterView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'not-found',
      component: () => import("@/views/NotFoundView.vue"),
    }
  ],
  linkExactActiveClass: "active"
})

export default router
