import Vue from 'vue'
import Router from 'vue-router'
import Index from "../views/Index"

Vue.use(Router)

let index = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'index',
        component: Index
    },]
})
export default index