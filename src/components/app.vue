<script>
  export default {
    name: 'App',
    data() {
      return {};
    },
  };
</script>

<template>
  <main class="malbahack">
    <h1>Malbahack</h1>
    <router-view></router-view>
  </main>
</template>

<style>
  .malbahack {
    height: 100%;
    padding: 1em 3em 1em 1em;
    overflow: scroll;

    & h1 {
      font-family: 'Brazil Pixo Reto', 'sans-serif';
      font-weight: normal;
      font-size: 2.6em;
      margin: 0 0 0.33em;
    }
  }
</style>
