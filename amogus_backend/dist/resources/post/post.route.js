"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _post = require("./post.controller");
const router = (0, _express.Router)();
router.route('/create').post(_post.postController.createPost);
router.route('/verify').put(_post.postController.verifyPost);
router.route('/admin').get(_post.postController.getPostNoneCheck);
router.route('/').get(_post.postController.getPosts);
router.route('/delete').delete(_post.postController.deletePost);
var _default = router;
exports.default = _default;