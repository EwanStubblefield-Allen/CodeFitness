import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
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
  async updateAccountPoints(formData) {
    AppState.account.points += formData
    const res = await api.put('/account', {points: AppState.account.points})
    AppState.account = new Account(res.data.account)
  }

  async updateAccount(formData) {
    const res = await api.put('/account', formData)
    AppState.account = new Account(res.data.account)
  }
}

export const accountService = new AccountService()