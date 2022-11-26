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
<<<<<<< HEAD
const getProfileById = async userId => {
  try {
    const user = await _user.User.findOne({
      userId: userId
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};
=======
>>>>>>> duclong
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
<<<<<<< HEAD
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
  console.log(posts);
  return likes + share + actPoint;
=======
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
>>>>>>> duclong
};
const userService = {
  getAllUsers: getAllUsers,
  createUser: createUser,
<<<<<<< HEAD
  profile: profile,
  editProfile: editProfile,
  rankAndPoints: rankAndPoints,
  getAllUsers: getAllUsers,
  createUser: createUser,
  getProfileById: getProfileById
=======
  getProfileById: getProfileById,
  profile: profile,
  editProfile: editProfile
>>>>>>> duclong
};
exports.userService = userService;