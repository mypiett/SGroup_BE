"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _pollController = _interopRequireDefault(require("../controller/poll.controller.js"));
var _verifyMiddleware = _interopRequireDefault(require("../middleware/verify.middleware.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var route = (0, _express.Router)();
route.post("/", _verifyMiddleware["default"].verifyToken, _pollController["default"].createPoll);
route.get("/", _verifyMiddleware["default"].verifyToken, _pollController["default"].getAllPolls);
route.get("/:id", _verifyMiddleware["default"].verifyToken, _pollController["default"].getPollById);
route.patch("/:id/lock", _verifyMiddleware["default"].verifyToken, _verifyMiddleware["default"].checkAdmin, _pollController["default"].lock);
route.patch("/:id/unlock", _verifyMiddleware["default"].verifyToken, _verifyMiddleware["default"].checkAdmin, _pollController["default"].unlock);
route.post("/:id/option", _verifyMiddleware["default"].verifyToken, _verifyMiddleware["default"].checkAdmin, _pollController["default"].addOption);
route["delete"]("/:id/option/:optionId", _verifyMiddleware["default"].verifyToken, _verifyMiddleware["default"].checkAdmin, _pollController["default"].removeOption);
route.post('/:id/vote', _verifyMiddleware["default"].verifyToken, _verifyMiddleware["default"].checkUser, _pollController["default"].vote);
route["delete"]('/:id/unvote', _verifyMiddleware["default"].verifyToken, _verifyMiddleware["default"].checkUser, _pollController["default"].unvote);
route["delete"]("/:id", _pollController["default"].deletePoll);
var _default = exports["default"] = route;