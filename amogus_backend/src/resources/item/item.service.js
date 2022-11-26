import { Item } from './item.model'

const getItem = async () => {
  const doc = await Item.find({})
  console.log(doc)
  return doc
}

const createOne = async (data) => {
  const doc = await Item.create(data)
  return doc
}

export const itemService = {
  getItem: getItem,
  createOne: createOne,
}
