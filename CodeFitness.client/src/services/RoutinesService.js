import { AppState } from "../AppState.js"
import { Routine } from "../models/Routine.js"
import { api } from "./AxiosService.js"
import Pop from "../utils/Pop.js"

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
}

export const routinesService = new RoutinesService()