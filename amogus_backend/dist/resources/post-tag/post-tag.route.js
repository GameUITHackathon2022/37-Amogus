"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _postTag = require("./post-tag.controller");
const router = (0, _express.Router)();
router.route('/').get(_postTag.controller.getPosts);
var _default = router;
exports.default = _default;