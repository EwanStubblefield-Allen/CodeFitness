import { dbContext } from "../db/DbContext.js"

class AccountAchievementsService {
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