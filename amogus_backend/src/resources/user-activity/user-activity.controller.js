import { userActivityService } from './user-activity.service'
import { decodeToken } from './../../middleware'

const joinActivity = async (req, res) => {
  try {
    const decodeValue = await decodeToken(req, res)

    const doc = await userActivityService.joinActivity(
      req.query.id,
      decodeValue.uid
    )
    res.status(200).json(doc)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

const checkin = async (req, res) => {
  try {
    const decodeValue = await decodeToken(req, res)

    const doc = await userActivityService.checkin(
      req.query.id,
      req.body.userId,
      decodeValue.uid
    )
    res.status(200).json(doc)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}
const getListUser = async (req, res, next) => {
  try {
    const postId = req.query.postId
    const users = await userActivityService.getUsers(postId)
    res.status(200).json(users)
  } catch (error) {
    console.log(error)
    req.status(404).send(error.message)
  }
}
export const controller = {
  joinActivity: joinActivity,
  checkin: checkin,
  getListUser: getListUser,
}
