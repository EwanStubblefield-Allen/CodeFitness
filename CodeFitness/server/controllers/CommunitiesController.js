import { communitiesService } from "../services/CommunitiesService.js";
import { communityRoutinesService } from "../services/CommunityRoutinesService.js";
import { profileService } from "../services/ProfileService.js";
import BaseController from "../utils/BaseController.js";

export class CommunitiesController extends BaseController {
  constructor() {
    super('api/communities')
    this.router
      .get('', this.getCommunities)
      .get('/:communityId/profiles', this.getProfilesByCommunityId)
      .get('/:communityId/routines', this.getCommunityRoutinesByCommunity)
  }

  async getCommunities(req, res, next) {
    try {
      const communities = await communitiesService.getCommunities()
      return res.send(communities)
    } catch (error) {
      next(error)
    }
  }

  async getProfilesByCommunityId(req, res, next) {
    try {
      const profiles = await profileService.getProfilesByCommunityId(req.params.communityId)
      return res.send(profiles)
    } catch (error) {
      next(error)
    }
  }

  async getCommunityRoutinesByCommunity(req, res, next) {
    try {
      const communityRoutines = await communityRoutinesService.getCommunityRoutinesByCommunity(req.params.communityId)
      return res.send(communityRoutines)
    } catch (error) {
      next(error)
    }
  }
}