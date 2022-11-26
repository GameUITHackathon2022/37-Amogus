import { Router } from 'express'
import { shareController } from './share.controller'

const router = Router()

router.route('/').post(shareController.create)

export default router
