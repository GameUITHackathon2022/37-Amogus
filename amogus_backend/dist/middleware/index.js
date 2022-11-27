"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeToken = void 0;
var _firebaseConfig = _interopRequireDefault(require("../config/firebase-config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const decodeToken = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decodeValue = await _firebaseConfig.default.auth().verifyIdToken(token);
    if (decodeValue) {
      req.user = decodeValue;
      return decodeValue;
    }
    return res.status(401).send({
      error: 'Unauthorize'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal error'
    });
  }
};
exports.decodeToken = decodeToken;