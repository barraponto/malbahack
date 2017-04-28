import VueRouter from 'vue-router';
import getEntries from './entries';
import glossaryRoutes from './glossary';
import Splash from './components/splash.vue';
import About from './components/about.vue';

import entries from './data/entries.json';
const entriesFolder = require.context('../data/entries/images');

import about from './data/about.json';
const aboutFolder = require.context('../data/about/images');

export default new VueRouter({
  routes: [
    {
      name: 'splash',
      path: '/',
      component: Splash,
      props: {},
    },
    {
      name: 'about-index',
      path: '/about',
      component: About,
      props: {},
      children: [
        {
          name: 'about-item',
          path: '/:id',
          props: {entries: getEntries(about, aboutFolder)},
        },
      ],
    },
    glossaryRoutes(getEntries(entries, entriesFolder),
      'object', '/objetos', 'Objetos[11]'),
    glossaryRoutes(getEntries(entries, entriesFolder),
      'experience', '/experiencias', 'Experiências[12]'),
  ],
});
