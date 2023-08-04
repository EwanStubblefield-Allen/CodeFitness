import { communitiesService } from "../services/CommunitiesService.js";
import BaseController from "../utils/BaseController.js";

export class CommunitiesController extends BaseController {
  constructor() {
    super('api/communities')
    this.router
      .get('', this.getCommunities)
  }

  async getCommunities(req, res, next) {
    try {
      const communities = await communitiesService.getCommunities()
      return res.send(communities)
    } catch (error) {
      next(error)
    }
  }
}