import { Like } from './like.model'

const create = async (postId, userId) => {
  try {
    const find = await Like.find({ postId, userId })
    if (find.length != 0) return 'liked'
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

const unlike = async (postId, userId) => {
  const find = await Like.find({ postId, userId })
  if (find.length == 0) return 'not liked'
  await Like.deleteOne({ id: find.id })
  return 'unliked'
}

export const likeService = {
  create: create,
  countByPostId: countByPostId,
  unlike: unlike,
}
