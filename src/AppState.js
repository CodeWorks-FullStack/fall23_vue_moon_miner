import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  cheese: 0,
  upgrades: [
    new Upgrade({ name: 'Cheese Knife', price: 20, multiplier: 1, type: 'click' }),
    new Upgrade({ name: 'Cheese Grater', price: 50, multiplier: 5, type: 'click' }),
    new Upgrade({ name: 'Food Processor', price: 50, multiplier: 1, type: 'auto' }),
    new Upgrade({ name: 'Mold Farm', price: 100, multiplier: 5, type: 'auto' }),
  ]
})
