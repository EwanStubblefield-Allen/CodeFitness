import { communitiesService } from "../services/CommunitiesService.js";
import { profileService } from "../services/ProfileService.js";
import BaseController from "../utils/BaseController.js";

export class CommunitiesController extends BaseController {
  constructor() {
    super('api/communities')
    this.router
      .get('', this.getCommunities)
      .get('/:communityId/profiles', this.getProfilesByCommunityId)
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
}