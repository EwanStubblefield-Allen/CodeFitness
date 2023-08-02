import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class AccountAchievementsService {
  async getAccountAchievement() {
    const gotAchievements = await dbContext.AccountAchievements.find()
    return gotAchievements
  }

  async createAccountAchievement(data) {
    const newAchievement = await dbContext.AccountAchievements.create(data)
    return newAchievement
  }

  async deleteAccountAchievement(accountId, accountAchievementId) {
    const achievementToRemove = await dbContext.AccountAchievements.findById(accountAchievementId)
    if (achievementToRemove.accountId.toString() != accountId) {
      throw new Forbidden('[YOU ARE NOT THE CREATOR OF THIS]')
    }
    await achievementToRemove.remove()
    return achievementToRemove
  }
}

export const accountAchievementsService = new AccountAchievementsService()