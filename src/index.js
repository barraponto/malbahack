import Vue from 'vue';
import UI from './components/app.vue';


document.addEventListener('DOMContentLoaded', function() {
  // eslint-disable no-new
  new Vue({
    el: '#root',
    render: (h) => h(UI),
  });
});
