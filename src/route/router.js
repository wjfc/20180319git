import Vue from 'vue'
import Router from 'vue-router'
// 引用组件 start
import Home from '../components/Home/Home.vue'
import Cart from '../components/Cart/Cart.vue'
import Person from '../components/Person/Person.vue'
import Search from '../components/Search/Search.vue'
// 引用组件 end
Vue.use(Router)
const router = new Router({
    mod: 'history',
    linkActiveClass: 'mui-active', //配置router-link 选中的样式类名。
    routes: [{
        path: '/home',
        component: Home
    }, {
        path: '/cart',
        component: Cart
    }, {
        path: '/person',
        component: Person
    }, {
        path: '/search',
        component: Search
    }, {
        path: '/',
        redirect: '/home' //重定向
    }]
});
export default router