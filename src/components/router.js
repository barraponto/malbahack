import VueRouter from 'vue-router';
import Entry from './entry.vue';
import data from '../data.json';

Object.keys(data).forEach((key) => {
  data[key].pictures.forEach(
    (picture) => Object.assign(picture,
      {file: require(`../../data/${picture.file}`)}));
});

export default new VueRouter({
  routes: [
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
