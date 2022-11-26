import { userService } from './user.service'
import { decodeToken } from './../../middleware'

const getAllUsers = async (req, res) => {
  try {
    const doc = await userService.getAllUsers()
    res.status(200).json(doc)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

const createUser = async (req, res) => {
  try {
    const decodeValue = await decodeToken(req, res)

    const doc = await userService.createUser(req.body, decodeValue.uid)
    res.status(200).json(doc)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const controller = {
    getAllUsers: getAllUsers,
    createUser: createUser,
}
