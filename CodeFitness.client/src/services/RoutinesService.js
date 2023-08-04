import { AppState } from "../AppState.js"
import { Routine } from "../models/Routine.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import Pop from "../utils/Pop.js"

class RoutinesService {
  setActiveRoutine(routine) {
    AppState.activeRoutine = new Routine(routine)
    logger.log('active routine', AppState.activeRoutine)
  }

  async getRoutines() {
    try {
      const res = await api.get(`api/profiles/${AppState.account.id}/routines`)
      logger.log(res.data, AppState.account)
      AppState.routines = res.data.map(d => new Routine(d))
    } catch (error) {
      Pop.error(error.message, '[GETTING ROUTINES]')
    }
  }

  async getRoutineById(routineId) {
    const res = await api.get(`api/routines/${routineId}`)
    logger.log('got one routine', res.data)
    AppState.activeRoutine = new Routine(res.data.routine)
  }

  async createRoutine(routineData) {
    const res = await api.post('api/routines', routineData)
    logger.log(res.data)
    AppState.routines.push(new Routine(res.data))
  }
}

export const routinesService = new RoutinesService()