import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
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
    AppState.communityProfiles = res.data.map(p => new Profile(p))
  }

  async getCommunityRoutinesByCommunity(communityId) {
    const res = await api.get(`api/communities/${communityId}/routines`)
    res.data.map(d => d.id = d._id)
    AppState.communityRoutines = res.data
  }
}

export const communitiesService = new CommunitiesService()