"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.likeService = exports.create = void 0;
var _like = require("./like.model");
const create = async (postId, userId) => {
  try {
    const doc = await _like.Like.create({
      postId: postId,
      userId: userId
    });
    return doc;
  } catch (error) {
    console.log(error);
  }
};
exports.create = create;
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
const likeService = {
  create: create,
  countByPostId: countByPostId
};
exports.likeService = likeService;