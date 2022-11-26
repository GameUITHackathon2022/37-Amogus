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
        type: String
    },
    isActivity: {
        type: Boolean
    },
    isChecked: {
        type: Boolean
    },
    isDeleted: {
        type: Boolean
    }
}, {
    timestamps: true
})

export const Post = mongoose.model('Post', postSchema)
