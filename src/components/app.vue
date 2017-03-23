<script>
  import data from '../data.json';

  // eslint-disable-next-line no-console
  console.log(data);

  export default {
    name: 'App',
    data() {
      return {
        data,
      };
    },
  };
</script>

<template>
  <main class="malbahack">
    <h1>Malbahack</h1>
    <nav>
      <a v-for="item in data">
        {{item.title}}
      </a>
    </nav>
  </main>
</template>

<style>
  .malbahack {
    & nav {
      & a {
        display: block;
      }
    }
  }
</style>
