const routes = [{
    path: '/home',
    component: require('../component/Home/Countent.vue'),
    children: [
        { path: '/home/:id', component: require('../component/Home/Inner.vue') },
    ]
}, {
    path: '/getstart',
    component: require('../component/getstart/GetStart.vue')
}, {
    path: '/about',
    component: require('../component/about/about.vue')
}, {
    path: '/api',
    component: require('../component/api/api.vue')
}, {
    path: '/topic/:id',
    component: require('../component/topic/topic.vue')
}, {
    path: "/",
    redirect: '/home/all'
}]

module.exports = routes;