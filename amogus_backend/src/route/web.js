import express from "express";
import itemRouter from '../resources/item/item.route'
import userRouter from '../resources/user/user.route'
import postRouter from '../resources/post/post.route'
import likeRouter from '../resources/like/like.route'

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/api',(req, res) => {
        res.send('Hello World!')
      });
    app.use('/api/item', itemRouter)
    app.use('/api/user', userRouter)
    app.use('/api/post', postRouter)
    app.use('/api/like', likeRouter)
    return app.use("/", router);
}

module.exports = initWebRoutes;
