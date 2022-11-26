import { Router } from 'express'
import {controller} from './post-tag.controller'

const router = Router()

router.route('/').get(controller.getPosts)

export default router
