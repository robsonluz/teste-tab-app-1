import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/cadastro',
    component: () => import('@/views/CadastroPage.vue')
  },  
  {
    path: '/settings',
    component: () => import('@/views/SettingsPage.vue')
  },
  {
    path: '/details/:id',
    component: () => import('@/views/DetailsPage.vue')
  },    
  {
    path: '/slide',
    component: () => import('@/views/SlidePage.vue')
  },  
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'list',
        component: () => import('@/views/ListPage.vue')
      }      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
