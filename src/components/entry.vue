<script>
  import data from '../data.json';

  export default {
    name: 'Entry',
    data() {
      return {};
    },
    props: ['id'],
    computed: {
      entry() {
        return data[this.id];
      },
    },
  };
</script>

<template>
  <article>
    <h1>{{ entry.title }}</h1>
    {{ entry.content }}
    <figure v-for="picture in entry.pictures">
      <img :src="picture.file">
      <figcaption>{{ picture.blurb }}</figcaption>
    </figure>
  </article>
</template>
