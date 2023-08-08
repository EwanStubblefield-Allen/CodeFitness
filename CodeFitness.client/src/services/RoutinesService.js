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

  async updateRoutine() {
    AppState.activeRoutine.completeCount++
    await api.put(`api/routines/${AppState.activeRoutine.id}`, { completeCount: AppState.activeRoutine.completeCount })
  }

  async deleteRoutine(routineId) {
    await api.delete(`api/routines/${routineId}`)
    AppState.routines = AppState.routines.filter(r => r.id != routineId)
  }

  async editRoutine(routineData) {
    const res = await api.put(`api/routines/${routineData.id}`, routineData)
    logger.log('[EDIT ROUTINE]', res.data)
  }

  setRoutineToEdit(routineToEdit) {
    AppState.activeRoutine = new Routine(routineToEdit)
  }
}

export const routinesService = new RoutinesService()