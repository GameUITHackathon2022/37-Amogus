"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _like = require("./like.controller");
const router = (0, _express.Router)();
router.route('/').post(_like.likeController.create);
router.route('/unlike').delete(_like.likeController.unlike);
var _default = router;
exports.default = _default;