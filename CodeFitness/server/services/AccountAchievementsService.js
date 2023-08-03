import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { achievementsService } from "./AchievementsService.js"

class AccountAchievementsService {

  async getAccountAchievement() {
    const accountAchievements = await dbContext.AccountAchievements.find().populate('profile').populate('achievement')
    return accountAchievements
  }

  async getAccountAchievementById(accountAchievementId) {
    const accountAchievement = await dbContext.AccountAchievements.findById(accountAchievementId).populate('profile').populate('achievement')
    if (!accountAchievement) {
      throw new BadRequest(`[NO ACCOUNT ACHIEVEMENT MATCHES THE ID: ${accountAchievementId}]`)
    }
    return accountAchievement
  }

  async createAccountAchievement(accountAchievementData) {
    const accountAchievement = await dbContext.AccountAchievements.create(accountAchievementData)
    await accountAchievement.populate('profile')
    await accountAchievement.populate('achievement')
    return accountAchievement
  }
  async updateAccountAchievement(accountId, type) {
    const achievement = await achievementsService.getAchievmentByType(type)
    const accountAchievement = await dbContext.AccountAchievements.find({ accountId: accountId, achievementId: achievement.id })
  }

  async deleteAccountAchievement(accountId, accountAchievementId) {
    const achievementToRemove = await this.getAccountAchievementById(accountAchievementId)
    if (achievementToRemove.accountId.toString() != accountId) {
      throw new Forbidden('[YOU ARE NOT THE CREATOR OF THIS]')
    }
    await achievementToRemove.remove()
    return achievementToRemove
  }

}

export const accountAchievementsService = new AccountAchievementsService()