import Vue from "vue"
import VueRouter from "vue-router"
const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile') //路由懒加载
const Detail = () => import('@/views/detail/Detail') //路由懒加载
const Signal = () => import('@/views/profile/Signal')
//1、安装插件
Vue.use(VueRouter);
//2、创建路由对象
const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category,


  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile,
    
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
      path: '/signal',
      component: Signal,

    }

]
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  mode: 'history' //地址导航栏为history模式，即/home/profile
})
export default router