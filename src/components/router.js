import VueRouter from 'vue-router';
import Entry from './entry.vue';
import Index from './index.vue';
import data from '../data.json';

Object.keys(data).forEach((key) => {
  data[key].pictures.forEach(
    (picture) => Object.assign(picture,
      {file: require(`../../data/images/${picture.file}`)}));
});

export default new VueRouter({
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index,
      props: {data},
    },
    {
      name: 'entry',
      path: '/entry/:id',
      component: Entry,
      props: (route) => ({
        id: route.params.id,
        entry: data[route.params.id],
      }),
    },
  ],
});
