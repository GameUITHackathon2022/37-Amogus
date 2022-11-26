import { likeService } from './like.service'

const create = async (req, res, next) => {
  try {
    console.log(req.body)
    const doc = await likeService.create(req.body.postId, req.body.userId)
    res.status(200).json(doc)
  } catch (error) {
    console.log(error)
    res.status(400).end()
  }
}
export const likeController = {
  create: create,
}
