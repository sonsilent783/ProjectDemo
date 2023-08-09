import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Admin from '../pages/admin/Admin.vue'
import Products from '../pages/admin/Products.vue'
import ProductCreate from '../pages/admin/ProductCreate.vue'
import ProductEdit from '../pages/admin/ProductEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path:'/products',
          component: Products,
          name: 'Products'
        },
        {
          path:'/products/create',
          component: ProductCreate,
          name: 'ProductCreate'
        },
        {
          path:'/products/:id/edit',
          component: ProductEdit,
          name: 'ProductEdit',
          props: true
        }   
      ]
    }
  
  ]
})

export default router
