import { Router } from 'express'
import { controller } from './user-activity.controller'

const router = Router()

router.route('/join').post(controller.joinActivity)
router.route('/checkin').put(controller.checkin)
router.route('/').get(controller.getListUser)

export default router
