import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Draft = new Schema(
  {
    title: { type: String, required: true, default: 'Unnamed' },
    content: { type: String, required: true },
    creatorId: { type: String, required: true }
  })

export default Draft
