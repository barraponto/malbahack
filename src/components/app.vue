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
    display: flex;
    flex-direction: column;
    height: 100%;

    & h1 {
      font-family: 'Brazil Pixo Reto', 'sans-serif';
      margin: 0;
    }
  }
</style>
