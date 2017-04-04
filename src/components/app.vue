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
    computed: {
      atEntry() {
        return this.$route.name === 'entry';
      },
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
    <mh-footer v-if="atEntry" :data="entries"></mh-footer>
  </main>
</template>

<style>
  .malbahack {
    height: 100%;
    overflow: scroll;
  }
</style>
