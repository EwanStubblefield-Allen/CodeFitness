import { AppState } from "../AppState.js"
import { Activity } from "../models/Activity.js"
import { logger } from "../utils/Logger.js"
import { activityApi } from "./AxiosService.js"

class ActivitiesService {
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
}

export const activitiesService = new ActivitiesService()