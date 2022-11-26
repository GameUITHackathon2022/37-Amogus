"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userService = void 0;
var _user = require("./user.model");
const getAllUsers = async () => {
  const doc = await _user.User.find({});
  console.log(doc);
  return doc;
};
const createUser = async (data, uid) => {
  const check = await _user.User.find({
    userId: uid
  });
  if (check.length > 0) return "User exist";
  const doc = await _user.User.create({
    email: data.email,
    userId: uid,
    name: data.name,
    role: "USER",
    rank: "None",
    point: 0
  });
  return doc;
};
const userService = {
  getAllUsers: getAllUsers,
  createUser: createUser
};
exports.userService = userService;