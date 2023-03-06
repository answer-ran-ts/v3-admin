import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/layout/index.vue')
const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'layout',
    component: Layout,
    children: [{ path: '/home', name: 'home', component: () => import('@/views/home.vue') }]
  }
]

// 路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 导出
export default router
