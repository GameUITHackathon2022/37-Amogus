import { User } from '../user/user.model'
import { userService } from '../user/user.service'
import { Comment } from './comment.model'
const createComment = async (data) => {
  try {
    console.log(data)
    const doc = await Comment.create({
      userId: data.userId,
      postId: data.postId,
      content: data.content,
    })
    return doc
  } catch {
    console.log(error)
  }
}
const getCommentByPostId = async (postId) => {
  const comments = await Comment.find({ postId: postId }).sort({ date: 'desc' })
  const results = new Array()
  for (const comment of comments) {
    const user = await userService.getProfileById(comment.userId)
    const result = { user: user, comment: comment }
    results.push(result)
  }
  return results
}
export const commentService = {
  createComment: createComment,
  getCommentByPostId: getCommentByPostId,
}
