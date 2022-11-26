"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _item = require("./item.controller");
const router = (0, _express.Router)();
router.route('/').get(_item.controller.getOne).post(_item.controller.createOne);
var _default = router;
exports.default = _default;