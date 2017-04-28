<script>
  import {markdown} from 'markdown';

  export default {
    name: 'AboutEntry',
    data() {
      return {};
    },
    props: ['entry'],
    computed: {
      compiled: function() {
        return markdown.toHTML(this.entry.content);
      },
    },
  };
</script>

<template>
  <article class="about-detail">
    <div class="content">
      <h1>{{ entry.title }}</h1>
      <div v-html="compiled"></div>
    </div>
  </article>
</template>

<style>
</style>
