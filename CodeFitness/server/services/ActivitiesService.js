import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { accountAchievementsService } from "./AccountAchievementsService.js"

class ActivitiesService {
  async getActivities() {
    return await dbContext.Activities.find()
  }

  async getActivityById(activityId) {
    const activity = await dbContext.Activities.findById(activityId)
    if (!activity) {
      throw new BadRequest(`[NO ACTIVITIES MATCH THE ACTIVITY ID: ${activityId}]`)
    }
    return activity
  }

  async getActivitiesByAccountId(accountId) {
    return await dbContext.Activities.find({ accountId: accountId })
  }

  async getActivitiesByRoutineId(routineId) {
    return await dbContext.Activities.find({ routineId: routineId })
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
    return await dbContext.Activities.create(activityData)
  }

  async createActivitiesByCopyRoutineId(routineId, copyRoutine) {
    const activities = await this.getActivitiesByRoutineId(routineId)
    const newActivities = activities.map(a => {
      const x = a.toObject()
      delete x._id
      x.routineId = copyRoutine.id
      x.accountId = copyRoutine.accountId
      x.level = 0
      x.sets = 1
      return x
    })
    await dbContext.Activities.insertMany(newActivities)
  }

  async updateActivity(activityData) {
    const updateActivity = await this.getData(activityData)
    let accountAchievement
    if (activityData.level != updateActivity.level) {
      const activities = await this.getActivitiesByAccountId(activityData.accountId)
      let max = activities[0].level
      for (let i = 1; i < activities.length; i++) {
        if (max < activities[i].level) {
          max = activities[i].level
        }
      }
      if (max < activityData.level) {
        accountAchievement = await accountAchievementsService.updateAccountAchievement(activityData.accountId, 'levelCount', activityData.level - max)
      }
      switch (activityData.type) {
        case "Plyometrics":
          updateActivity.reps += 2
          break;
        case "Strongman":
        case "Powerlifting":
        case "Cardio":
          updateActivity.reps += 1
          break;
        case "Stretching":
          updateActivity.reps += 5
          break;
        default:
          updateActivity.reps += 3
          break;
      }
    }
    updateActivity.level = activityData.level || updateActivity.level
    updateActivity.sets = activityData.sets || updateActivity.sets
    await updateActivity.save()
    return { accountAchievement: accountAchievement, activity: updateActivity }
  }

  async removeActivity(activityData) {
    const activityToRemove = await this.getData(activityData)
    await activityToRemove.remove()
    return activityToRemove
  }

  async removeAllActivitiesByRoutineId(accountId, routineId) {
    const activities = await this.getActivitiesByRoutineId(routineId)
    if (!activities[0]) {
      return
    }
    if (activities[0].accountId != accountId) {
      throw new Forbidden(`[YOU CAN NOT REMOVE SOMEONE ELSES ACTIVITY]`)
    }
    activities.forEach(async a => await a.remove())
  }

  async getData(activityData) {
    const activity = await this.getActivityById(activityData.id)
    if (activity.accountId != activityData.accountId) {
      throw new Forbidden(`[YOU ARE NOT THE CREATOR OF ${activity.name}`)
    }
    return activity
  }
}

export const activitiesService = new ActivitiesService()