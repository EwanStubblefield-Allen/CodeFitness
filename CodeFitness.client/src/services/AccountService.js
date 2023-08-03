import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async selectCommunityOne() {
    const newAccount = AppState.account
    newAccount.community = 'Cardio Kings'
    const updatedAccount = new Account(newAccount)
    logger.log('updated account', updatedAccount)
  }
  async selectCommunityTwo() {
    const newAccount = AppState.account
    newAccount.community = 'Weight Warriors'
    const updatedAccount = new Account(newAccount)
    logger.log('updated account', updatedAccount)
  }

  async selectCommunityThree() {
    const newAccount = AppState.account
    newAccount.community = 'Legion of Leisure'
    const updatedAccount = new Account(newAccount)
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
  async editAccount(formData) {
    const res = await api.put('/account', formData)
    // logger.log('account edited', res.data)
    let updatedAccount = new Account(res.data)
    AppState.account = updatedAccount
  }
}

export const accountService = new AccountService()