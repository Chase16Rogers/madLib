import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class LibsService {
  async get(query = {}) {
    const res = await dbContext.Libs.find(query).populate('creator')
    if (!res) {
      throw new BadRequest('Invalid Id')
    }
    return res
  }

  async create(data) {
    const res = await dbContext.Libs.create(data)
    if (!res) {
      throw new BadRequest('Not Enough Data')
    }
    const val = await dbContext.Libs.findById(res._id).populate('creator')
    return val
  }

  async edit(data) {
    const query = { _id: data._id, creatorId: data.creatorId }
    const checker = await dbContext.Libs.find(query)
    if (data.likes > checker.likes) {
      data.likes = checker.likes++
    }
    data.createDate = checker.createDate
    const res = await dbContext.Libs.findOneAndUpdate(query, data, { new: true })
    if (!res) {
      throw new BadRequest('Invalid Id')
    }
    const val = await dbContext.Libs.findById(res._id).populate('creator')
    return val
  }

  async delete(query) {
    await dbContext.Libs.findOneAndDelete(query)
    return 'Delete Successful'
  }
}
export const libsService = new LibsService()
