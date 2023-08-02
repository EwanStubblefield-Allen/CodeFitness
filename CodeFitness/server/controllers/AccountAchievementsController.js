import { Auth0Provider } from "@bcwdev/auth0provider";
import { accountAchievementsService } from "../services/AccountAchievementsService.js";
import BaseController from "../utils/BaseController.js";

export class AccountAchievementsController extends BaseController {
  constructor() {
    super('api/accountAchievements')
    this.router
      .get('', this.getAccountAchievements)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .delete('/:accountAchievementId', this.deleteAccountAchievement)
  }

  async getAccountAchievements(req, res, next) {
    try {
      const accountAchievement = await accountAchievementsService.getAccountAchievement()
      return res.send(accountAchievement)
    } catch (error) {
      next(error);
    }
  }

  async deleteAccountAchievement(req, res, next) {
    try {
      const accountId = req.userInfo.id
      const accountAchievementId = req.params.accountAchievementId
      const accountAchievement = await accountAchievementsService.deleteAccountAchievement(accountId, accountAchievementId)
      return res.send(accountAchievement)
    } catch (error) {
      next(error)
    }
  }
}