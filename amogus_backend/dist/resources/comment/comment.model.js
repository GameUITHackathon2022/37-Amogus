"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Schema
} = _mongoose.default;
const commentSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  post_id: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  content: {
    type: String,
    require: true
  }
});
const Comment = _mongoose.default.model('Comment', commentSchema);
exports.Comment = Comment;