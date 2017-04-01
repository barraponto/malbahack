import 'normalize.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import UI from './components/app.vue';
import router from './components/router';

Vue.use(VueRouter);

document.addEventListener('DOMContentLoaded', function() {
  // eslint-disable no-new
  new Vue({
    router,
    el: '#root',
    render: (h) => h(UI),
  });
});
