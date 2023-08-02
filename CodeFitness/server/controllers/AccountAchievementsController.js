import { Auth0Provider } from "@bcwdev/auth0provider";
import { accountAchievementsService } from "../services/AccountAchievementsService.js";
import BaseController from "../utils/BaseController.js";

export class AccountAchievementsController extends BaseController {
  constructor() {
    super('api/accountachievements')
    this.router
    .get('', this.getAccountAchievements)
    .delete('/:accountachievementId', this.deleteAccountAchievement)

  }

  
  async getAccountAchievements(req, res, next) {
    try {
      const accountAchievement = await accountAchievementsService.getAccountAchievements()
      return res.send(accountAchievement)
    } catch (error) {
      next(error);
    }
  }

  async deleteAccountAchievement(req, res, next) {
    try {
      const accountId = req.userInfo.id 
      const accountachievementId = req.params.accountachievementId
      const accountAchievement = await accountAchievementsService.deleteAccountAchievement(accountId, accountachievementId)
    } catch (error) {
      next(error)
    }
  }
}