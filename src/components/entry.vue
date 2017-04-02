<script>
  import {markdown} from 'markdown';

  export default {
    name: 'Entry',
    data() {
      return {};
    },
    computed: {
      compiledEntry: function() {
        return markdown.toHTML(this.entry.content);
      },
    },
    props: ['id', 'entry'],
  };
</script>

<template>
  <article class="entry">
    <h1>{{ entry.title }}</h1>
    <div class="content" v-html="compiledEntry"></div>
    <figure v-for="picture in entry.pictures">
      <img :src="picture.file">
      <figcaption>{{ picture.blurb }}</figcaption>
    </figure>
  </article>
</template>

<style>
  .entry {
    & .content {
      font-family: 'Cabin', sans-serif;
      line-height: 1.33em;
      letter-spacing: 0.033em;
      margin-bottom: 1em;
    }

    & img {
      display: block;
      width: 100%;
    }

    & figure {
      margin: 0.5em;
      border: 1px solid black;
      padding: 0.5em;
    }

    & figcaption {
      font-family: 'Cabin', sans-serif;
      font-size: 0.66em;
      padding-top: 0.66em;
      line-height: 1.33em;
      letter-spacing: 0.033em;
    }
  }
</style>
