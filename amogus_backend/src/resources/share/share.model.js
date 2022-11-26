import mongoose from 'mongoose'
const { Schema } = mongoose
const shareSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
})

export const Share = mongoose.model('Comment', shareSchema)
