import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class RoutinesService {
  async getRoutineById(routineId) {
    const routine = (await dbContext.Routines.findById(routineId)).populate('account')
    return routine
  }
  async removeRoutine(accountId, routineId) {
    const routineToRemove = await this.getRoutineById(routineId)
    if (routineToRemove.accountId.toString() != accountId) {
      throw new Forbidden('You are not the creator!')
    }
    routineToRemove.public = false
    await routineToRemove.save()
    return routineToRemove
  }
  async getRoutines() {
    const routines = await dbContext.Routines.find().populate('account')
    return routines
  }
  async createRoutine(routineData) {
    const routine = await dbContext.Routines.create(routineData)
    await routine.populate('account')
    return routine
  }

}

export const routinesService = new RoutinesService()