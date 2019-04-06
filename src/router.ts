import vue from 'vue'
import router from 'vue-router'
import layout from '@/views/layout/index.vue'

vue.use(router)


export default new router({
    mode:'history',
    routes: [
      
        {
            path: '',
           component:layout,
          redirect:'/home',
        },
        {
            path:'/home',
            component:layout,
            redirect:'/home/index',
            children:[
                {
                    path:'index',
                    component:()=>import("@/views/home.vue")
                }
            ]
        },    
        {
            path:'/about',
            component:layout,
            redirect:'/about/index',
            children:[
                {
                    path:'index',
                    component:()=>import("@/views/about.vue")
                }
            ]
        },
        {
            path: '*',
            component: () => import('@/views/404.vue')
        }
    ]
})