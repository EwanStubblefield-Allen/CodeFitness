import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { Achievement } from '../models/Achievement.js'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop.js'
import { accountAchievementService } from './AccountAchievementService.js'
import { api } from './AxiosService'

class AccountService {
  async selectCommunity(community) {
    AppState.account.community = community
    const updatedAccount = new Account(AppState.account)
    logger.log('updated account', updatedAccount)
  }

  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async updateAccount(formData) {
    debugger
    const res = await api.put('/account', formData)

    if (!AppState.activeAchievements[0]) {
      await accountAchievementService.getAchievementsByUserId()
    } else {
      const foundIndex = AppState.activeAchievements.findIndex(a => a.type == 'pointCount')

      if (foundIndex == -1) {
        throw new Error('[NO ACHIEVEMENT FOUND]')
      }

      if (AppState.activeAchievements[foundIndex].tier != res.data.accountAchievement.tier) {
        AppState.activeAchievements.splice(foundIndex, new Achievement(res.data.accountAchievement))
        Pop.success(`You have unlocked a new achievement`)
      }
    }
    AppState.account = new Account(res.data.account)
  }
}

export const accountService = new AccountService()