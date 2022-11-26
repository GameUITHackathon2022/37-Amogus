"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postController = void 0;
var _post = require("./post.service");
var _middleware = require("./../../middleware");
const createPost = async (req, res) => {
  try {
    const decodeValue = await (0, _middleware.decodeToken)(req, res);
    const doc = await _post.postService.createPost(req.body, decodeValue.uid);
    res.status(200).json(doc);
  } catch (error) {
    console.error(error);
  }
};
const verifyPost = async (req, res) => {
  try {
    const decodeValue = await (0, _middleware.decodeToken)(req, res);
    const doc = await _post.postService.verifyPost(req.query.id, req.body, decodeValue.uid);
    res.status(200).json(doc);
  } catch (error) {
    console.error(error);
  }
};
const getPosts = async (req, res, next) => {
  try {
    const posts = await _post.postService.getPosts().then(() => {});
    console.log(posts);
    res.status(200).json('debug');
  } catch (error) {
    next(error);
  }
};
const postController = {
  getPosts: getPosts,
  createPost: createPost,
  verifyPost: verifyPost
};
exports.postController = postController;