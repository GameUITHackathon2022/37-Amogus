"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.likeController = void 0;
var _like = require("./like.service");
const create = async (req, res, next) => {
  try {
    console.log(req.body);
    const doc = await _like.likeService.create(req.body.postId, req.body.userId);
    res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
};
const likeController = {
  create: create
};
exports.likeController = likeController;