import Glossary from './components/glossary.vue';
import Entry from './components/entry.vue';

export default (entries, type, path, title) => ({
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
