import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommunitiesService {
  async getCommunitiesPoints() {
    const res = await api.get('api/communities')
    const communities = {}
    res.data.map(d => communities[d._id] = d.totalPoints)
    logger.log(communities)
    AppState.communities = communities
  }
}

export const communitiesService = new CommunitiesService()