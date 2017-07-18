import Bootstrap from 'bootstrap'

import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue';

const routes = [
    'home',
    'failures'
].map((moduleName) => require('../' + moduleName + '/routing'))

Vue.use(VueRouter);

window.addEventListener('load', function () {
    new Vue({
        router: new VueRouter({
            routes: routes
        }),
        el: '[data-main]'
    });
});
