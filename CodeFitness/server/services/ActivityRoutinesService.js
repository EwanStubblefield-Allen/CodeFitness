import { dbContext } from "../db/DbContext.js"

class ActivityRoutinesService {
  async createActivityRoutines(activityData) {
    const newActivityRoutine = await dbContext.ActivityRoutines.create(activityData)
    return newActivityRoutine
  }
  async getActivityRoutines() {
    const activityRoutines = await dbContext.ActivityRoutines.find()
    return activityRoutines
  }



}

export const activityRoutinesService = new ActivityRoutinesService()