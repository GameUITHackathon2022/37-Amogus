import mongoose from 'mongoose'
const { Schema } = mongoose
const userSchema = new Schema({
  userId: {
    type: String,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
  },
  about: {
    type: String,
  },
  address: {
    type: String,
  },
  ava: {
    type: String,
  },
})

export const User = mongoose.model('User', userSchema)
