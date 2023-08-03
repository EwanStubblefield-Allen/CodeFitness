import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class ActivitiesService {
  async getActivities() {
    const activities = await dbContext.Activities.find()
    return activities
  }

  // TODO add get activities by id?

  async getActivitiesByRoutineId(routineId) {
    const activities = await dbContext.Activities.find({ routineId: routineId })
    if (!activities[0]) {
      throw new BadRequest(`[NO ACTIVITIES MATCH THE ROUTINE ID: ${routineId}]`)
    }
    return activities
  }

  async createActivities(activityData) {
    const activityRoutine = await dbContext.Activities.create(activityData)
    return activityRoutine
  }
}

export const activitiesService = new ActivitiesService()