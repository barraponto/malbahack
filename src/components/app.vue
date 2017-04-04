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
  <main class="malbahack" :class="{ 'at-entry': atEntry }">
    <mh-index :data="entries"></mh-index>
    <router-view></router-view>
    <mh-footer v-if="atEntry" :data="entries"></mh-footer>
  </main>
</template>

<style>
  .malbahack {
    &.at-entry {
      height: 100%;
      display: flex;
      flex-direction: column;

      & .index {
        display: none;
      }

      /* router-view resolves to article */
      & article {
        overflow-y: scroll;
        flex-basis: 100%;
      }
    }
  }
</style>
