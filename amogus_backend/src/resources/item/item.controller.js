import { itemService } from './item.service'

const getOne = async (req, res) => {
  try {
    const doc = await itemService.getItem()
    res.status(200).json(doc)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

const createOne = async (req, res) => {
  try {
    const doc = await itemService.createOne(req.body)
    res.status(200).json(doc)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const controller = {
  getOne: getOne,
  createOne: createOne,
}
