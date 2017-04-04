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
        return (this.index + 1 in this.data) ? this.index + 1 : false;
      },
      previousEntry() {
        return (this.index - 1 in this.data) ? this.index - 1 : false;
      },
    },
  };
</script>

<template>
  <footer>
    <h2>Malbahack</h2>
    <nav>
      <router-link :to="{ name: 'entry', params: { id: previousEntry } }">
        &lt;
      </router-link>
      <router-link :to="{ name: 'entry', params: { id: nextEntry } }">
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
