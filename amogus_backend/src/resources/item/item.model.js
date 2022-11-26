import mongoose from 'mongoose'
const { Schema } = mongoose
const itemSchema = new Schema({
  name: {
    type: String,
  },
})

export const Item = mongoose.model('Item', itemSchema)
