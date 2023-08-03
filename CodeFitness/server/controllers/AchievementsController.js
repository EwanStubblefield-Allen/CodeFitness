import { Auth0Provider } from "@bcwdev/auth0provider";
import { achievementsService } from "../services/AchievementsService";
import { tiersService } from "../services/TiersService.js";
import BaseController from "../utils/BaseController";

export class AchievementsController extends BaseController {
  constructor() {
    super('api/achievements')
    this.router
      .get('', this.getAchievements)
      .get('/:achievementId', this.getAchievementById)
      .get('/:achievementId/tiers', this.getTiersByAchievementId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createAchievement)
      .delete('/:achievementId', this.removeAchievement)
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

  async getTiersByAchievementId(req, res, next) {
    try {
      const tiers = await tiersService.getTiersByAchievementId(req.params.achievementId)
      return res.send(tiers)
    } catch (error) {
      next(error)
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
}