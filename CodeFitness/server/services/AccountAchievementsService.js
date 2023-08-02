import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class AccountAchievementsService {
  async deleteAccountAchievement(accountId, accountachievementId) {
    const achievmentToRemove = await dbContext.AccountAchievements.findById(accountachievementId)
    if (achievmentToRemove.accountId.toString() != accountId) {
      throw new Forbidden('You are not the creator.')
      await achievmentToRemove.remove()
      return achievmentToRemove
    }
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