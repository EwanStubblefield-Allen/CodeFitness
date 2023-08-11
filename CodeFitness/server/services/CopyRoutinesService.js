import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"
import { activitiesService } from "./ActivitiesService.js"

class CopyRoutinesService {
  async getCopyRoutineById(copyRoutineId) {
    const copyRoutine = await dbContext.CopyRoutines.findById(copyRoutineId).populate('author', 'name picture').populate('routine activity')
    if (!copyRoutine) {
      throw new BadRequest(`[NO ACTIVITIES MATCH THE COPY ROUTINE ID: ${copyRoutineId}]`)
    }
    return copyRoutine
  }

  async getCopyRoutinesByAccountId(accountId) {
    return await dbContext.CopyRoutines.find({ accountId: accountId }).populate('author', 'name picture').populate('routine activity')
  }

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