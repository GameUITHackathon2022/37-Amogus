"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Schema
} = _mongoose.default;
const itemSchema = new Schema({
  name: {
    type: String
  }
});
const Item = _mongoose.default.model('Item', itemSchema);
exports.Item = Item;