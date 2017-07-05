<script>
  import {markdown} from 'markdown';

  export default {
    name: 'AboutEntry',
    data() {
      return {};
    },
    props: ['entry'],
    computed: {
      compiled() {
        return markdown.toHTML(this.entry.content);
      },
    },
    beforeRouteEnter(to, from, next) {
      const body = document.querySelector('body');
      body.classList.add('no-scroll');
      next();
    },
    beforeRouteUpdate(to, from, next) {
      const body = document.querySelector('body');
      body.classList.add('no-scroll');
      next();
    },
    beforeRouteLeave(to, from, next) {
      const body = document.querySelector('body');
      body.classList.remove('no-scroll');
      next();
    },
  };
</script>

<template>
  <transition appear :name="'details'">
    <article class="about-detail">
      <router-link :to="{name: 'about-index'}" class="about-exit">X</router-link>
      <div class="content">
        <h1>{{ entry.title }}</h1>
        <div v-html="compiled"></div>
      </div>
    </article>
  </transition>
</template>

<style>
  .about-detail {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 85vh;
    background-color: lightskyblue;
    overflow: scroll;
    padding: 0 1em;
    transition: height 0.75s;

    &.details-enter,
    &.details-leave-to {
      height: 0;
    }

    &.details-enter-to,
    &.details-leave {
      height: 85vh;
    }
  }

  .about-exit {
    position: absolute;
    top: 0;
    right: 0;
    width: 2em;
    height: 2em;
    line-height: 2em;
    text-align: center;
  }

  @media (min-width: 768px) {
    .about {
      display: flex;

      & .about-detail,
      & .about-text {
        flex-basis: 20em;
      }

      & .about-detail {
        flex-grow: 2;
        margin-right: 2em;
      }

      & .about-text {
        flex-grow: 5;
      }
    }
  }
</style>
