import 'normalize.css';
import Vue from 'vue';
import VueRouter from 'vue-router';

import './global.css';
import UI from './components/app.vue';
import router from './router';

Vue.use(VueRouter);

document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    router,
    el: '#root',
    render: (h) => h(UI),
  });
});
