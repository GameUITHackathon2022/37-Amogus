import { likeService } from './like.service'
import { decodeToken } from './../../middleware'

const create = async (req, res, next) => {
  try {
    const decodeValue = await decodeToken(req, res)

    console.log(req.body)
    const doc = await likeService.create(req.body.postId, decodeValue.uid)
    res.status(200).json(doc)
  } catch (error) {
    console.log(error)
    res.status(400).end()
  }
}

const unlike = async (req, res) => {
  try {
    const decodeValue = await decodeToken(req, res)

    console.log(req.body)
    const doc = await likeService.unlike(req.body.postId, decodeValue.uid)
    res.status(200).json(doc)
  } catch (error) {
    console.log(error)
    res.status(400).end()
  }
}
export const likeController = {
  create: create,
  unlike: unlike,
}
