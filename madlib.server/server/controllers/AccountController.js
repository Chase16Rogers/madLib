import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { draftsService } from '../services/DraftsService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/:id/drafts', this.getDrafts)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getDrafts(req, res, next) {
    try {
      const query = {}
      query.creatorId = req.userInfo.id
      res.send(await draftsService.get(query))
    } catch (error) {
      next(error)
    }
  }
}
