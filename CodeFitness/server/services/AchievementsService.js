import { dbContext } from "../db/DbContext"

class AchievementsService {
  async getAchievements() {
    const achievements = await dbContext.Achievements.find()
    return achievements
  }

  async getAchievementsById(achievementId) {
    const foundAchievement = await dbContext.Achievements.findById(achievementId)
    return foundAchievement
  }

  async createAchievement(achievementData) {
    const achievement = await dbContext.Achievements.create(achievementData)
    return achievement
  }

  async removeAchievement(achievementId) {
    const achievementToRemove = await dbContext.Achievements.findById(achievementId)
    // FIXME add go to get by id and do check
    await achievementToRemove.remove()
    return achievementToRemove
  }
}
export const achievementsService = new AchievementsService()