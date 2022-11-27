"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _comment = require("./comment.controller");
const router = (0, _express.Router)();
router.route('/').get(_comment.commentController.getCommentByPostId).post(_comment.commentController.createComment);
var _default = router;
exports.default = _default;