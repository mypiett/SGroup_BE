"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userController = _interopRequireDefault(require("../controller/user.controller.js"));
var _validateMiddleware = _interopRequireDefault(require("../middleware/validate.middleware.js"));
var _verifyMiddleware = _interopRequireDefault(require("../middleware/verify.middleware.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var route = (0, _express.Router)();
route.put("/updateMe", _verifyMiddleware["default"].verifyToken, _userController["default"].updateMyProfile);
route.get("/getMe", _verifyMiddleware["default"].verifyToken, _userController["default"].getMe);
route.get("/", _verifyMiddleware["default"].verifyToken, _verifyMiddleware["default"].checkAdmin, _userController["default"].getAllUsers);
route.get("/:id", _verifyMiddleware["default"].verifyToken, _verifyMiddleware["default"].checkAdmin, _userController["default"].getUserById);
route.put("/:id", _verifyMiddleware["default"].verifyToken, _verifyMiddleware["default"].checkAdmin, _userController["default"].updateUser);
route["delete"]("/:id", _verifyMiddleware["default"].verifyToken, _verifyMiddleware["default"].checkAdmin, _userController["default"].deleteUser);
route.post("/register", _validateMiddleware["default"].validateName, _validateMiddleware["default"].validateEmail, _userController["default"].register);
route.post("/login", _validateMiddleware["default"].validateEmail, _userController["default"].login);
route.post('/forgot-password', _validateMiddleware["default"].validateEmail, _userController["default"].forgotPassword);
route.post('/reset-password', _validateMiddleware["default"].validateEmail, _userController["default"].resetPassword);
var _default = exports["default"] = route;