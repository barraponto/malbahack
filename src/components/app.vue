<script>
  import entries from '../entries';
  import Index from './index.vue';
  import Footer from './footer.vue';

  export default {
    name: 'App',
    components: {
      'mh-index': Index,
      'mh-footer': Footer,
    },
    data() {
      return {
        entries,
      };
    },
  };
</script>

<template>
  <main class="malbahack">
    <mh-index :data="entries"></mh-index>
    <router-view></router-view>
    <mh-footer v-if="$route.name === 'entry'" :data="entries"></mh-footer>
  </main>
</template>

<style>
  .malbahack {
    height: 100%;
    padding: 1em;
    overflow: scroll;
  }
</style>
