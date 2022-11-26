import { Router } from 'express'
import { commentController } from './comment.controller'

const router = Router()

router
  .route('/')
  .get(commentController.getCommentByPostId)
  .post(commentController.createComment)

export default router
