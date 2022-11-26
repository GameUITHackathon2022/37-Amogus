import { Share } from './share.model'

export const increaseShare = (postId, userId) => {
  try {
    const share = Share.create({ postId: postId, userId: userId })
    return share
  } catch (error) {
    console.log(error)
  }
}

const countByPostId = (postId) => {
  try {
    const shares = Share.find({ post_id: postId })
    shares.count((error, count) => {
      if (error) console.log(error)
      else return count
    })
  } catch (error) {
    console.log(error)
  }
}

export const shareService = {
  create: create,
  countByPostId: countByPostId,
}
