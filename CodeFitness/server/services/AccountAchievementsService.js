import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class AccountAchievementsService {
  async getAccountAchievement() {
    const accountAchievements = await dbContext.AccountAchievements.find()
    return accountAchievements
  }

  async getAccountAchievementById(accountAchievementId) {
    const accountAchievement = await dbContext.AccountAchievements.findById(accountAchievementId)
    if (!accountAchievement) {
      throw new BadRequest(`[NO ACCOUNT ACHIEVEMENT MATCHES THE ID: ${accountAchievementId}]`)
    }
    return accountAchievement
  }

  async createAccountAchievement(accountAchievementData) {
    const accountAchievement = await dbContext.AccountAchievements.create(accountAchievementData)
    return accountAchievement
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