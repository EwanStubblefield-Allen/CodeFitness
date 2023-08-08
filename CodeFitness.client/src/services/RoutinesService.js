import { AppState } from "../AppState.js"
import { Routine } from "../models/Routine.js"
import { api } from "./AxiosService.js"
import Pop from "../utils/Pop.js"
import { logger } from "../utils/Logger.js"

class RoutinesService {
  setActiveRoutine(routine) {
    AppState.activeRoutine = new Routine(routine)
  }

  async getRoutines() {
    try {
      const res = await api.get(`api/profiles/${AppState.account.id}/routines`)
      AppState.routines = res.data.map(d => new Routine(d))
    } catch (error) {
      Pop.error(error.message, '[GETTING ROUTINES]')
    }
  }

  async getRoutineById(routineId) {
    const res = await api.get(`api/routines/${routineId}`)
    AppState.activeRoutine = new Routine(res.data)
  }

  async createRoutine(routineData) {
    const res = await api.post('api/routines', routineData)
    const routine = new Routine(res.data.routine)
    AppState.routines.push(routine)
    return routine
  }

  async deleteRoutine(routineId) {
    await api.delete(`api/routines/${routineId}`)
    AppState.routines = AppState.routines.filter(r => r.id != routineId)
  }

  async editRoutine(routineData) {
    const res = await api.put(`api/routines/${routineData.id}`, routineData)
    logger.log('[EDIT ROUTINE]', res.data)
    const routine = new Routine(res.data)

    const routineIndex = AppState.routines.findIndex(r => r.id == routineData.id)

    AppState.routines.splice(routineIndex, 1, routine)
  }

  setRoutineToEdit(routineToEdit) {
    AppState.activeRoutine = new Routine(routineToEdit)
  }
}

export const routinesService = new RoutinesService()