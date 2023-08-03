import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async selectCommunityOne() {
    AppState.account.community = 'Cardio Kings'
    logger.log(AppState.account.community)
  }
  async selectCommunityTwo() {
    AppState.account.community = 'Weight Warriors'
    logger.log(AppState.account.community)
  }

  async selectCommunityThree() {
    AppState.account.community = 'Legions of Leisure'
    logger.log(AppState.account.community)
  }
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const accountService = new AccountService()