import mongoose from 'mongoose'
const { Schema } = mongoose
const postTagSchema = new Schema({
    postId: {
        type: String,
    },
    tag: {
        type: String
    }
}, {
    timestamps: true
})

export const PostTag = mongoose.model('PostTag', postTagSchema)
