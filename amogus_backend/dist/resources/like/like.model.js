"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Like = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Schema
} = _mongoose.default;
const likeSchema = new Schema({
  userId: {
    type: String
  },
  postId: {
    type: String
  }
});
const Like = _mongoose.default.model('Like', likeSchema);
exports.Like = Like;