<script>
  import data from '../data.json';

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
      <router-link v-for="item in data" :key="item.basename"
        :to="{ name: 'entry', params: { id: item.basename } }">
        {{item.title}}
      </router-link>
    </nav>
    <router-view></router-view>
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
