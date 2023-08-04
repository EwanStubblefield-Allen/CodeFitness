import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class ActivitiesService {
  async getActivities() {
    const activities = await dbContext.Activities.find()
    return activities
  }

  // TODO add get activities by id?
  async getActivityById(activityId) {
    const activity = await dbContext.Activities.findById(activityId)
    if (!activity) {
      throw new BadRequest(`[NO ACTIVITIES MATCH THE ACTIVITY ID: ${activityId}]`)
    }
    return activity
  }

  async getActivitiesByRoutineId(routineId) {
    const activities = await dbContext.Activities.find({ routineId: routineId })
    if (!activities[0]) {
      throw new BadRequest(`[NO ACTIVITIES MATCH THE ROUTINE ID: ${routineId}]`)
    }
    return activities
  }

  async createActivities(activityData) {
    switch (activityData.type) {
      case "Plyometrics":
        activityData.reps = 10
        break;
      case "Strongman":
      case "Powerlifting":
      case "Cardio":
        activityData.reps = 3
        break;
      case "Stretching":
        activityData.reps = 20
        break;

      default:
        activityData.reps = 5
        break;
    }

    const activityRoutine = await dbContext.Activities.create(activityData)
    return activityRoutine
  }

  async removeActivity(activityData) {
    const activityToRemove = await this.getActivityById(activityData.id)
    if (activityToRemove.accountId != activityData.accountId) {
      throw new Forbidden(`[YOU CAN NOT REMOVE SOMEONE ELSES ACTIVITY]`)
    }
    await activityToRemove.remove()
    return activityToRemove
  }
}



export const activitiesService = new ActivitiesService()