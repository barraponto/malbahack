import VueRouter from 'vue-router';
import entries from '../entries';
import Glossary from './glossary.vue';
import Entry from './entry.vue';
import Splash from './splash.vue';

const glossaryRoutes = (entries, type, path, title) => ({
  path,
  component: Glossary,
  props: (route) => ({entries, title, type}),
  children: [
    {
      name: `${type}-index`,
      path: '/',
      component: Entry,
      props: {
        entry: entries.find((entry) => entry.basename === 'about'),
      },
    },
    {
      name: type,
      path: ':id',
      component: Entry,
      props: (route) => ({
        entry: entries.find((entry) => entry.basename === route.params.id),
      }),
    },
  ],
});

export default new VueRouter({
  routes: [
    {
      name: 'splash',
      path: '/',
      component: Splash,
      props: {},
    },
    glossaryRoutes(entries, 'object', '/objetos', 'Objetos'),
    glossaryRoutes(entries, 'experience', '/experiencias', 'Experiências'),
  ],
});
