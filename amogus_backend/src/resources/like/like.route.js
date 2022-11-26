import { Router } from 'express'
import { likeController } from './like.controller'

const router = Router()

router.route('/').post(likeController.create)

export default router
