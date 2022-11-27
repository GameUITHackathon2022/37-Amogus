"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostTag = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Schema
} = _mongoose.default;
const postTagSchema = new Schema({
  postId: {
    type: String
  },
  tag: {
    type: String
  }
}, {
  timestamps: true
});
const PostTag = _mongoose.default.model('PostTag', postTagSchema);
exports.PostTag = PostTag;