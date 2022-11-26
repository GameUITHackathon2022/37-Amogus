import { commentService } from './comment.service'

const createComment = async (req, res, next) => {
  try {
    const commentRequest = {
      userId: req.body.userId,
      postId: req.body.postId,
      content: req.body.content,
    }
    const comment = await commentService.createComment(commentRequest)
    res.status(200).json(comment)
  } catch (error) {
    console.log(error)
  }
}

const getCommentByPostId = async (req, res, next) => {
  try {
    const postId = req.query.portId
    const docs = await commentService.getCommentByPostId(postId)
    res.status(200).json(docs)
  } catch (e) {
    console.log(error)
  }
}

export const commentController = {
  createComment: createComment,
  getCommentByPostId: getCommentByPostId,
}
