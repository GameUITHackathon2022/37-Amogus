import { shareService } from './share.service'

const create = async (req, res, next) => {
  try {
    const doc = await shareService.create(req.body.postId, req.body.userId)
    res.status(200).json(doc)
  } catch (error) {
    console.log(error)
    res.status(400).end()
  }
}

export const shareController = {
  create: create,
}
