import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class AccountAchievementsService {
  async deleteAccountAchievement(accountId, accountAchievementId) {
    const achievementToRemove = await dbContext.AccountAchievements.findById(accountAchievementId)
    if (achievementToRemove.accountId.toString() != accountId) {
      throw new Forbidden('You are not the creator.')
    }
      await achievementToRemove.remove()
      return achievementToRemove
  }
  async getAccountAchievement() {
    const gotAchievements = await dbContext.AccountAchievements.find()
    return gotAchievements
  }
  async createAccountAchievement(data) {
    const newAchievement = await dbContext.AccountAchievements.create(data)
    return newAchievement
  }

}

export const accountAchievementsService = new AccountAchievementsService()