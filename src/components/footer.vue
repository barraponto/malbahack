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
      flex-basis: 4em;
      flex-grow: 0;
    }
  }
</style>
