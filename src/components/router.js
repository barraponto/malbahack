import VueRouter from 'vue-router';
import entries, {about} from '../entries';
import Entry from './entry.vue';

export default new VueRouter({
  routes: [
    {
      name: 'index',
      path: '/',
      component: Entry,
      props: {entry: about},
    },
    {
      name: 'entry',
      path: '/entry/:id',
      component: Entry,
      props: (route) => ({
        entry: entries.find((entry) => entry.basename === route.params.id),
      }),
    },
  ],
});
