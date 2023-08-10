import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommunitiesService {
  async getCommunitiesPoints() {
    const res = await api.get('api/communities')
    const communities = {}
    res.data.map(d => communities[d._id] = d.totalPoints)
    AppState.communities = communities
  }

  async getCommunityProfiles(communityId) {
    const res = await api.get(`api/communities/${communityId}/profiles`)
    logger.log(res.data)
    const newProfiles = res.data.map(p => new Profile(p))
    AppState.communityProfiles = newProfiles
    logger.log(AppState.communityProfiles)
  }
}

export const communitiesService = new CommunitiesService()