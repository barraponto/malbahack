<script>
  export default {
    data() {
      return {};
    },
    props: ['data'],
    computed: {
      index() {
        return this.data.findIndex(
          (entry) => entry.basename === this.$route.params.id);
      },
      nextEntry() {
        const nextIndex = this.index + 1;
        return (nextIndex in this.data) ? this.data[nextIndex].basename : false;
      },
      previousEntry() {
        const previousIndex = this.index - 1;
        return (previousIndex in this.data) ?
         this.data[previousIndex].basename : false;
      },
    },
  };
</script>

<template>
  <footer>
    <router-link :to="{ name: 'index' }">
      Malbahack
    </router-link>
    <nav>
      <router-link v-if="previousEntry"
        :to="{ name: 'entry', params: { id: previousEntry } }">
        &lt;
      </router-link>
      <router-link v-if="nextEntry"
        :to="{ name: 'entry', params: { id: nextEntry } }">
        &gt;
      </router-link>
    </nav>
  </footer>
</template>

<style>
  .malbahack {
    & footer {
      display: flex;
      justify-content: space-between;
      padding: 1em;

      & h2, & a {
        font-family: 'Brazil Pixo Reto', 'sans-serif';
        font-weight: normal;
        font-size: 2.6em;
        margin: 0 0 0.33em;
      }

      & a {
        padding: 0 0.5em;
        display: inline-block;
        text-decoration: none;
      }
    }
  }
</style>
