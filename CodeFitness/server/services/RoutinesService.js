import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class RoutinesService {
  async getRoutines() {
    const routines = await dbContext.Routines.find().populate('profile').populate('activityCount')
    return routines
  }

  async getRoutineById(routineId) {
    const routine = await dbContext.Routines.findById(routineId).populate('profile').populate('activityCount')
    // FIXME add bad request
    return routine
  }

  async createRoutine(routineData) {
    const routine = await dbContext.Routines.create(routineData)
    await routine.populate('profile')
    await routine.populate('activityCount')
    return routine
  }

  async removeRoutine(accountId, routineId) {
    const routineToRemove = await this.getRoutineById(routineId)
    if (routineToRemove.accountId.toString() != accountId) {
      throw new Forbidden('[YOU ARE NOT THE CREATOR]')
    }
    routineToRemove.public = false
    await routineToRemove.save()
    return routineToRemove
  }
}

export const routinesService = new RoutinesService()