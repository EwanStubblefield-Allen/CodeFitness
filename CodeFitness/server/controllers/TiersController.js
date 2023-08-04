import { Auth0Provider } from "@bcwdev/auth0provider";
import { tiersService } from "../services/TiersService.js";
import BaseController from "../utils/BaseController.js";

export class TiersController extends BaseController {
  constructor() {
    super('api/tiers')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTier)
  }

  async createTier(req, res, next) {
    try {
      const tier = await tiersService.createTier(req.body)
      return res.send(tier)
    } catch (error) {
      next(error)
    }
  }
}