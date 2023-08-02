import { AppState } from "../AppState.js"
import { activityApi } from "./AxiosService.js"

class ActivitiesService {
  async getActivitiesBySearch(search) {
    const res = await activityApi.get(`exercise/search/?language=2&term=${search}`)
    const activities = res.data.suggestions.map(d => d.data)
    activities.forEach(a => a.name = a.name.charAt(0).toUpperCase() + a.name.slice(1))
    AppState.activities = activities
  }

  async getActivitiesByFilter(editable, adaptable) {
    let template = ''
    adaptable.forEach(a => template += `equipment=${a}&`)
    editable.forEach(e => template += `muscles=${e}&`)
    const res = await activityApi.get(`exercisebaseinfo/?${template}`)

    if (!res.data.results[0]) {
      throw new Error('There are no activities that match your criteria.')
    }
    const activities = res.data.results.map(r => r.exercises[r.exercises.length - 1])
    activities.forEach(a => {
      const isTrue = a.description.includes('<p>')

      if (isTrue) {
        const regex = /<\/?.>/g
        a.description = a.description.replaceAll(regex, '')
      }
      a.name = a.name.charAt(0).toUpperCase() + a.name.slice(1)
      a.description = a.description.charAt(0).toUpperCase() + a.description.slice(1)
    })
    AppState.activities = activities
  }
}

export const activitiesService = new ActivitiesService()