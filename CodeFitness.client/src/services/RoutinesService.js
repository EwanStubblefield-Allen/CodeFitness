import { AppState } from "../AppState.js"
import { Routine } from "../models/Routine.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService.js"

class RoutinesService {

  async getRoutines() {
    try {
      const res = await api.get(`api/profiles/${AppState.account.id}/routines`)
      logger.log(res.data)
      AppState.routines = res.data.map(d => new Routine(d))
    } catch (error) {
      Pop.error(error.message)
    }
  }
  async createRoutine(routineData) {
    const res = await api.post('api/routines', routineData)
    logger.log(res.data)
    AppState.routines.push(new Routine(res.data))
  }

  async setActiveRoutine(routine) {
    AppState.activeRoutines = new Routine(routine)
    logger.log('active routine', AppState.activeRoutines)
  }

  async getRoutineById(routineId) {
    const res = await api.get(`api/routines/${routineId}`)
    logger.log('got one routine', res.data)
    AppState.activeRoutines = new Routine(res.data)
  }
}

export const routinesService = new RoutinesService()