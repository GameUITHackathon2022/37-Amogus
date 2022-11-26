import { Router } from 'express'
import { postController } from './post.controller'

const router = Router()

router.route('/create').post(postController.createPost)
router.route('/verify').post(postController.verifyPost)
router.route('/admin').get(postController.getPostNoneCheck)
router.route('/').get(postController.getPosts)

export default router
