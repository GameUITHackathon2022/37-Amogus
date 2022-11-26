"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postController = void 0;
var _post = require("./post.service");
var _middleware = require("./../../middleware");
var _share = require("../share/share.service");
var _like = require("../like/like.service");
var _user = require("../user/user.service");
const createPost = async (req, res) => {
  try {
    const decodeValue = await (0, _middleware.decodeToken)(req, res);
    const doc = await _post.postService.createPost(req.body, decodeValue.uid);
    res.status(200).json(doc);
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};
const verifyPost = async (req, res) => {
  try {
    const decodeValue = await (0, _middleware.decodeToken)(req, res);
    const doc = await _post.postService.verifyPost(req.query.id, req.body, decodeValue.uid);
    res.status(200).json(doc);
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};
const getPosts = async (req, res, next) => {
  try {
    const posts = await _post.postService.getPosts();
    const results = new Array();
    for (const post of posts) {
      const user = await _user.userService.getProfileById(post.userId);
      const shares = await _share.shareService.countByPostId(post._id);
      const likes = await _like.likeService.countByPostId(post._id);
      const result = {
        user,
        post,
        count: {
          shares: shares,
          likes: likes
        }
      };
      results.push(result);
    }
    res.status(200).json(results);
  } catch (error) {
    console.log(error.message);
    if (error.message === 'Not found') res.status(404).send('post not found');
    res.status(400).end();
  }
};
const getPostNoneCheck = async (req, res, next) => {
  try {
    const docs = await _post.postService.getPostNoneCheck();
    res.status(200).json(docs);
  } catch (error) {
    if (error.message === 'Not found') res.status(404).send('data not found');
    console.log(error);
    res.status(400).end();
  }
};
const postController = {
  getPosts: getPosts,
  createPost: createPost,
  verifyPost: verifyPost,
  getPostNoneCheck: getPostNoneCheck
};
exports.postController = postController;