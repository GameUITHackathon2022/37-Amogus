import { UserActivity } from '../user-activity/user-activity.model'
import { User } from './user.model'
import { Like } from '../like/like.model'
import { Post } from '../post/post.model'
import { Share } from '../share/share.model'

const getAllUsers = async () => {
  const doc = await User.find({})
  console.log(doc)
  return doc
}

const createUser = async (data, uid) => {
  const check = await User.find({ userId: uid })
  if (check.length > 0) return 'User exist'
  const doc = await User.create({
    email: data.email,
    userId: uid,
    name: data.name,
    role: 'USER',
  })
  return doc
}
const getProfileById = async (userId) => {
  try {
    const user = await User.findOne({ userId: userId })
    if (!user) throw new Error('Not found')
    return user
  } catch (error) {
    console.log(error)
  }
}

const profile = async (uid) => {
  return await User.find({ userId: uid })
}

const editProfile = async (data, uid) => {
  const user = await User.findOneAndUpdate(
    { userId: uid },
    {
      name: data.name,
      about: data.about,
      address: data.address,
      ava: data.ava,
    }
  )
  return user
}

const rankAndPoints = async (uid) => {
  const activities = await UserActivity.find({ userId: uid })
  let actPoint = 0
  console.log(activities)
  for (const join of activities) {
    if (join.point == null) continue
    actPoint += join.point
  }

  let likes = 0
  let share = 0
  const posts = await Post.find({ userId: uid })
  for (const post of posts) {
    const countLike = await Like.count({ postId: post.id })
    likes += countLike
    const countShare = await Share.count({ postId: post.id })
    share += countShare
  }

  const point = likes + share * 2 + actPoint
  const achievement = []
  if (point >= 500) {
    achievement.push('Chuyên gia môi trường')
  }
  if (point >= 1000) {
    achievement.push('Bậc thầy môi trường')
  }
  if (point >= 2000) {
    achievement.push('Thạc sĩ môi trường')
  }
  if (point >= 4000) {
    achievement.push('Tiến sĩ môi trường')
  }
  if (point >= 6000) {
    achievement.push('Nhà khoa học môi trường')
  }
  if (point >= 10000) {
    achievement.push('Chúa tể môi trường')
  }
  return {
    point,
    achievement,
    money: point * 10
  }
}

export const userService = {
  getAllUsers: getAllUsers,
  createUser: createUser,
  profile: profile,
  editProfile: editProfile,
  rankAndPoints: rankAndPoints,
  getAllUsers: getAllUsers,
  createUser: createUser,
  getProfileById: getProfileById,
}
