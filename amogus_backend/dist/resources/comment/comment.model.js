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
  userId: {
    type: String
  },
  postId: {
    type: String
  },
  content: {
    type: String,
    require: true
  }
}, {
  timestamps: true
});
const Comment = _mongoose.default.model('Comment', commentSchema);
exports.Comment = Comment;