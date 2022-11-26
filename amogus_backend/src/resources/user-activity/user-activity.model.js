import mongoose from 'mongoose'
const { Schema } = mongoose
const userActivitySchema = new Schema({
  userId: {
    type: String,
  },
  postId: {
    type: String,
  },
  join: {
    type: Boolean,
  },
  point: {
    type: Number,
  },
})

export const UserActivity = mongoose.model('UserActivity', userActivitySchema)
