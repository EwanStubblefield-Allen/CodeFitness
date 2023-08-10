import { AppState } from "../AppState.js"
import { Routine } from "../models/Routine.js"
import { api } from "./AxiosService.js"
import { accountAchievementService } from "./AccountAchievementService.js"
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
    AppState.activeSuperRoutine = new Routine(res.data)
  }

  async getRoutinesByProfileId(profileId) {
    const res = await api.get(`api/profiles/${profileId}/routines`)
    logger.log(res.data)
    
  }

  async createRoutine(routineData) {
    const res = await api.post('api/routines', routineData)

    if (res.data.accountAchievement) {
      accountAchievementService.checkAchievement(res.data.accountAchievement, 'routineCount')
    }
    const routine = new Routine(res.data.routine)
    AppState.routines.push(routine)
    Pop.success(`${routine.title} was created!`)
    return routine
  }

  async updateRoutine(routineData) {
    const res = await api.put(`api/routines/${AppState.activeRoutine.id}`, routineData)

    if (res.data.accountAchievement) {
      accountAchievementService.checkAchievement(res.data.accountAchievement, 'completeCount')
    }
    const routine = new Routine(res.data.routine)
    AppState.activeRoutine = routine
    const foundIndex = AppState.routines.findIndex(r => r.id == routineData.id)
    AppState.routines.splice(foundIndex, 1, routine)
  }

  async removeRoutine(routineId) {
    const res = await api.delete(`api/routines/${routineId}`)
    AppState.routines = AppState.routines.filter(r => r.id != routineId)
    Pop.toast(`${res.data.title} was deleted!`)
  }
}

export const routinesService = new RoutinesService()