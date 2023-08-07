import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class AccountAchievementService {
  async getAchievementsByUserId() {
    const res = await api.get(`api/profiles/${AppState.account.id}/accountAchievements`)
    logger.log('[Achievements for user]', res.data)
  }
}

export const accountAchievementService = new AccountAchievementService()