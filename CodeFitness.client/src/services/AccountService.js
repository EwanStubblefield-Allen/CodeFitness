import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import { accountAchievementService } from './AccountAchievementService.js'
import { api } from './AxiosService'
import Pop from '../utils/Pop.js'

class AccountService {

  async selectCommunity(community) {
    AppState.account.community = community
    Pop.success(`You have chosen the ${community}`)
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
    const res = await api.put('/account', formData)

    if (!AppState.activeAchievements[0]) {
      await accountAchievementService.getAchievementsByUserId()
    } else if (res.data.accountAchievement) {
      accountAchievementService.checkAchievement(res.data.accountAchievement, 'pointCount')
    }
    AppState.account = new Account(res.data.account)
  }
  async updateBadPicture() {
    const array = AppState.randomImgForProfile
    const randomPicture = array[Math.floor(Math.random() * array.length)]
    AppState.account.picture = randomPicture
    await api.put('/account', AppState.account)
  }
  async editAccount(body) {
    try {
      const res = await api.put('/account', body)
      AppState.account = new Account(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const accountService = new AccountService()