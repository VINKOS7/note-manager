import { createRouter, createWebHistory } from 'vue-router'
import HelloPage from '../pages/HelloPage/HelloPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloPage
    },
    {
      path: '/notes',
      name: 'notes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/NotesPage/NotesPage.vue')
    },
    {
      path: '/note/:id',
      name: 'note',
      component: () => import('../pages/SingeNotePage/SingeNotePage.vue')
    }
  ]  
})

export default router