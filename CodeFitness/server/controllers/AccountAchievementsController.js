import { Auth0Provider } from "@bcwdev/auth0provider";
import { accountAchievementsService } from "../services/AccountAchievementsService.js";
import BaseController from "../utils/BaseController.js";

export class AccountAchievementsController extends BaseController {
  constructor() {
    super('api/accountAchievements')
    this.router
      .get('', this.getAccountAchievements)
      .get('/:accountAchievementId', this.getAccountAchievementById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:achievementId', this.getAccountAchievementByAccountIdAndAchievementId)
      .delete('/:accountAchievementId', this.deleteAccountAchievement)
  }

  async getAccountAchievements(req, res, next) {
    try {
      const accountAchievements = await accountAchievementsService.getAccountAchievement()
      return res.send(accountAchievements)
    } catch (error) {
      next(error)
    }
  }

  async getAccountAchievementById(req, res, next) {
    try {
      const accountAchievement = await accountAchievementsService.getAccountAchievementById(req.params.accountAchievementId)
      return res.send(accountAchievement)
    } catch (error) {
      next(error)
    }
  }

  async getAccountAchievementByAccountIdAndAchievementId(req, res, next) {
    try {
      const accountId = req.userInfo.id
      const achievementId = req.params.achievementId
      const accountAchievements = await accountAchievementsService.getAccountAchievementByAccountIdAndAchievementId(accountId, achievementId)
      return res.send(accountAchievements)
    } catch (error) {
      next(error)
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