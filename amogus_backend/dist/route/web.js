"use strict";

var _express = _interopRequireDefault(require("express"));
var _item = _interopRequireDefault(require("../resources/item/item.route"));
var _user = _interopRequireDefault(require("../resources/user/user.route"));
var _post = _interopRequireDefault(require("../resources/post/post.route"));
var _like = _interopRequireDefault(require("../resources/like/like.route"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let router = _express.default.Router();
let initWebRoutes = app => {
  router.get('/api', (req, res) => {
    res.send('Hello World!');
  });
  app.use('/api/item', _item.default);
  app.use('/api/user', _user.default);
  app.use('/api/post', _post.default);
  app.use('/api/like', _like.default);
  return app.use("/", router);
};
module.exports = initWebRoutes;