import { Router } from 'express'
import { controller } from './user.controller'

const router = Router()

router.route('/').get(controller.getAllUsers)
router.route('/profile').get(controller.profile)
router.route('/create').post(controller.createUser)
router.route('/editProfile').put(controller.editProfile)
router.route('/rank').get(controller.rankAndPoints)
router.route('/:id').get(controller.getById)

export default router
