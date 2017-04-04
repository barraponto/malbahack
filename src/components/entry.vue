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
    <div class="content">
      <h1>{{ entry.title }}</h1>
      <div v-html="compiled"></div>
    </div>
    <div class="pictures">
      <figure v-for="picture in entry.pictures">
        <img :src="picture.file">
        <figcaption>{{ picture.blurb }}</figcaption>
      </figure>
    </div>
  </article>
</template>

<style>
  .malbahack {
    & article {
      padding: 1em;

      & h1 {
        margin: 0 0 0.66em;
        line-height: 1;
        font-family: 'Brazil Pixo Reto', 'sans-serif';
        font-weight: normal;
        font-size: 2.6em;
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
