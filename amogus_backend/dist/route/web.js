"use strict";

var _express = _interopRequireDefault(require("express"));
var _item = _interopRequireDefault(require("../resources/item/item.route"));
var _user = _interopRequireDefault(require("../resources/user/user.route"));
var _post = _interopRequireDefault(require("../resources/post/post.route"));
var _like = _interopRequireDefault(require("../resources/like/like.route"));
var _userActivity = _interopRequireDefault(require("../resources/user-activity/user-activity.route"));
var _comment = _interopRequireDefault(require("../resources/comment/comment.route"));
var _share = _interopRequireDefault(require("../resources/share/share.route"));
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
  app.use('/api/activity', _userActivity.default);
<<<<<<< HEAD
  return app.use("/", router);
=======
  app.use('/api/share', _share.default);
  app.use('/api/comment', _comment.default);
  return app.use('/', router);
>>>>>>> duclong
};
module.exports = initWebRoutes;