"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userActivityService = void 0;
var _userActivity = require("./user-activity.model");
var _user = require("../user/user.model");
var _post = require("../post/post.model");
var _user2 = require("../user/user.service");
const joinActivity = async (id, uid) => {
  const check = await _userActivity.UserActivity.find({
    postId: id,
    userId: uid
  });
  if (check.length > 0) return 'Participated';
  const join = await _userActivity.UserActivity.create({
    userId: uid,
    postId: id
  });
  return join;
};
const checkin = async (id, userId, uid) => {
  const admin = await _user.User.find({
    userId: uid,
    role: 'ADMIN'
  });
  console.log(admin);
  if (admin.length < 1) return 'Permission denied';
  const post = await _post.Post.find({
    id
  });
  const checkin = await _userActivity.UserActivity.findOneAndUpdate({
    postId: id,
    userId
  }, {
    join: true,
    point: post.point
  });
  return checkin;
};
const getUsers = async postId => {
  const activities = await _userActivity.UserActivity.find({
    postId: postId
  });
  if (!activities || activities.length === 0) throw new Error('not found');
  const results = [];
  for (const activity of activities) {
    console.log(activity);
    const user = await _user2.userService.getProfileById(activity.userId);
    const result = {
      user: user,
      isJoin: activity.join
    };
    results.push(result);
  }
  return results;
};
const userActivityService = {
  joinActivity: joinActivity,
  checkin: checkin,
  getUsers: getUsers
};
exports.userActivityService = userActivityService;