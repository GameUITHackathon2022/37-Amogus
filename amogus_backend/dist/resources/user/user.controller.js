"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = void 0;
var _user = require("./user.service");
var _middleware = require("./../../middleware");
const getAllUsers = async (req, res) => {
  try {
    const doc = await _user.userService.getAllUsers();
    res.status(200).json(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
const createUser = async (req, res) => {
  try {
    const decodeValue = await (0, _middleware.decodeToken)(req, res);
    const doc = await _user.userService.createUser(req.body, decodeValue.uid);
    res.status(200).json(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
const profile = async (req, res) => {
  try {
    const decodeValue = await (0, _middleware.decodeToken)(req, res);
    const doc = await _user.userService.profile(decodeValue.uid);
    res.status(200).json(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
const editProfile = async (req, res) => {
  try {
    const decodeValue = await (0, _middleware.decodeToken)(req, res);
    const doc = await _user.userService.editProfile(req.body, decodeValue.uid);
    res.status(200).json(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
const rankAndPoints = async (req, res) => {
  try {
    const decodeValue = await (0, _middleware.decodeToken)(req, res);
    const doc = await _user.userService.rankAndPoints(decodeValue.uid);
    res.status(200).json(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
const controller = {
  getAllUsers: getAllUsers,
  createUser: createUser,
  profile: profile,
  editProfile: editProfile,
  rankAndPoints: rankAndPoints
};
exports.controller = controller;