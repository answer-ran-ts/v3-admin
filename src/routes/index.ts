import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/home.vue') },
  { path: '/test', name: 'test', component: () => import('@/views/test.vue') }
]

// 路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 导出
export default router
