import mongoose from 'mongoose'
const { Schema } = mongoose
const commentSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  post_id: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  content: {
    type: String,
    require: true,
  },
})

export const Comment = mongoose.model('Comment', commentSchema)
