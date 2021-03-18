import { Auth0Provider } from '@bcwdev/auth0provider'
import { draftsService } from '../services/DraftsService'
import BaseController from '../utils/BaseController'

export class DraftController extends BaseController {
  constructor() {
    super('api/drafts')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getOne)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getOne(req, res, next) {
    try {
      const data = { _id: req.params.id, creatorId: req.userInfo.id }
      res.send(await draftsService.get(data))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const data = req.body
      data.creatorId = req.userInfo.id
      res.send(await draftsService.create(data))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      const data = req.body
      data._id = req.params.id
      data.creatorId = req.userInfo.id
      res.send(await draftsService.edit(data))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const data = {}
      data._id = req.params.id
      data.creatorId = req.userInfo.id
      res.send(await draftsService.delete(data))
    } catch (error) {
      next(error)
    }
  }
}
