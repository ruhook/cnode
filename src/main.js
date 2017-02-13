import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import Vuex from 'vuex';

[VueRouter, VueResource, Vuex].forEach(item => Vue.use(item))

const router = new VueRouter({
    // mode: 'history',
    linkActiveClass: 'current-tab',
    routes: require('./router/index')
})

router.beforeEach((to, from, next) => {
    next();
    // console.log(to)
})

const app = new Vue({
    render: h => h(App),
    router
}).$mount('#app')