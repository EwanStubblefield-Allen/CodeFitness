import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { activityApi } from "./AxiosService.js"

class ActivitiesService {
  async getActivitiesBySearch(search) {
    const res = await activityApi.get(`exercise/search/?language=2&term=${search}`)
    logger.log(res.data)
    AppState.activities = res.data.suggestions
  }
}

export const activitiesService = new ActivitiesService()