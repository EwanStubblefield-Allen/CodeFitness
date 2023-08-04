import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"
import { accountAchievementsService } from "./AccountAchievementsService.js"
import { activitiesService } from "./ActivitiesService.js"

class RoutinesService {
  async getRoutines() {
    const routines = await dbContext.Routines.find().populate('profile').populate('activity')
    return routines
  }

  async getRoutineById(routineId) {
    const routine = await dbContext.Routines.findById(routineId).populate('profile').populate('activity')
    return routine
  }

  async getRoutinesByAccountId(accountId) {
    const routines = await dbContext.Routines.find({ accountId: accountId }).populate('profile').populate('activity')
    return routines
  }

  async createRoutine(routineData) {
    const routine = await dbContext.Routines.create(routineData)
    await routine.populate('profile')
    await routine.populate('activity')
    const accountAchievement = await accountAchievementsService.updateAccountAchievement(routine.accountId, 'routineCount', 1)
    return { routine: routine, accountAchievement: accountAchievement }
  }

  async updateRoutine(routineData) {
    const updateRoutine = await this.getRoutineById(routineData.id)
    let accountAchievement
    if (updateRoutine.accountId != routineData.accountId) {
      throw new Forbidden(`[YOU CAN NOT CHANGE SOMEONE ELSES ROUTINE]`)
    }
    if (routineData.completeCount) {
      accountAchievement = await accountAchievementsService.updateAccountAchievement(routineData.accountId, 'completeCount', routineData.completeCount - updateRoutine.completeCount)
    }
    updateRoutine.title = routineData.title || updateRoutine.title
    updateRoutine.picture = routineData.picture || updateRoutine.picture
    updateRoutine.description = routineData.description || updateRoutine.description
    updateRoutine.completeCount = routineData.completeCount || updateRoutine.completeCount
    await updateRoutine.save()
    return { routine: updateRoutine, accountAchievement: accountAchievement }
  }

  async removeRoutine(accountId, routineId) {
    const routineToRemove = await this.getRoutineById(routineId)
    if (routineToRemove.accountId != accountId) {
      throw new Forbidden(`[YOU ARE NOT THE CREATOR OF ${routineToRemove.title}]`)
    }
    await activitiesService.removeAllActivitiesByRoutineId(accountId, routineId)
    await routineToRemove.remove()
    return routineToRemove
  }
}

export const routinesService = new RoutinesService()