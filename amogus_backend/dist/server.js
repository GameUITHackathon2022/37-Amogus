"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;
var _express = _interopRequireDefault(require("express"));
var _web = _interopRequireDefault(require("./route/web"));
var _bodyParser = require("body-parser");
var _post = _interopRequireDefault(require("./resources/post/post.route"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
require("dotenv/config");
var _db = require("./utils/db");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
exports.app = app;
const port = process.env.PORT || 3333;
app.use((0, _cors.default)({
  origin: true
}));
app.use((0, _morgan.default)('dev'));
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
(0, _web.default)(app);
app.use('/api/post', _post.default);
const start = async () => {
  try {
    await (0, _db.connect)();
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
exports.start = start;