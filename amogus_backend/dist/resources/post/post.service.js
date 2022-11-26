"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postService = void 0;
var _post = require("./post.model");
var _postTag = require("../post-tag/post-tag.model");
var _user = require("../user/user.model");
const createPost = async (data, uid) => {
  const post = await _post.Post.create({
    userId: uid,
    content: data.content,
    title: data.title,
    isActivity: data.isActivity,
    isChecked: false,
    isDeleted: false
  });
  const tags = data.tags.split(',');
  const postTag = [];
  for (const tag of tags) {
    postTag.push(await _postTag.PostTag.create({
      postId: post.id,
      tag
    }));
  }
  return {
    post,
    postTag
  };
};
const verifyPost = async (id, data, uid) => {
  const admin = await _user.User.find({
    userId: uid,
    role: 'ADMIN'
  });
  if (!admin) return 'Permission denied';
  if (data.verify == true) {
    const post = await _post.Post.findOneAndUpdate({
      id
    }, {
      isChecked: true
    });
    return post;
  }
  const post = await _post.Post.findOneAndUpdate({
    id
  }, {
    isDeleted: true
  });
  return post;
};
const getPosts = async () => {
  const docs = await _post.Post.find()
  // .sort({ createAt })
  .limit(5);
  return docs;
};
const postService = {
  createPost: createPost,
  getPosts: getPosts,
  verifyPost: verifyPost
};
exports.postService = postService;