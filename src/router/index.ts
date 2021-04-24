import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '@/pages/Dashboard.vue'
import Users from '@/pages/users/Users.vue'
import UserCreate from '@/pages/users/UserCreate.vue'
import UserEdit from '@/pages/users/UserEdit.vue'
import Roles from '@/pages/roles/Roles.vue'
import RoleCreate from '@/pages/roles/RoleCreate.vue'
import RoleEdit from '@/pages/roles/RoleEdit.vue'
import Products from '@/pages/products/Products.vue'
import ProductCreate from '@/pages/products/ProductCreate.vue'
import Register from '@/pages/Register.vue'
import Login from '@/pages/Login.vue'
import Wrapper from '@/pages/Wrapper.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  {
    path: '',
    component: Wrapper,
    children: [
      { path: '', component: Dashboard },
      { path: '/users', component: Users },
      { path: '/users/create', component: UserCreate },
      { path: '/users/:id/edit', component: UserEdit },
      { path: '/roles', component: Roles },
      { path: '/roles/create', component: RoleCreate },
      { path: '/roles/:id/edit', component: RoleEdit },
      { path: '/products', component: Products },
      { path: '/products/create', component: ProductCreate },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
