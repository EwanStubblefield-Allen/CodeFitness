import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { activityApi } from "./AxiosService.js"

class ActivitiesService {
  async getActivitiesBySearch(search) {
    const res = await activityApi.get(`exercise/search/?language=2&term=${search}`)
    logger.log(res.data)
    AppState.activities = res.data.suggestions.map(d => d.data)
    logger.log('[ACTIVITIES IN APPSTATE]', AppState.activities)
  }

  async getActivitiesByFilter(editable, adaptable) {
    let template = ''
    adaptable.forEach(a => template += `equipment=${a}&`)
    editable.forEach(e => template += `muscles=${e}&`)
    const res = await activityApi.get(`exercisebaseinfo/?${template}`)
    const activities = res.data.results.map(r => r.exercises[r.exercises.length - 1])
    activities.forEach(a => {
      const isTrue = a.description.includes('<p>')

      if (isTrue) {
        // FIXME Add regex
        a.description = a.description.replaceAll('<p>', '')
        a.description = a.description.replaceAll('</p>', '')
      }
      a.name = a.name.charAt(0).toUpperCase() + a.name.slice(1)
      a.description = a.description.charAt(0).toUpperCase() + a.description.slice(1)
    })
    AppState.activities = activities
  }
}

export const activitiesService = new ActivitiesService()