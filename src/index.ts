 import vue from 'vue'
import app from './app.vue'
import router from './router'
import Element from 'element-ui'
   import   'element-ui/lib/theme-chalk/index.css'
import    '@/styles/index.scss'
vue.use(Element)

console.log(app)
new vue({
  router,
  render: h => h(app)
}).$mount('#app')
 