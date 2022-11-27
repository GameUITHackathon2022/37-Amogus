"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.likeController = void 0;
var _like = require("./like.service");
var _middleware = require("./../../middleware");
const create = async (req, res, next) => {
  try {
    const decodeValue = await (0, _middleware.decodeToken)(req, res);
    console.log(req.body);
    const doc = await _like.likeService.create(req.body.postId, decodeValue.uid);
    res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
};
const unlike = async (req, res) => {
  try {
    const decodeValue = await (0, _middleware.decodeToken)(req, res);
    console.log(req.body);
    const doc = await _like.likeService.unlike(req.body.postId, decodeValue.uid);
    res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
};
const likeController = {
  create: create,
  unlike: unlike
};
exports.likeController = likeController;