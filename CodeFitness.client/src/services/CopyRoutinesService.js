import { AppState } from "../AppState.js"
import { CopyRoutine } from "../models/CopyRoutine.js"
import { api } from "./AxiosService.js"
import Pop from "../utils/Pop.js"

class CopyRoutinesService {
  async getCopyRoutines() {
    try {
      const res = await api.get(`api/profiles/${AppState.account.id}/copyRoutines`)
      AppState.copyRoutines = res.data.map(d => new CopyRoutine(d))
    } catch (error) {
      Pop.error(error.message, '[GETTING COPY ROUTINES]')
    }
  }

  async createCopyRoutine(routineData) {
    const res = await api.post('api/copyRoutines', routineData)
    const copyRoutine = new CopyRoutine(res.data)
    AppState.copyRoutines.push(copyRoutine)
    return copyRoutine
  }
}

export const copyRoutinesService = new CopyRoutinesService()