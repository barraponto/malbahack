<script>
  import {markdown} from 'markdown';

  export default {
    name: 'Entry',
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
  <article>
    <h1>{{ entry.title }}</h1>
    <div class="content" v-html="compiled"></div>
    <figure v-for="picture in entry.pictures">
      <img :src="picture.file">
      <figcaption>{{ picture.blurb }}</figcaption>
    </figure>
  </article>
</template>

<style>
  .malbahack {
    & article {
      padding: 1em;

      & h1 {
        font-family: 'Brazil Pixo Reto', 'sans-serif';
        font-weight: normal;
        font-size: 2.6em;
        margin: 0 0 0.33em;
      }

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
  }
</style>
