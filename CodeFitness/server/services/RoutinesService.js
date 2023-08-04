import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"
import { accountAchievementsService } from "./AccountAchievementsService.js"

class RoutinesService {
  updateRoutine() {
    throw new Error("Method not implemented.")
  }
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