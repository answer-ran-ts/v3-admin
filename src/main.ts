import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/less/base.less'
import Antd from 'ant-design-vue' // 引入ant-design-vue所有组件
import 'ant-design-vue/dist/antd.css' // 引入ant-design-vue CSS
import pinia from '@/store/pinia'
import router from './routes/index'
const app = createApp(App)
app.use(router)
app.use(Antd)
app.use(pinia)
app.mount('#app')
