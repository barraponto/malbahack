<script>
  export default {
    name: 'Index',
    props: ['data', 'title', 'type'],
    computed: {
      entries() {
        return this.data.filter((entry) => entry.basename !== 'about');
      },
    },
    data() {
      return {};
    },
  };
</script>

<template>
    <nav class="index">
      <h1>{{title}}</h1>
      <router-link v-for="item in entries" :key="item.basename"
        :to="{ name: type, params: { id: item.basename } }"
        :class="{ active: item.basename === $route.params.id }">
        {{item.title}}
      </router-link>
    </nav>
</template>

<style>
  .malbahack {
    & .index {
      padding: 1em 0 3em;
      background-color: #f6f5f1;

      & h1 {
        padding: 0 1rem;
        font-family: 'Brazil Pixo Reto', 'sans-serif';
        font-weight: normal;
        font-size: 2.6em;
        margin: 0 0 0.33em;
      }

      & a {
        display: block;
        padding: 0.33em 1rem;
        font-family: 'Brazil Pixo Reto';
        font-size: 2.6em;
        line-height: 1em;
        text-decoration: none;

        &:hover {
          background-color: #d7d8d3;
        }
      }
    }
  }
</style>
