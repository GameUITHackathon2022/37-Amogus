"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentService = void 0;
var _user = require("../user/user.model");
var _user2 = require("../user/user.service");
var _comment = require("./comment.model");
const createComment = async data => {
  try {
    console.log(data);
    const doc = await _comment.Comment.create({
      userId: data.userId,
      postId: data.postId,
      content: data.content
    });
    return doc;
  } catch {
    console.log(error);
  }
};
const getCommentByPostId = async postId => {
  const comments = await _comment.Comment.find({
    postId: postId
  }).sort({
    date: 'desc'
  });
  const results = new Array();
  for (const comment of comments) {
    const user = await _user2.userService.getProfileById(comment.userId);
    const result = {
      user: user,
      comment: comment
    };
    results.push(result);
  }
  return results;
};
const commentService = {
  createComment: createComment,
  getCommentByPostId: getCommentByPostId
};
exports.commentService = commentService;