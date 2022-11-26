import { postService } from './post.service'
import { decodeToken } from './../../middleware'
import { shareService } from '../share/share.service'
import { likeService } from '../like/like.service'
import { userService } from '../user/user.service'

const createPost = async (req, res) => {
  try {
    const decodeValue = await decodeToken(req, res)
    const doc = await postService.createPost(req.body, decodeValue.uid)
    res.status(200).json(doc)
  } catch (error) {
    console.error(error)
    res.status(400).end()
  }
}

const verifyPost = async (req, res) => {
  try {
    const decodeValue = await decodeToken(req, res)
    const doc = await postService.verifyPost(
      req.query.id,
      req.body,
      decodeValue.uid
    )
    res.status(200).json(doc)
  } catch (error) {
    console.error(error)
    res.status(400).end()
  }
}

const getPosts = async (req, res, next) => {
  try {
    const posts = await postService.getPosts()
    const results = new Array()
    for (const post of posts) {
      const user = await userService.getProfileById(post.userId)
      const shares = await shareService.countByPostId(post._id)
      const likes = await likeService.countByPostId(post._id)
      const result = {
        user,
        post,
        count: {
          shares: shares,
          likes: likes,
        },
      }
      results.push(result)
    }
    res.status(200).json(results)
  } catch (error) {
    console.log(error.message)
    if (error.message === 'Not found') res.status(404).send('post not found')
    res.status(400).end()
  }
}

const getPostNoneCheck = async (req, res, next) => {
  try {
    const docs = await postService.getPostNoneCheck()
    res.status(200).json(docs)
  } catch (error) {
    if (error.message === 'Not found') res.status(404).send('data not found')
    console.log(error)
    res.status(400).end()
  }
}
export const postController = {
  getPosts: getPosts,
  createPost: createPost,
  verifyPost: verifyPost,
  getPostNoneCheck: getPostNoneCheck,
}
