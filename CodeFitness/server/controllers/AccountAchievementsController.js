import { Auth0Provider } from "@bcwdev/auth0provider";
import { accountAchievementsService } from "../services/AccountAchievementsService.js";
import BaseController from "../utils/BaseController.js";

export class AccountAchievementsController extends BaseController {
  constructor() {
    super('api/accountachievements')
    this.router
    .get('', this.getAccountAchievements)

  }

  
  async getAccountAchievements(req, res, next) {
    try {
      const accountAchievement = await accountAchievementsService.getAccountAchievement()
      return res.send(accountAchievement)
    } catch (error) {
      next(error);
    }
  }
}