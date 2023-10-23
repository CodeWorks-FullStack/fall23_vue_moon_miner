<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 text-center">
        <img @click="mineCheese()" class="rounded-circle"
          src="https://images.unsplash.com/photo-1618439832239-24b550c7af56?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="MOON">
      </div>
    </section>
    <section class="row">
      <div class="col-12 text-center">
        <h2>Cheese: {{ cheese }}</h2>
        <h3>Click: {{ clickPower }} || Auto: {{ autoPower }}</h3>
      </div>
    </section>
    <section class="row">
      <div v-for="upgrade in upgrades" :key="upgrade.name" class="col-6 text-center">
        <button @click="purchaseUpgrade(upgrade)" class="btn" :disabled="upgrade.price > cheese"
          :class="{ 'bg-primary fw-bold': cheese >= upgrade.price, 'bg-danger': cheese < upgrade.price }">
          {{ upgrade.name }}
        </button>
        <div v-if="upgrade.quantity > 0">Qty: {{ upgrade.quantity }}</div>
        <div>Price: {{ upgrade.price }}</div>
        <div v-if="upgrade.type == 'click'">{{ upgrade.multiplier }} per click</div>
        <div v-else>{{ upgrade.multiplier }} / 3s</div>
        <!-- <div v-else-if="upgrade.type == 'auto'">{{ upgrade.multiplier }} / 3s</div> -->
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted, onUnmounted } from 'vue'
import { AppState } from '../AppState.js'
import { cheeseService } from '../services/CheeseService.js'
import { upgradesService } from '../services/UpgradesService.js'
import { logger } from '../utils/Logger.js'


export default {
  setup() {
    // NOTE private

    function collectAuto() {
      upgradesService.collectAuto()
    }

    onMounted(() => {
      setInterval(collectAuto, 3000)
    })

    // onUnmounted(() => {})
    return {
      // NOTE public
      // cheese: computed(() => { return AppState.cheese }),
      weirdClass: 'fw-bold',
      cheese: computed(() => AppState.cheese),
      upgrades: computed(() => AppState.upgrades),
      clickPower: computed(() => {
        let total = 1
        const clickUpgrades = AppState.upgrades.filter(upgrade => upgrade.type == 'click')
        clickUpgrades.forEach(upgrade => total += upgrade.multiplier * upgrade.quantity)
        return total
      }),
      autoPower: computed(() => {
        let total = 0
        const autoUpgrades = AppState.upgrades.filter(upgrade => upgrade.type == 'auto')
        autoUpgrades.forEach(upgrade => total += upgrade.multiplier * upgrade.quantity)
        return total
      }),


      mineCheese() {
        cheeseService.mineCheese()
      },
      purchaseUpgrade(upgradeToBePurchased) {
        upgradesService.purchaseUpgrade(upgradeToBePurchased)
      },
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