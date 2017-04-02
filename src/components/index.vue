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
  <nav>
    <router-link v-for="item in data" :key="item.basename"
      :to="{ name: 'entry', params: { id: item.basename } }">
      {{item.title}}
    </router-link>
  </nav>
</template>

<style>
  .malbahack {
    & nav {
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
