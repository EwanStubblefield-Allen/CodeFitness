import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { achievementsService } from "./AchievementsService.js"

class AccountAchievementsService {
  async getAccountAchievement() {
    const accountAchievements = await dbContext.AccountAchievements.find().populate('achievement')
    return accountAchievements
  }

  async getAccountAchievementById(accountAchievementId) {
    const accountAchievement = await dbContext.AccountAchievements.findById(accountAchievementId).populate('achievement')
    if (!accountAchievement) {
      throw new BadRequest(`[NO ACCOUNT ACHIEVEMENT MATCHES THE ID: ${accountAchievementId}]`)
    }
    return accountAchievement
  }

  async getAccountAchievementByAccountIdAndAchievementId(accountId, achievementId) {
    const accountAchievement = await dbContext.AccountAchievements.findOne({ accountId: accountId, achievementId: achievementId })
    if (!accountAchievement) {
      throw new BadRequest(`[NO ACCOUNT ACHIEVEMENT MATCHES THE IDS: ${accountId}, ${achievementId}]`)
    }
    return accountAchievement
  }

  async createAccountAchievement(accountId) {
    const accountAchievements = []
    const achievements = await achievementsService.getAchievements()
    for (const a of achievements) {
      const data = {
        accountId: accountId,
        achievementId: a.id
      }
      const accountAchievement = await dbContext.AccountAchievements.create(data)
      await accountAchievement.populate('achievement')
      accountAchievements.push(accountAchievement)
    }
    return accountAchievements
  }

  async updateAccountAchievement(accountId, type, increment) {
    const achievement = await achievementsService.getAchievementByType(type)
    const accountAchievement = await this.getAccountAchievementByAccountIdAndAchievementId(accountId, achievement.id)
    accountAchievement.progress += increment
    if (achievement.requirement.length <= accountAchievement.tier) {
      return accountAchievement
    }
    if (accountAchievement.progress >= achievement.requirement[accountAchievement.tier]) {
      accountAchievement.tier++
    }
    accountAchievement.save()
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