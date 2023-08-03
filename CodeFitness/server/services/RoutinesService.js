import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { accountAchievementsService } from "./AccountAchievementsService.js"

class RoutinesService {
  async getRoutines() {
    const routines = await dbContext.Routines.find().populate('profile').populate('activityCount').populate('activity')
    return routines
  }

  async getRoutineById(routineId) {
    const routine = await (await dbContext.Routines.findById(routineId).populate('profile').populate('activityCount')).populate('activity')

    return routine
  }

  async getRoutinesByAccountId(accountId) {
    const routines = await dbContext.Routines.find({ accountId: accountId }).populate('profile').populate('activityCount').populate('activity')

    return routines
  }

  async createRoutine(routineData) {
    const routine = await dbContext.Routines.create(routineData)
    await routine.populate('profile')
    await routine.populate('activityCount')
    await routine.populate('activity')
    await accountAchievementsService.updateAccountAchievement(routine.accountId, 'routineCount')
    return routine
  }

  async removeRoutine(accountId, routineId) {
    const routineToRemove = await this.getRoutineById(routineId)
    if (routineToRemove.accountId.toString() != accountId) {
      throw new Forbidden(`[YOU ARE NOT THE CREATOR OF ${routineToRemove.title}]`)
    }
    // ASK IF WE ARE HARD DELETING
    // YES MAN WE HAVE A BUNCH OF CRAPPY FALSE DATA I"M SENDING UP, i don't want to bother you to delete your mongo DB :3 even though that's logical :)
    routineToRemove.public = false
    await routineToRemove.save()
    return routineToRemove
  }
}

export const routinesService = new RoutinesService()