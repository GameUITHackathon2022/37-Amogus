"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareService = exports.increaseShare = void 0;
var _share = require("./share.model");
const increaseShare = (postId, userId) => {
  try {
    const share = _share.Share.create({
      postId: postId,
      userId: userId
    });
    return share;
  } catch (error) {
    console.log(error);
  }
};
exports.increaseShare = increaseShare;
const countByPostId = postId => {
  try {
    const shares = _share.Share.find({
      post_id: postId
    });
    shares.count((error, count) => {
      if (error) console.log(error);else return count;
    });
  } catch (error) {
    console.log(error);
  }
};
const shareService = {
  create: create,
  countByPostId: countByPostId
};
exports.shareService = shareService;