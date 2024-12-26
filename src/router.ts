import HomeView from './Views/HomeView.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import AboutView from '@/Views/AboutView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView, name: 'Home', meta: {pageNum: 1} },
  { path: '/about', component: AboutView, name: 'About Me', meta: {pageNum: 2} }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  console.log(to.meta.transition)
})

export default router
