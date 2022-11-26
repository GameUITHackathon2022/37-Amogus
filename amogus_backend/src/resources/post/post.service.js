import { Post } from './post.model'
import { PostTag } from '../post-tag/post-tag.model'
import { User } from '../user/user.model'

const createPost = async (data, uid) => {
  const post = await Post.create({
    userId: uid,
    content: data.content,
    title: data.title,
    isActivity: data.isActivity,
    isChecked: false,
    isDeleted: false,
  })
  const tags = data.tags.split(',')
  const postTag = []
  for (const tag of tags) {
    postTag.push(
      await PostTag.create({
        postId: post.id,
        tag,
      })
    )
  }
  return {
    post,
    postTag,
  }
}

const verifyPost = async (id, data, uid) => {
  const admin = await User.find({
    userId: uid,
    role: 'ADMIN',
  })
  if (!admin) return 'Permission denied'
  if (data.verify == true) {
    const post = await Post.findOneAndUpdate(
      {
        id,
      },
      {
        isChecked: true,
      }
    )
    return post
  }
  const post = await Post.findOneAndUpdate(
    {
      id,
    },
    {
      isDeleted: true,
    }
  )
  return post
}

const getPosts = async () => {
  const docs = await Post.find()
    // .sort({ createAt })
    .limit(5)
  return docs
}

export const postService = {
  createPost: createPost,
  getPosts: getPosts,
  verifyPost: verifyPost,
}
