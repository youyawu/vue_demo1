import vue from 'vue'
import app from './app'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.css'
vue.use(Element)
new vue({
  router,
  render: h => h(app)
}).$mount('#app')
