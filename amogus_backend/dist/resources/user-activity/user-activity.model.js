"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserActivity = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Schema
} = _mongoose.default;
const userActivitySchema = new Schema({
  userId: {
    type: String
  },
  postId: {
    type: String
  },
  join: {
    type: Boolean
  },
  point: {
    type: Number
  }
});
const UserActivity = _mongoose.default.model('UserActivity', userActivitySchema);
exports.UserActivity = UserActivity;