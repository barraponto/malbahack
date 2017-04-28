<script>

  export default {
    name: 'Splash',
    data() {
      return {};
    },
  };
</script>

<template>
  <main class="splash">
    <h1>
      A HISTÓRIA DA *RTE<router-link :to="{ name: 'about-index' }">[1]</router-link>
      é[2] a área do conhecimento[3] humano[4] que
      constrói[5] uma[6] narrativa[7] cronológica[8] sobre[9] a criação[10] de
      objetos<router-link :to="{ name: 'object-index' }">[11]</router-link> e
      experiências<router-link :to="{ name: 'experience-index'}">[12]</router-link>
      realizados[13], em sua grande maioria[14], por homens[15] brancos[16],
      europeus[17], norte-americanos[18] e pintores[19] (alguns[20]) gênios[21]
      ...[22]
    </h1>
  </main>
</template>

<style>
  .splash {
    box-sizing: border-box;
    max-width: 768px;
    padding: 1em;
    font-family: 'Cabin', sans-serif;
    line-height: 2.66em;
    letter-spacing: 0.033em;
  }
</style>
