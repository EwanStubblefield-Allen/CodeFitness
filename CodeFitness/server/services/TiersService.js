import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class TiersService {
  async getTiersByAchievementId(achievementId) {
    const tiers = await dbContext.Tiers.find({ achievementId: achievementId })
    if (!tiers) {
      throw new BadRequest(`[NO TIERS MATCHES THE ACHIEVEMENT ID: ${achievementId}]`)
    }
    return tiers
  }

  async createTier(tierData) {
    const tier = await dbContext.Tiers.create(tierData)
    return tier
  }
}

export const tiersService = new TiersService()