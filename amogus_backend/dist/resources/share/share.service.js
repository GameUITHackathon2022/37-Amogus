"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareService = exports.create = void 0;
var _share = require("./share.model");
const create = async (postId, userId) => {
  try {
    const data = {
      postId: postId,
      userId: userId
    };
    const share = await _share.Share.create(data);
    return share;
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
};
exports.create = create;
const countByPostId = async postId => {
  try {
    const shares = await _share.Share.count({
      postId: postId
    });
    return shares;
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
};
const shareService = {
  create: create,
  countByPostId: countByPostId
};
exports.shareService = shareService;