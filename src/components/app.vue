<script>
  import data from '../data.json';

  export default {
    name: 'App',
    data() {
      return {
        data,
      };
    },
    methods: {
      log() {
        // eslint-disable-next-line no-console
        console.log('it is working');
      },
    },
  };
</script>

<template>
  <p v-on:click="log">Hello World</p>
</template>

<style>
  p { color: rebeccapurple; }
</style>
