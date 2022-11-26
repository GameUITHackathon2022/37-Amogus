import { Like } from './like.model'

export const create = async (postId, userId) => {
  try {
    const doc = await Like.create({ postId: postId, userId: userId })
    return doc
  } catch (error) {
    console.log(error)
  }
}
const countByPostId = async (postId) => {
  try {
    const likes = await Like.count({ postId: postId })
    return likes
  } catch (error) {
    console.log(error)
  }
}

export const likeService = {
  create: create,
  countByPostId: countByPostId,
}
