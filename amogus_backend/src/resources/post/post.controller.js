import { postService } from './post.service'
import { decodeToken } from './../../middleware'

const createPost = async (req, res) => {
  try {
    const decodeValue = await decodeToken(req, res)
    const doc = await postService.createPost(req.body, decodeValue.uid)
    res.status(200).json(doc)
  } catch (error) {
    console.error(error)
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
  }
}

const getPosts = async (req, res, next) => {
  try {
    const posts = await postService.getPosts().then(() => {})
    console.log(posts)
    res.status(200).json('debug')
  } catch (error) {
    next(error)
  }
}
export const postController = {
  getPosts: getPosts,
  createPost: createPost,
  verifyPost: verifyPost,
}
