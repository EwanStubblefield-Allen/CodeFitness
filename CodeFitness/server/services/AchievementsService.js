import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors.js"

class AchievementsService {
  async getAchievements() {
    const achievements = await dbContext.Achievements.find().populate('tiers')
    return achievements
  }

  async getAchievementsById(achievementId) {
    const achievement = await dbContext.Achievements.findById(achievementId).populate('tiers')
    if (!achievement) {
      throw new BadRequest(`[NO ACHIEVEMENT MATCHES THE ID: ${achievementId}]`)
    }
    return achievement
  }

  async getAchievementByType(type) {
    const achievement = await dbContext.Achievements.findOne({ type: type })
    if (!achievement) {
      throw new BadRequest(`[NO ACHIEVEMENT MATCHES THE TYPE: ${type}]`)
    }
    return achievement
  }

  async createAchievement(achievementData) {
    const achievement = await dbContext.Achievements.create(achievementData)
    return achievement
  }

  async removeAchievement(achievementId) {
    const achievementToRemove = await this.getAchievementsById(achievementId)
    await achievementToRemove.remove()
    return achievementToRemove
  }
}

export const achievementsService = new AchievementsService()