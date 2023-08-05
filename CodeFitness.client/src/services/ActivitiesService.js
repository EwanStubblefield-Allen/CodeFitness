import { AppState } from "../AppState.js"
import { Activity } from "../models/Activity.js"
import { activityApi, api } from "./AxiosService.js"
import { picturesService } from "./PicturesService.js"

class ActivitiesService {
  async setActiveActivity(activity) {
    activity.picture = await picturesService.getPictures(activity.name)
    AppState.activeActivity = activity
  }

  async getActivities(template = AppState.template) {
    const query = Object.keys(template).map((k, index) => `${k}=${Object.values(template)[index]}`).join('&')
    const res1 = await activityApi.get(`exercises?offset=${AppState.page}&${query}`)
    const res2 = await activityApi.get(`exercises?offset=${AppState.page + 1}&${query}`)
    const res3 = await activityApi.get(`exercises?offset=${AppState.page + 2}&${query}`)
    let res = res1.data.concat(res2.data)

    if (!res3.data[0] || !res3.data[res3.data.length - 1].instructions) {
      AppState.nextPage = false
      res = res.filter(r => r.instructions)
    } else {
      AppState.nextPage = true
    }

    if (!res[0]) {
      throw new Error('No activities match the criteria!')
    }
    AppState.activities = res.map(d => new Activity(d))
    AppState.template = template
  }

  async setRoutineActivities() {
    let act = AppState.activeRoutine.activities
    AppState.routineActivities = act.map(a => new Activity(a))
  }

  async createActivity(activityData) {
    if (!activityData.picture) {
      activityData.picture = await picturesService.getPictures(activityData.name)
    }

    if (!AppState.activeRoutine) {
      throw new Error(`Please Select a Routine to Add the ${activityData.name} to!`)
    }
    activityData.routineId = AppState.activeRoutine.id
    const res = await api.post('api/activities', activityData)
    AppState.activeRoutine.activities.push(new Activity(res.data))
  }

  async removeActivity(activityId) {
    await api.delete(`api/activities/${activityId}`)
    AppState.activeRoutine.activities = AppState.activeRoutine.activities.filter(a => a.id != activityId)
  }
}

export const activitiesService = new ActivitiesService()