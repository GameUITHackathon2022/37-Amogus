"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Schema
} = _mongoose.default;
const postSchema = new Schema({
  userId: {
    type: String
  },
  content: {
    type: String
  },
  title: {
    type: String
  },
  isActivity: {
    type: Boolean
  },
  isChecked: {
    type: Boolean
  },
  isDeleted: {
    type: Boolean
  }
}, {
  timestamps: true
});
const Post = _mongoose.default.model('Post', postSchema);
exports.Post = Post;