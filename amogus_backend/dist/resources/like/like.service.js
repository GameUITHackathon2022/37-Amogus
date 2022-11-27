"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.likeService = void 0;
var _like = require("./like.model");
const create = async (postId, userId) => {
  try {
    const find = await _like.Like.find({
      postId,
      userId
    });
    if (find.length != 0) return 'liked';
    const doc = await _like.Like.create({
      postId: postId,
      userId: userId
    });
    return doc;
  } catch (error) {
    console.log(error);
  }
};
const countByPostId = async postId => {
  try {
    const likes = await _like.Like.count({
      postId: postId
    });
    return likes;
  } catch (error) {
    console.log(error);
  }
};
const unlike = async (postId, userId) => {
  const find = await _like.Like.find({
    postId,
    userId
  });
  if (find.length == 0) return 'not liked';
  await _like.Like.deleteOne({
    id: find.id
  });
  return 'unliked';
};
const likeService = {
  create: create,
  countByPostId: countByPostId,
  unlike: unlike
};
exports.likeService = likeService;