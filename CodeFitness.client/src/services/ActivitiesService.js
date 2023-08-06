import { AppState } from "../AppState.js"
import { Activity } from "../models/Activity.js"
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
    const res1 = await activityApi.get(`exercises?offset=${AppState.page}&${template}`)
    const res2 = await activityApi.get(`exercises?offset=${AppState.page + 10}&${template}`)
    const res3 = await activityApi.get(`exercises?offset=${AppState.page + 20}&${template}`)
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

  async setRoutineActivities() {
    let act = AppState.activeRoutine?.activities
    // logger.log('active routine activities', act)
    AppState.routineActivities = act?.map(a => new Activity(a))

    // logger.log('appstate activities', AppState.routineActivities)
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