import { Share } from './share.model'

export const create = async (postId, userId) => {
  try {
    const data = { postId: postId, userId: userId }
    const share = await Share.create(data)
    return share
  } catch (error) {
    console.log(error)
    res.status(400).end()
  }
}

const countByPostId = async (postId) => {
  try {
    const shares = await Share.count({ postId: postId })
    return shares
  } catch (error) {
    console.log(error)
    res.status(400).end()
  }
}

export const shareService = {
  create: create,
  countByPostId: countByPostId,
}
