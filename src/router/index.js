import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main/Index.vue'
import Home from '../views/Main/Home.vue'
import Category from '../views/Main/Category.vue'
import Cart from '../views/Main/Cart.vue'
import User from '../views/Main/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Home',
        meta: {
          title: '首页',
          active: 0,
        },
        component: Home,
      },
      {
        path: '/category',
        name: 'Category',
        meta: {
          title: '商品分类',
          active: 1,
        },
        component: Category,
      },
      {
        path: '/cart',
        name: 'Cart',
        meta: {
          title: '购物车',
          active: 2,
        },
        component: Cart,
      },
      {
        path: '/user',
        name: 'User',
        meta: {
          title: '我的',
          active: 3,
        },
        component: User,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    meta: {
      title: '搜索商品',
    },
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/goods_list',
    name: 'GoodsList',
    meta: {
      title: '商品列表',
    },
    component: () => import('../views/GoodsList.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
