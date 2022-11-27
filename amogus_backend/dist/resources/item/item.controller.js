"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = void 0;
var _item = require("./item.service");
const getOne = async (req, res) => {
  try {
    const doc = await _item.itemService.getItem();
    res.status(200).json(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
const createOne = async (req, res) => {
  try {
    const doc = await _item.itemService.createOne(req.body);
    res.status(200).json(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
const controller = {
  getOne: getOne,
  createOne: createOne
};
exports.controller = controller;