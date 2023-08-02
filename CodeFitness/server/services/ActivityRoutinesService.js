import { dbContext } from "../db/DbContext.js"

class ActivityRoutinesService {
  async getActivityRoutines() {
    const activityRoutines = await dbContext.ActivityRoutines.find()
    return activityRoutines
  }

  async createActivityRoutines(activityData) {
    const activityRoutine = await dbContext.ActivityRoutines.create(activityData)
    return activityRoutine
  }
}

export const activityRoutinesService = new ActivityRoutinesService()