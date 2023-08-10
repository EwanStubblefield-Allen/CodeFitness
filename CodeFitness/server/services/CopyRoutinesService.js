import { dbContext } from "../db/DbContext.js"
import { activitiesService } from "./ActivitiesService.js"

class CopyRoutinesService {
  async createCopyRoutine(copyRoutineData) {
    const copyRoutine = await dbContext.CopyRoutines.create(copyRoutineData)
    await activitiesService.createActivitiesByCopyRoutineId(copyRoutine, copyRoutine.routineId)
    await copyRoutine.populate('author', 'name picture')
    await copyRoutine.populate('routine')
    await copyRoutine.populate('activity')
    return copyRoutine
  }
}

export const copyRoutineService = new CopyRoutinesService()