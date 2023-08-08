import { AppState } from "../AppState.js"
import { Achievement } from "../models/Achievement.js"
import { api } from "./AxiosService.js"
import Pop from "../utils/Pop.js"

class AccountAchievementService {
  checkAchievement(accountAchievement, type) {
    const foundIndex = AppState.activeAchievements.findIndex(a => a.type == type)

    if (foundIndex == -1) {
      throw new Error('[NO ACHIEVEMENT FOUND]')
    }

    if (AppState.activeAchievements[foundIndex].tier != accountAchievement.tier) {
      AppState.activeAchievements.splice(foundIndex, 1, new Achievement(accountAchievement))
      Pop.success(`You have unlocked a new achievement`)
    }
  }

  async getAchievementsByUserId() {
    const res = await api.get(`api/profiles/${AppState.account.id}/accountAchievements`)
    AppState.activeAchievements = res.data.map(a => new Achievement(a))
  }
}

export const accountAchievementService = new AccountAchievementService()