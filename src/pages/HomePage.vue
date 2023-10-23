<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 text-center">
        <h1>Moon Miner</h1>
        <img @click="mineCheese()" class="rounded-circle"
          src="https://images.unsplash.com/photo-1618439832239-24b550c7af56?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="MOON">
      </div>
    </section>
    <section class="row">
      <div class="col-12 text-center">
        <h2>Cheese: {{ cheese }}</h2>
      </div>
    </section>
  </div>
</template>


<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    // NOTE private
    let cheese = ref(0)
    return {
      // NOTE public
      cheese,
      mineCheese() {
        cheese.value += 1000
        logger.log('Mining cheese', cheese);
      }
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  height: 45vh;
  width: 45vh;
  object-fit: cover;
  object-position: 0% 72%;
}
</style>