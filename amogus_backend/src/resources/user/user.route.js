import { Router } from 'express'
import {controller} from './user.controller'

const router = Router()

router.route('/').get(controller.getAllUsers)
router.route('/create').post(controller.createUser)

export default router
