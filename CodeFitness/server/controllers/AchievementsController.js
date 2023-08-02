import { Auth0Provider } from "@bcwdev/auth0provider";
import { achievementsService } from "../services/AchievementsService";
import { accountAchievementsService } from "../services/AccountAchievementsService";
import BaseController from "../utils/BaseController";

export class AchievementsController extends BaseController {
  constructor() {
    super('api/achievements')
    this.router
      .get('', this.getAchievements)
      .get('/:achievementId', this.getAchievementById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createAchievement)
      .delete('/:achievementId', this.removeAchievement)
      .post('/:achievementId/accountAchievements', this.createAccountAchievement)
  }

  async getAchievements(req, res, next) {
    try {
      const achievements = await achievementsService.getAchievements()
      return res.send(achievements)
    } catch (error) {
      next(error);
    }
  }

  async getAchievementById(req, res, next) {
    try {
      const achievementId = req.params.achievementId
      const achievement = await achievementsService.getAchievementsById(achievementId)
      return res.send(achievement)
    } catch (error) {
      next(error);
    }
  }

  async createAchievement(req, res, next) {
    try {
      const achievementData = req.body
      achievementData.accountId = req.userInfo.id
      achievementData.achievementId = req.params.achievementId
      const achievement = await achievementsService.createAchievement(achievementData)
      return res.send(achievement)
    } catch (error) {
      next(error);
    }
  }

  async removeAchievement(req, res, next) {
    try {
      const achievementId = req.params.achievementId
      const achievement = await achievementsService.removeAchievement(achievementId)
      return res.send(achievement)
    } catch (error) {
      next(error);
    }
  }

  async createAccountAchievement(req, res, next) {
    try {
      const data = req.body
      data.achievementId = req.params.achievementId
      data.accountId = req.userInfo.id
      const newAccountAchievement = await accountAchievementsService.createAccountAchievement(data)
      return res.send(newAccountAchievement)
    } catch (error) {
      next(error);
    }
  }
}