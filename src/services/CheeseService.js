import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"

class CheeseService {
  mineCheese() {
    AppState.cheese++
    logger.log(AppState.cheese)
  }

}

export const cheeseService = new CheeseService()