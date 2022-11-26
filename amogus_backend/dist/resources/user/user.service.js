"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userService = void 0;
var _userActivity = require("../user-activity/user-activity.model");
var _user = require("./user.model");
var _like = require("../like/like.model");
var _post = require("../post/post.model");
var _share = require("../share/share.model");
const getAllUsers = async () => {
  const doc = await _user.User.find({});
  console.log(doc);
  return doc;
};
const createUser = async (data, uid) => {
  const check = await _user.User.find({
    userId: uid
  });
  if (check.length > 0) return 'User exist';
  const doc = await _user.User.create({
    email: data.email,
    userId: uid,
    name: data.name,
    role: 'USER'
  });
  return doc;
};
const getProfileById = async userId => {
  try {
    const user = await _user.User.findOne({
      userId: userId
    });
    if (!user) throw new Error('Not found');
    return user;
  } catch (error) {
    console.log(error);
  }
};
const profile = async uid => {
  return await _user.User.find({
    userId: uid
  });
};
const editProfile = async (data, uid) => {
  const user = await _user.User.findOneAndUpdate({
    userId: uid
  }, {
    name: data.name,
    about: data.about,
    address: data.address,
    ava: data.ava
  });
  return user;
};
const rankAndPoints = async uid => {
  const activities = await _userActivity.UserActivity.find({
    userId: uid
  });
  let actPoint = 0;
  console.log(activities);
  for (const join of activities) {
    if (join.point == null) continue;
    actPoint += join.point;
  }
  let likes = 0;
  let share = 0;
  const posts = await _post.Post.find({
    userId: uid
  });
  for (const post of posts) {
    const countLike = await _like.Like.count({
      postId: post.id
    });
    likes += countLike;
    const countShare = await _share.Share.count({
      postId: post.id
    });
    share += countShare;
  }
  const point = likes + share * 2 + actPoint;
  const achievement = [];
  if (point >= 500) {
    achievement.push('Chuyên gia môi trường');
  }
  if (point >= 1000) {
    achievement.push('Bậc thầy môi trường');
  }
  if (point >= 2000) {
    achievement.push('Thạc sĩ môi trường');
  }
  if (point >= 4000) {
    achievement.push('Tiến sĩ môi trường');
  }
  if (point >= 6000) {
    achievement.push('Nhà khoa học môi trường');
  }
  if (point >= 10000) {
    achievement.push('Chúa tể môi trường');
  }
  return {
    point,
    achievement,
    money: point * 10
  };
};
const userService = {
  getAllUsers: getAllUsers,
  createUser: createUser,
  profile: profile,
  editProfile: editProfile,
  rankAndPoints: rankAndPoints,
  getAllUsers: getAllUsers,
  createUser: createUser,
  getProfileById: getProfileById
};
exports.userService = userService;