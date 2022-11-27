"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _user = require("./user.controller");
const router = (0, _express.Router)();
router.route('/').get(_user.controller.getAllUsers);
router.route('/profile').get(_user.controller.profile);
router.route('/create').post(_user.controller.createUser);
router.route('/editProfile').put(_user.controller.editProfile);
router.route('/rank').get(_user.controller.rankAndPoints);
router.route('/:id').get(_user.controller.getById);
var _default = router;
exports.default = _default;