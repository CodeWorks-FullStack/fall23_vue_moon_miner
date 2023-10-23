<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 text-center">
        <h1 :class="weirdClass">Moon Miner</h1>
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
    <section class="row">
      <div v-for="upgrade in upgrades" :key="upgrade.name" class="col-6 text-center">
        <button @click="purchaseUpgrade()" class="btn" :disabled="upgrade.price > cheese"
          :class="{ 'bg-primary fw-bold': cheese >= upgrade.price, 'bg-danger': cheese < upgrade.price }">
          {{ upgrade.name }}
        </button>
        <div v-if="upgrade.quantity > 0">Qty: {{ upgrade.quantity }}</div>
        <div>Price: {{ upgrade.price }}</div>
      </div>
    </section>
  </div>
</template>


<script>
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import { cheeseService } from '../services/CheeseService.js'
import { logger } from '../utils/Logger.js'


export default {
  setup() {
    // NOTE private
    return {
      // NOTE public
      // cheese: computed(() => { return AppState.cheese }),
      cheese: computed(() => AppState.cheese),
      upgrades: computed(() => AppState.upgrades),

      weirdClass: 'fw-bold',
      mineCheese() {
        cheeseService.mineCheese()
      },
      purchaseUpgrade() {

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