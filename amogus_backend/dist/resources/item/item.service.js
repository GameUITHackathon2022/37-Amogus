"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemService = void 0;
var _item = require("./item.model");
const getItem = async () => {
  const doc = await _item.Item.find({});
  console.log(doc);
  return doc;
};
const createOne = async data => {
  const doc = await _item.Item.create(data);
  return doc;
};
const itemService = {
  getItem: getItem,
  createOne: createOne
};
exports.itemService = itemService;