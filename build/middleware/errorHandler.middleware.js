"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var errorHandler = function errorHandler(err, req, res, next) {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  var resError = {
    statusCode: err.statusCode,
    message: err.message || "Internal Server Error",
    stack: err.stack
  };
  res.status(err.statusCode).json(resError);
};
var _default = exports["default"] = errorHandler;