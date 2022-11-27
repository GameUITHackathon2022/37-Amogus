"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareController = void 0;
var _share = require("./share.service");
const create = async (req, res, next) => {
  try {
    const doc = await _share.shareService.create(req.body.postId, req.body.userId);
    res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
};
const shareController = {
  create: create
};
exports.shareController = shareController;