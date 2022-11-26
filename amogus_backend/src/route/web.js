import express from 'express'
import itemRouter from '../resources/item/item.route'
import userRouter from '../resources/user/user.route'
import postRouter from '../resources/post/post.route'
import likeRouter from '../resources/like/like.route'
import userActivityRouter from '../resources/user-activity/user-activity.route'
import commentRoute from '../resources/comment/comment.route'
import shareRoute from '../resources/share/share.route'

let router = express.Router()

let initWebRoutes = (app) => {
  router.get('/api', (req, res) => {
    res.send('Hello World!')
  })
  app.use('/api/item', itemRouter)
  app.use('/api/user', userRouter)
  app.use('/api/post', postRouter)
  app.use('/api/like', likeRouter)
  app.use('/api/activity', userActivityRouter)
  app.use('/api/share', shareRoute)
  app.use('/api/comment', commentRoute)

  return app.use('/', router)
}

module.exports = initWebRoutes
