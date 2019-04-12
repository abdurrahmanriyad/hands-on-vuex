// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Blog from './components/Blog'
import Blogs from './components/Blogs'
import store from './store'

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
    {path: '/foo', component: Blog},
    {path: '/bar', component: Blogs}
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

/* eslint-disable no-new */
new Vue({
    router,
    store,
    components: {App},
    template: '<App/>'
}).$mount('#app');


