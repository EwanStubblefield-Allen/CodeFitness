import { dbContext } from "../db/DbContext.js"

class RoutinesService {
  async getRoutineById(routineId) {
    const routine = await dbContext.Routines.findById(routineId)
    return routine
  }
  // removeRoutine(accountId, routineId) {
  //   const routineToRemove
  // }
  async getRoutines() {
    const routines = await dbContext.Routines.find()
    return routines
  }
  async createRoutine(routineData) {
    const routine = await dbContext.Routines.create(routineData)
    return routine
  }

}

export const routinesService = new RoutinesService()