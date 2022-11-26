"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = void 0;
var _userActivity = require("./user-activity.service");
var _middleware = require("./../../middleware");
const joinActivity = async (req, res) => {
  try {
    const decodeValue = await (0, _middleware.decodeToken)(req, res);
    const doc = await _userActivity.userActivityService.joinActivity(req.query.id, decodeValue.uid);
    res.status(200).json(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
const checkin = async (req, res) => {
  try {
    const decodeValue = await (0, _middleware.decodeToken)(req, res);
    const doc = await _userActivity.userActivityService.checkin(req.query.id, req.body.userId, decodeValue.uid);
    res.status(200).json(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
const getListUser = async (req, res, next) => {
  try {
    const postId = req.query.postId;
    const users = await _userActivity.userActivityService.getUsers(postId);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    req.status(404).send(error.message);
  }
};
const controller = {
  joinActivity: joinActivity,
  checkin: checkin,
  getListUser: getListUser
};
exports.controller = controller;