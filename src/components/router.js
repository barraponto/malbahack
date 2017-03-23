import VueRouter from 'vue-router';
import Entry from './entry.vue';

export default new VueRouter({
  routes: [
    {
      name: 'entry',
      path: '/entry/:id',
      component: Entry,
      props: true,
    },
  ],
});
