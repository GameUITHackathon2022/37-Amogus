"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _share = require("./share.controller");
const router = (0, _express.Router)();
router.route('/').post(_share.shareController.create);
var _default = router;
exports.default = _default;