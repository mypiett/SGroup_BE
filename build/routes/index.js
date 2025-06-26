"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userRoute = _interopRequireDefault(require("./user.route.js"));
var _pollRoute = _interopRequireDefault(require("./poll.route.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
router.use("/users", _userRoute["default"]);
router.use("/polls", _pollRoute["default"]);
var _default = exports["default"] = router;