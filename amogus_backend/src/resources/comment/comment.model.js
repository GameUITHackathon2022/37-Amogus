import mongoose from 'mongoose'
const { Schema } = mongoose
const commentSchema = new Schema(
  {
    userId: {
      type: String,
    },
    postId: {
      type: String,
    },
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
)

export const Comment = mongoose.model('Comment', commentSchema)
