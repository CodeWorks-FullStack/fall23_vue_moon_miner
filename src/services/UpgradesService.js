import { AppState } from "../AppState.js"

class UpgradesService {
  purchaseUpgrade(upgradeToBePurchased) {
    if (upgradeToBePurchased.price > AppState.cheese) {
      throw new Error("Not enough cheese")
    }
    upgradeToBePurchased.quantity++
    AppState.cheese -= upgradeToBePurchased.price
    upgradeToBePurchased.price = Math.floor(upgradeToBePurchased.price * 1.2)
  }

  collectAuto() {
    const autoUpgrades = AppState.upgrades.filter(upgrade => upgrade.type == 'auto')
    autoUpgrades.forEach(upgrade => AppState.cheese += upgrade.quantity * upgrade.multiplier)
  }
}

export const upgradesService = new UpgradesService()