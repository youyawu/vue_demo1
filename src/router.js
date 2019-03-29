import vue from 'vue'
import router from 'vue-router'
import layout from '@/views/layout'

vue.use(router)


export default new router({
    routes: [
        {
            path: '',
           component:layout,
          redirect:'home',
           children:[
               {
                   path:'home',
                   component: () => import('@/views/home'),
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
                    component:x=>require(['@/views/about'],x)
                }
            ]
        },
        {
            path: '*',
            component: () => import('@/views/404')
        }
    ]
})