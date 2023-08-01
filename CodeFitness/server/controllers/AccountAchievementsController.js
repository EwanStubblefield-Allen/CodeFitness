import { Auth0Provider } from "@bcwdev/auth0provider";
import { accountAchievementsService } from "../services/AccountAchievementsService.js";
import BaseController from "../utils/BaseController.js";

export class AccountAchievementsController extends BaseController {
  constructor() {
    super('api/accountachievements')
    this.router
      .get('', this.getAccountAchievements)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createAccountAchievement)
  }
  async getAccountAchievements(req, res, next) {
    try {
      const accountAchievement = await accountAchievementsService.getAccountAchievement()
      return res.send(accountAchievement)
    } catch (error) {
      next(error);
    }
  }
  async createAccountAchievement(req, res, next) {
    try {
      const data = req.body
      data.accountId = req.userInfo.id
      const newAccountAchievement = await accountAchievementsService.createAccountAchievement(data)
      return res.send(newAccountAchievement)
    } catch (error) {
      next(error);
    }
  }
}