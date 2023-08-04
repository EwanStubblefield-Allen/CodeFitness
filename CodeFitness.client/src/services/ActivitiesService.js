import { AppState } from "../AppState.js"
import { Activity } from "../models/Activity.js"
import { logger } from "../utils/Logger.js"
import { activityApi, api } from "./AxiosService.js"
import { picturesService } from "./PicturesService.js"

class ActivitiesService {

  async deleteActivity(activityId) {
    const res = await api.delete(`api/activities/${activityId}`)
    logger.log('[REMOVING ACTIVITY]', res.data)

    const activityIndex = AppState.activities.findIndex(r => r.id == activityId)

    AppState.activities.splice(activityIndex, 1)
  }

  resetTemplate() {
    AppState.template = {}
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

  async setActiveActivity(activity) {
    activity.picture = await picturesService.getPictures(activity.name)
    AppState.activeActivity = activity
  }
  async setRoutineActivities() {
    let act = AppState.activeRoutine.activities
    logger.log('active routine activities', act)
    AppState.routineActivities = act.map(a => new Activity(a))
    logger.log('appstate activities', AppState.routineActivities)
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
    logger.log(res.data)
    AppState.activeRoutine.activities.push(new Activity(res.data))
  }
}

export const activitiesService = new ActivitiesService()