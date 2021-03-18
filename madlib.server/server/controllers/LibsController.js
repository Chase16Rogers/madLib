import { Auth0Provider } from '@bcwdev/auth0provider'
import { libsService } from '../services/LibsService'
import BaseController from '../utils/BaseController'

export class LibsController extends BaseController {
  constructor() {
    super('api/libs')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      res.send(await libsService.get())
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const query = { _id: req.params.id }
      res.send(await libsService.get(query))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const data = req.body
      data.creatorId = req.userInfo.id
      res.send(await libsService.create(data))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      const data = req.body
      data._id = req.params.id
      data.creatorId = req.userInfo.id
      res.send(await libsService.edit(data))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const data = {}
      data._id = req.params.id
      data.creatorId = req.userInfo.id
      res.send(await libsService.delete(data))
    } catch (error) {
      next(error)
    }
  }
}
