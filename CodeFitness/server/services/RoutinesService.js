import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class RoutinesService {
  async getRoutines() {
    const routines = await dbContext.Routines.find().populate('profile').populate('activityCount')
    return routines
  }

  async getRoutineById(routineId) {
    const routine = await dbContext.Routines.findById(routineId).populate('profile').populate('activityCount')
    if (!routine) {
      throw new BadRequest(`[NO ROUTINE MATCHES THE ID: ${routineId}]`)
    }
    return routine
  }

  async getRoutinesByAccountId(accountId) {
    const routines = await dbContext.Routines.find({ accountId: accountId })
    if (!routines[0]) {
      throw new BadRequest(`[NO ROUTINES MATCH THE ACCOUNT ID: ${accountId}]`)
    }
    return routines
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
      throw new Forbidden(`[YOU ARE NOT THE CREATOR OF ${routineToRemove.title}]`)
    }
    // ASK IF WE ARE HARD DELETING
    routineToRemove.public = false
    await routineToRemove.save()
    return routineToRemove
  }
}

export const routinesService = new RoutinesService()