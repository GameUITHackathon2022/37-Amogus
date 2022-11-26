import mongoose from 'mongoose'
const { Schema } = mongoose
const userSchema = new Schema({
  userId: {
    type: String
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
  rank: { 
    type: String,
  },  
  point: {
    type: Number
  }
})

export const User = mongoose.model('User', userSchema)
