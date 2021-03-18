import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import DraftSchema from '../models/Draft'
import LibSchema from '../models/Lib'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Drafts = mongoose.model('Draft', DraftSchema);
  Libs = mongoose.model('Lib', LibSchema);
}

export const dbContext = new DbContext()
