"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postService = void 0;
var _share = require("../share/share.model");
var _post = require("./post.model");
var _postTag = require("../post-tag/post-tag.model");
var _user = require("../user/user.model");
var _userActivity = require("../user-activity/user-activity.model");
var _user2 = require("../user/user.service");
const createPost = async (data, uid) => {
  let point = 0;
  const admin = await _user.User.find({
    userId: uid,
    role: 'ADMIN'
  });
  console.log(admin);
  if (data.isActivity == true) {
    console.log('here');
    if (admin.length < 1) return 'Permission denied';
    point = data.point;
  }
  const post = await _post.Post.create({
    userId: uid,
    content: data.content,
    title: data.title,
    isActivity: data.isActivity,
    isChecked: false,
    isDeleted: false,
    dateStart: data.dateStart,
    dateEnd: data.dateEnd,
    point,
    imageURL: data.imageURL
  });
  const postTag = [];
  if (data.tags) {
    const tags = data.tags.split(',');
    for (const tag of tags) {
      postTag.push(await _postTag.PostTag.create({
        postId: post.id,
        tag
      }));
    }
  }
  if (data.isActivity == true && admin.length > 0) {
    console.log('this one');
    const join = await _userActivity.UserActivity.create({
      userId: uid,
      postId: post.id,
      join: true,
      point: data.point
    });
    return {
      post,
      postTag,
      join
    };
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
  if (admin.length < 1) return 'Permission denied';
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
  return {
    post
  };
};
const getPosts = async () => {
  const docs = await _post.Post.find({
    $or: [{
      isChecked: true
    }, {
      isActivity: true
    }]
  });
  if (docs.length === 0) throw new Error('Not found');
  return docs;
};
const getInteractive = async postId => {
  console.log(postId);
  const shares = await _share.Share.find({
    postId: postId
  });
  console.log(shares);
};
const getPostNoneCheck = async () => {
  const posts = await _post.Post.find({
    isChecked: false,
    isActivity: false
  });
  if (posts.length === 0) throw new Error('Not found');
  const results = new Array();
  for (let post of posts) {
    const user = await _user2.userService.getProfileById(post.userId);
    const result = {
      user: user,
      post: post
    };
    results.push(result);
  }
  return results;
};
const deletePost = async (id, uid) => {
  const check = await _post.Post.find({
    userId: uid,
    postId: id
  });
  const admin = await _user.User.find({
    userId: uid,
    role: 'ADMIN'
  });
  if (check.length < 1 && admin.length < 1) {
    return 'Permission denied';
  }
  await _post.Post.deleteOne({
    id
  });
  return 'deleted';
};
const postService = {
  createPost: createPost,
  getPosts: getPosts,
  getInteractive: getInteractive,
  verifyPost: verifyPost,
  getPostNoneCheck: getPostNoneCheck,
  deletePost: deletePost
};
exports.postService = postService;