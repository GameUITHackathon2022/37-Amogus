import mongoose from 'mongoose'
const { Schema } = mongoose
const postSchema = new Schema(
  {
    userId: {
      type: String,
    },
    content: {
      type: String,
    },
    title: {
      type: String,
    },
    isActivity: {
      type: Boolean,
    },
    isChecked: {
      type: Boolean,
    },
    isDeleted: {
      type: Boolean,
    },
    imageURL: {
      type: String,
    },
    dateStart: {
      type: Date,
    },
    dateEnd: {
      type: Date,
    },
    point: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

export const Post = mongoose.model('Post', postSchema)
