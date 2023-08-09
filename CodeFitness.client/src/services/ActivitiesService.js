import { AppState } from "../AppState.js"
import { Activity } from "../models/Activity.js"
import { accountAchievementService } from "./AccountAchievementService.js"
import { activityApi, api } from "./AxiosService.js"
import { picturesService } from "./PicturesService.js"

class ActivitiesService {
  async setActiveActivity(activity) {
    if (!activity.picture) {
      activity.picture = await picturesService.getPictures(activity.name)
    }
    AppState.activeActivity = activity
  }

  async getActivities(template = AppState.template) {
    const page = AppState.page

    const res1 = await activityApi.get(`exercises?offset=${page}&${template}`)
    const res2 = await activityApi.get(`exercises?offset=${page + 10}&${template}`)
    const res3 = await activityApi.get(`exercises?offset=${page + 20}&${template}`)
    let res = res1.data.concat(res2.data)

    if (!res3.data[0] || !res3.data[res3.data.length - 1].instructions) {
      AppState.nextPage = false
      res = res.filter((r, index) => {
        let match = false

        for (let i = index + 1; i < res.length; i++) {
          if (r.instructions == res[i].instructions) {
            match = true
            return
          }
        }

        if (r.instructions && !match) {
          return r
        }
      })
    } else {
      AppState.nextPage = true
    }

    if (!res[0]) {
      throw new Error('No activities match the criteria!')
    }
    AppState.activities = res.map(d => new Activity(d))
    AppState.template = template
  }

  async createActivity(activityData) {
    const activeRoutine = AppState.activeRoutine

    if (!activityData.picture) {
      activityData.picture = await picturesService.getPictures(activityData.name)
    }

    if (!activeRoutine) {
      throw new Error(`Please Select a Routine to Add the ${activityData.name} to!`)
    }
    activityData.routineId = activeRoutine.id
    const res = await api.post('api/activities', activityData)
    const activity = new Activity(res.data)
    activeRoutine.activities.push(activity)
    const foundIndex = AppState.routines.findIndex(r => r.id == activeRoutine.id)
    AppState.routines[foundIndex].activities.push(activity)
  }

  async updateActivity(activity) {
    const activeRoutine = AppState.activeRoutine
    const res = await api.put(`api/activities/${activity.id}`, activity)

    if (res.data.accountAchievement) {
      accountAchievementService.checkAchievement(res.data.accountAchievement, 'levelCount')
    }
    const foundIndex = activeRoutine.activities.findIndex(a => a.id == activity.id)
    activeRoutine.activities.splice(foundIndex, 1, new Activity(res.data.activity))
  }

  async removeActivity(activityId) {
    const activeRoutine = AppState.activeRoutine
    await api.delete(`api/activities/${activityId}`)
    activeRoutine.activities = activeRoutine.activities.filter(a => a.id != activityId)
    const foundIndex = AppState.routines.findIndex(r => r.id == activeRoutine.id)
    const foundRoutine = AppState.routines[foundIndex]
    foundRoutine.activities = foundRoutine.activities.filter(a => a.id != activityId)
  }
}

export const activitiesService = new ActivitiesService()