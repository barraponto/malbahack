<script>
  import velocity from 'velocity-animate';

  export default {
    name: 'AboutLink',
    data() {
      return {};
    },
    props: ['target'],
    methods: {
      linkTo(destination) {
        return {
          name: 'about-item',
          params: {id: destination},
        };
      },
      activateLink(event) {
        velocity(event.target, 'scroll', {duration: 750, offset: -28});
      },
    },
  };
</script>

<template>
    <router-link class="about-link"
      :to="linkTo(target)" @click.native="activateLink">
      <slot></slot>
    </router-link>
</template>

<style>
</style>
