import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Lib = new Schema(
  {
    title: { type: String, required: true, default: 'unnamed' },
    content: { type: String, required: true },
    creatorId: { type: String, required: true },
    draftId: { type: String, required: true },
    blanks: { type: Array },
    tags: { type: Array },
    likes: { type: Number, required: true, default: 0 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
Lib.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Lib
