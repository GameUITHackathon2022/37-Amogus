import mongoose from 'mongoose'
const { Schema } = mongoose
const shareSchema = new Schema(
  {
    userId: {
      type: String,
      ref: 'User',
    },
    postId: {
      type: String,
      ref: 'Post',
    },
  },
  { timestamps: true }
)

export const Share = mongoose.model('Share', shareSchema)
