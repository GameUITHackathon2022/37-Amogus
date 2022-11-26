"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Schema
} = _mongoose.default;
const userSchema = new Schema({
  userId: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
  },
  role: {
    type: String
  },
  rank: {
    type: String
  },
  point: {
    type: Number
  }
});
const User = _mongoose.default.model('User', userSchema);
exports.User = User;