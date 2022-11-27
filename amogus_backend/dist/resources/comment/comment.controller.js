"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentController = void 0;
var _comment = require("./comment.service");
const createComment = async (req, res, next) => {
  try {
    const commentRequest = {
      userId: req.body.userId,
      postId: req.body.postId,
      content: req.body.content
    };
    const comment = await _comment.commentService.createComment(commentRequest);
    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
  }
};
const getCommentByPostId = async (req, res, next) => {
  try {
    const postId = req.query.portId;
    const docs = await _comment.commentService.getCommentByPostId(postId);
    res.status(200).json(docs);
  } catch (e) {
    console.log(error);
  }
};
const commentController = {
  createComment: createComment,
  getCommentByPostId: getCommentByPostId
};
exports.commentController = commentController;