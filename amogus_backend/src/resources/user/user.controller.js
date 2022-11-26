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

const profile = async (req, res) => {
  try {
    const decodeValue = await decodeToken(req, res)

    const doc = await userService.profile(decodeValue.uid)
    res.status(200).json(doc)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

const editProfile = async (req, res) => {
  try {
    const decodeValue = await decodeToken(req, res)

    const doc = await userService.editProfile(req.body, decodeValue.uid)
    res.status(200).json(doc)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

const rankAndPoints = async (req, res) => {
  try {
    const decodeValue = await decodeToken(req, res)

    const doc = await userService.rankAndPoints(decodeValue.uid)
    res.status(200).json(doc)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

const getById = async (req, res, next) => {
  try {
    const user = await userService.getProfileById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    if (error.message === 'Not found') res.status(404).send('User not found')
    console.error(error)
    res.status(400).send(error)
  }
}

export const controller = {
  getAllUsers: getAllUsers,
  createUser: createUser,
  profile: profile,
  editProfile: editProfile,
  rankAndPoints: rankAndPoints,
  getById: getById,
}
