<script>
  export default {
    name: 'Index',
    props: ['data'],
    data() {
      return {};
    },
  };
</script>

<template>
    <nav class="index">
      <h1>Malbahack</h1>
      <router-link v-for="item in data" :key="item.basename"
        :to="{ name: 'entry', params: { id: item.basename } }"
        :class="{ active: item.basename === $route.params.id }">
        {{item.title}}
      </router-link>
    </nav>
</template>

<style>
  .malbahack {
    & .index {
      padding: 1em 1em 3em;
      background-color: #f6f5f1;

      & h1 {
        font-family: 'Brazil Pixo Reto', 'sans-serif';
        font-weight: normal;
        font-size: 2.6em;
        margin: 0 0 0.33em;
      }

      & a {
        display: block;
        font-family: 'Brazil Pixo Reto';
        font-size: 2.6em;
        line-height: 1em;
        text-decoration: none;
        margin: 0.33em 0;
      }
    }
  }
</style>
