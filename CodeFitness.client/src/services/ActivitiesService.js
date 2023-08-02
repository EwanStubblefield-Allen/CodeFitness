import { AppState } from "../AppState.js"
import { Activity } from "../models/Activity.js"
import { logger } from "../utils/Logger.js"
import { activityApi } from "./AxiosService.js"

class ActivitiesService {
  async getActivities(search, editable = '', adaptable = '', difficulty = '') {
    let template = AppState.template
    search ? template += `name=${search}&` : ''
    editable ? template += `muscle=${editable}&` : ''
    adaptable ? template += `type=${adaptable}&` : ''
    difficulty ? template += `difficulty=${difficulty}` : ''
    AppState.template = template
    const res = await activityApi.get(`exercises?offset=2&${template}`)
    logger.log(res.data)
    AppState.activities = res.data.map(d => new Activity(d))
  }
}

export const activitiesService = new ActivitiesService()