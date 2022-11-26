"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Share = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Schema
} = _mongoose.default;
const shareSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }
});
const Share = _mongoose.default.model('Comment', shareSchema);
exports.Share = Share;