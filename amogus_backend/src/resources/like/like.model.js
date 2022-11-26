import mongoose from 'mongoose'
const { Schema } = mongoose
const likeSchema = new Schema(
  {
    userId: {
      type: String,
    },
    postId: {
      type: String,
    },
  },
  { timestamps: true }
)

export const Like = mongoose.model('Like', likeSchema)
