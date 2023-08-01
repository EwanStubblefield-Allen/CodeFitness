import { dbContext } from "../db/DbContext"

class AchievementsService{
  async removeAchievement(achievementId) {
    const achievementToRemove = await dbContext.Achievements.findById(achievementId)


    await achievementToRemove.remove()
  return achievementToRemove
  }
  async getAchievementsById(achievementId) {
    const foundAchievement = await dbContext.Achievements.findById(achievementId)
    return foundAchievement
  }
  async getAchievements() {
    const achievements = await dbContext.Achievements.find()
    return achievements
  }
  async createAchievement(achievementData) {
    const newAchievement = await dbContext.Achievements.create(achievementData)
    return newAchievement
  }

}
export const achievementsService = new AchievementsService()