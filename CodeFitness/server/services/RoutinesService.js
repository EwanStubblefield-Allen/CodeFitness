import { dbContext } from "../db/DbContext.js"

class RoutinesService {
  async createRoutine(routineData) {
    const routine = await dbContext.Routines.create(routineData)
    return routine
  }

}

export const routinesService = new RoutinesService()