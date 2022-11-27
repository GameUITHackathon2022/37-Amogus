import { UserActivity } from './user-activity.model'
import { User } from '../user/user.model'
import { Post } from '../post/post.model'
import { userService } from '../user/user.service'

const joinActivity = async (id, uid) => {
  const check = await UserActivity.find({
    postId: id,
    userId: uid,
  })
  if (check.length > 0) return 'Participated'
  const join = await UserActivity.create({
    userId: uid,
    postId: id,
  })
  return join
}

const checkin = async (id, userId, uid) => {
  const admin = await User.find({
    userId: uid,
    role: 'ADMIN',
  })
  console.log(admin)
  if (admin.length < 1) return 'Permission denied'
  const post = await Post.find({ id })
  const checkin = await UserActivity.findOneAndUpdate(
    {
      postId: id,
      userId,
    },
    { join: true, point: post.point }
  )
  return checkin
}
const getUsers = async (postId) => {
  const activities = await UserActivity.find({ postId: postId })
  if (!activities || activities.length === 0) throw new Error('not found')
  const results = []
  for (const activity of activities) {
    console.log(activity)
    const user = await userService.getProfileById(activity.userId)
    const result = {
      user: user,
      isJoin: activity.join,
    }
    results.push(result)
  }
  return results
}
export const userActivityService = {
  joinActivity: joinActivity,
  checkin: checkin,
  getUsers: getUsers,
}
