import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { accountAchievementsService } from '../services/AccountAchievementsService.js'
import { BadRequest } from '../utils/Errors.js'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .put('', this.updateAccount)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      return res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async updateAccount(req, res, next) {
    try {
      const accountData = req.body
      const accountInfo = req.userInfo
      if (accountData.community && accountInfo.community) {
        throw new BadRequest('[YOU CANNOT EDIT YOUR COMMUNITY]')
      }
      const account = await accountService.updateAccount(accountInfo, accountData)
      if (accountData.community) {
        await accountAchievementsService.createAccountAchievement(accountInfo.id)
      }
      return res.send(account)
    } catch (error) {
      next(error);
    }
  }
}