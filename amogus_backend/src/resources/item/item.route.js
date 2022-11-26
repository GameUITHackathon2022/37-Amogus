import { Router } from 'express'
import {controller} from './item.controller'

const router = Router()

router.route('/').get(controller.getOne).post(controller.createOne)

export default router
