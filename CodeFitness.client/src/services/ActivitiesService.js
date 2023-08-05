import { AppState } from "../AppState.js"
import { Activity } from "../models/Activity.js"
import { activityApi, api } from "./AxiosService.js"
import { picturesService } from "./PicturesService.js"

class ActivitiesService {
  resetTemplate() {
    AppState.template = {}
  }

  async setActiveActivity(activity) {
    activity.picture = await picturesService.getPictures(activity.name)
    AppState.activeActivity = activity
  }

  async getActivities(search, editable = '', adaptable = '', difficulty = '', page = 1) {
    let template = AppState.template
    search ? template.name = search : ''
    editable ? template.muscle = editable : ''
    adaptable ? template.type = adaptable : ''
    difficulty ? template.difficulty = difficulty : ''
    const query = Object.keys(template).map((k, index) => `${k}=${Object.values(template)[index]}`).join('&')
    const res = await activityApi.get(`exercises?offset=${page}&${query}`)

    if (!res.data[0]) {
      throw new Error('No activities match the criteria!')
    }
    AppState.activities = res.data.map(d => new Activity(d))
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