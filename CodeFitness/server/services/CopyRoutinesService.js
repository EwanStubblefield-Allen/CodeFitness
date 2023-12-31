import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { activitiesService } from "./ActivitiesService.js"

class CopyRoutinesService {
  // async getCopyRoutineById(copyRoutineId) {
  //   const copyRoutine = await dbContext.CopyRoutines.findById(copyRoutineId).populate('author', 'name picture').populate('routine communityRoutine activity')
  //   if (!copyRoutine) {
  //     throw new BadRequest(`[NO COPY ROUTINES MATCH THE ID: ${copyRoutineId}]`)
  //   }
  //   return copyRoutine
  // }

  // async getCopyRoutinesByAccountId(accountId) {
  //   return await dbContext.CopyRoutines.find({ accountId: accountId }).populate('author', 'name picture').populate('routine communityRoutine activity')
  // }

  // async createCopyRoutine(copyRoutineData) {
  //   const copyRoutine = await dbContext.CopyRoutines.create(copyRoutineData)
  //   await activitiesService.createActivitiesByCopyRoutineId(copyRoutine)
  //   await copyRoutine.populate('author', 'name picture')
  //   await copyRoutine.populate('routine communityRoutine activity')
  //   return copyRoutine
  // }

  // async removeCopyRoutine(copyRoutineData) {
  //   const copyRoutineToRemove = await this.getCopyRoutineById(copyRoutineData.id)
  //   if (copyRoutineToRemove.accountId != copyRoutineData.accountId) {
  //     throw new Forbidden(`[YOU ARE NOT THE CREATOR OF THIS COPIED ROUTINE`)
  //   }
  //   await copyRoutineToRemove.remove()
  //   return copyRoutineToRemove
  // }
}

export const copyRoutineService = new CopyRoutinesService()