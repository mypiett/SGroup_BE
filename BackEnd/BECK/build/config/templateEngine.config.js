"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var templateEngineConfig = function templateEngineConfig(app, rootDir) {
  app.set('view engine', 'ejs');
  app.set('views', _path["default"].join(rootDir, 'views'));
};
var _default = exports["default"] = templateEngineConfig;