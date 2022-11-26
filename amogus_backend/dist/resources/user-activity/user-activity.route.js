"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _userActivity = require("./user-activity.controller");
const router = (0, _express.Router)();
router.route('/join').post(_userActivity.controller.joinActivity);
router.route('/checkin').put(_userActivity.controller.checkin);
router.route('/').get(_userActivity.controller.getListUser);
var _default = router;
exports.default = _default;