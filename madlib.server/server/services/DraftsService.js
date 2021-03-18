import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class DraftsService {
  async get(query) {
    const res = await dbContext.Drafts.find(query)
    if (!res) {
      throw new BadRequest('Invalid Id')
    }
    return res
  }

  async create(data) {
    const res = await dbContext.Drafts.create(data)
    if (!res) {
      throw new BadRequest('Not Enough Data')
    }
  }

  async edit(data) {
    const query = { _id: data._id, creatorId: data.creatorId }
    const res = await dbContext.Drafts.findOneAndUpdate(query, data, { new: true })
    if (!res) {
      throw new BadRequest('Invalid Id')
    }
    return res
  }

  async delete(query) {
    await dbContext.Drafts.findOneAndDelete(query)
    return 'Delete Successful'
  }
}
export const draftsService = new DraftsService()
