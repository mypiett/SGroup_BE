"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _pollModel = _interopRequireDefault(require("../model/poll.model.js"));
var _userModel = _interopRequireDefault(require("../model/user.model.js"));
var _mongodb = require("mongodb");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PollService = /*#__PURE__*/function () {
  function PollService() {
    _classCallCheck(this, PollService);
  }
  return _createClass(PollService, [{
    key: "createPoll",
    value: function () {
      var _createPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _pollModel["default"].createPoll(data);
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function createPoll(_x) {
        return _createPoll.apply(this, arguments);
      }
      return createPoll;
    }()
  }, {
    key: "getAllPolls",
    value: function () {
      var _getAllPolls = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(page, limit) {
        var _yield$pollModel$getA, polls, total, formattedPolls;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _pollModel["default"].getAllPolls(page, limit);
            case 2:
              _yield$pollModel$getA = _context3.sent;
              polls = _yield$pollModel$getA.polls;
              total = _yield$pollModel$getA.total;
              _context3.next = 7;
              return Promise.all(polls.map(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(poll) {
                  var _poll$creator;
                  var votesCount, creatorData, creatorId, user;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        votesCount = poll.options.reduce(function (sum, opt) {
                          return sum + (opt.votes || 0);
                        }, 0);
                        creatorData = {
                          id: "",
                          username: ""
                        };
                        creatorId = (poll === null || poll === void 0 || (_poll$creator = poll.creator) === null || _poll$creator === void 0 ? void 0 : _poll$creator.id) || (poll === null || poll === void 0 ? void 0 : poll.creator);
                        if (!(creatorId && _mongodb.ObjectId.isValid(creatorId.toString()))) {
                          _context2.next = 8;
                          break;
                        }
                        _context2.next = 6;
                        return _userModel["default"].getUserById(creatorId.toString());
                      case 6:
                        user = _context2.sent;
                        if (user) {
                          creatorData = {
                            id: user._id.toString(),
                            username: user.name || user.username
                          };
                        }
                      case 8:
                        return _context2.abrupt("return", {
                          id: poll._id.toString(),
                          title: poll.title,
                          description: poll.description,
                          options: poll.options.map(function (opt) {
                            return {
                              id: opt._id.toString(),
                              text: opt.text
                            };
                          }),
                          creator: creatorData,
                          isLocked: poll.isLocked,
                          createdAt: poll.createdAt,
                          expiresAt: poll.expiresAt || null,
                          votesCount: votesCount
                        });
                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x4) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 7:
              formattedPolls = _context3.sent;
              return _context3.abrupt("return", {
                polls: formattedPolls,
                total: total,
                page: page,
                limit: limit
              });
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function getAllPolls(_x2, _x3) {
        return _getAllPolls.apply(this, arguments);
      }
      return getAllPolls;
    }()
  }, {
    key: "getPollById",
    value: function () {
      var _getPollById = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
        var _poll$creator2;
        var poll, totalVotes, creatorData, creatorId, user, optionsWithUserInfo;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _pollModel["default"].getPollById(id);
            case 2:
              poll = _context6.sent;
              if (poll) {
                _context6.next = 5;
                break;
              }
              return _context6.abrupt("return", null);
            case 5:
              totalVotes = poll.options.reduce(function (sum, opt) {
                return sum + (opt.votes || 0);
              }, 0);
              creatorData = {
                id: "",
                username: ""
              };
              creatorId = (poll === null || poll === void 0 || (_poll$creator2 = poll.creator) === null || _poll$creator2 === void 0 ? void 0 : _poll$creator2.id) || (poll === null || poll === void 0 ? void 0 : poll.creator);
              if (!(creatorId && _mongodb.ObjectId.isValid(creatorId.toString()))) {
                _context6.next = 13;
                break;
              }
              _context6.next = 11;
              return _userModel["default"].getUserById(creatorId.toString());
            case 11:
              user = _context6.sent;
              if (user) {
                creatorData = {
                  id: user._id.toString(),
                  username: user.name || user.username
                };
              }
            case 13:
              _context6.next = 15;
              return Promise.all(poll.options.map(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(opt) {
                  var users;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return Promise.all((opt.userVote || []).map(/*#__PURE__*/function () {
                          var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userId) {
                            var user;
                            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                              while (1) switch (_context4.prev = _context4.next) {
                                case 0:
                                  if (_mongodb.ObjectId.isValid(userId.toString())) {
                                    _context4.next = 2;
                                    break;
                                  }
                                  return _context4.abrupt("return", null);
                                case 2:
                                  _context4.next = 4;
                                  return _userModel["default"].getUserById(userId.toString());
                                case 4:
                                  user = _context4.sent;
                                  return _context4.abrupt("return", user ? {
                                    id: user._id.toString(),
                                    name: user.name || user.username
                                  } : null);
                                case 6:
                                case "end":
                                  return _context4.stop();
                              }
                            }, _callee4);
                          }));
                          return function (_x7) {
                            return _ref3.apply(this, arguments);
                          };
                        }()));
                      case 2:
                        users = _context5.sent;
                        return _context5.abrupt("return", {
                          id: opt._id.toString(),
                          text: opt.text,
                          votes: opt.votes || 0,
                          userVote: users.filter(Boolean)
                        });
                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function (_x6) {
                  return _ref2.apply(this, arguments);
                };
              }()));
            case 15:
              optionsWithUserInfo = _context6.sent;
              return _context6.abrupt("return", {
                id: poll._id.toString(),
                title: poll.title,
                description: poll.description,
                options: optionsWithUserInfo,
                creator: creatorData,
                isLocked: poll.isLocked,
                createdAt: poll.createdAt,
                expiresAt: poll.expiresAt || null,
                totalVotes: totalVotes
              });
            case 17:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function getPollById(_x5) {
        return _getPollById.apply(this, arguments);
      }
      return getPollById;
    }()
  }, {
    key: "deletePoll",
    value: function () {
      var _deletePoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(pollId) {
        var poll;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _pollModel["default"].getPollById(pollId);
            case 2:
              poll = _context7.sent;
              if (poll) {
                _context7.next = 5;
                break;
              }
              throw new Error("Poll ".concat(pollId, " not found"));
            case 5:
              _context7.next = 7;
              return _pollModel["default"].deletePoll(pollId);
            case 7:
              return _context7.abrupt("return", _context7.sent);
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function deletePoll(_x8) {
        return _deletePoll.apply(this, arguments);
      }
      return deletePoll;
    }()
  }, {
    key: "lockPoll",
    value: function () {
      var _lockPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(id) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _pollModel["default"].updatePoll(id, {
                isLocked: true
              });
            case 2:
              return _context8.abrupt("return", _context8.sent);
            case 3:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function lockPoll(_x9) {
        return _lockPoll.apply(this, arguments);
      }
      return lockPoll;
    }()
  }, {
    key: "unlockPoll",
    value: function () {
      var _unlockPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _pollModel["default"].updatePoll(id, {
                isLocked: false
              });
            case 2:
              return _context9.abrupt("return", _context9.sent);
            case 3:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function unlockPoll(_x10) {
        return _unlockPoll.apply(this, arguments);
      }
      return unlockPoll;
    }()
  }, {
    key: "addOption",
    value: function () {
      var _addOption = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(pollId, text) {
        var poll;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _pollModel["default"].getPollById(pollId);
            case 2:
              poll = _context10.sent;
              if (poll) {
                _context10.next = 5;
                break;
              }
              throw new Error("Poll ".concat(pollId, " not found"));
            case 5:
              _context10.next = 7;
              return _pollModel["default"].addOption(pollId, text);
            case 7:
              return _context10.abrupt("return", _context10.sent);
            case 8:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function addOption(_x11, _x12) {
        return _addOption.apply(this, arguments);
      }
      return addOption;
    }()
  }, {
    key: "removeOption",
    value: function () {
      var _removeOption = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(pollId, optionId) {
        var poll, exists;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return _pollModel["default"].getPollById(pollId);
            case 2:
              poll = _context11.sent;
              if (poll) {
                _context11.next = 5;
                break;
              }
              throw new Error("Poll not found");
            case 5:
              exists = poll.options.some(function (opt) {
                return opt._id.toString() === optionId;
              });
              if (exists) {
                _context11.next = 8;
                break;
              }
              throw new Error("Option ".concat(optionId, " does not exist in poll ").concat(pollId));
            case 8:
              _context11.next = 10;
              return _pollModel["default"].removeOption(pollId, optionId);
            case 10:
              return _context11.abrupt("return", _context11.sent);
            case 11:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function removeOption(_x13, _x14) {
        return _removeOption.apply(this, arguments);
      }
      return removeOption;
    }()
  }, {
    key: "vote",
    value: function () {
      var _vote = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(pollId, optionIds, userId) {
        var poll, _iterator, _step, _loop;
        return _regeneratorRuntime().wrap(function _callee12$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return _pollModel["default"].getPollById(pollId);
            case 2:
              poll = _context13.sent;
              if (poll) {
                _context13.next = 5;
                break;
              }
              throw new Error("Poll not found");
            case 5:
              if (!poll.isLocked) {
                _context13.next = 7;
                break;
              }
              throw new Error("Poll is locked. Voting is not allowed.");
            case 7:
              _iterator = _createForOfIteratorHelper(optionIds);
              _context13.prev = 8;
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                var _option$userVote;
                var optionId, index, option, alreadyVoted;
                return _regeneratorRuntime().wrap(function _loop$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      optionId = _step.value;
                      index = poll.options.findIndex(function (opt) {
                        return opt._id.toString() === optionId;
                      });
                      if (!(index === -1)) {
                        _context12.next = 4;
                        break;
                      }
                      throw new Error("Option ".concat(optionId, " is not valid for this poll"));
                    case 4:
                      option = poll.options[index];
                      alreadyVoted = (_option$userVote = option.userVote) === null || _option$userVote === void 0 ? void 0 : _option$userVote.some(function (u) {
                        return u.toString() === userId;
                      });
                      if (!alreadyVoted) {
                        _context12.next = 8;
                        break;
                      }
                      throw new Error("User has already voted for option ".concat(optionId));
                    case 8:
                      ;
                      poll.options[index].votes = (option.votes || 0) + 1;
                      poll.options[index].userVote = [].concat(_toConsumableArray(option.userVote || []), [new _mongodb.ObjectId(userId)]);
                    case 11:
                    case "end":
                      return _context12.stop();
                  }
                }, _loop);
              });
              _iterator.s();
            case 11:
              if ((_step = _iterator.n()).done) {
                _context13.next = 15;
                break;
              }
              return _context13.delegateYield(_loop(), "t0", 13);
            case 13:
              _context13.next = 11;
              break;
            case 15:
              _context13.next = 20;
              break;
            case 17:
              _context13.prev = 17;
              _context13.t1 = _context13["catch"](8);
              _iterator.e(_context13.t1);
            case 20:
              _context13.prev = 20;
              _iterator.f();
              return _context13.finish(20);
            case 23:
              _context13.next = 25;
              return _pollModel["default"].updatePollOptions(pollId, poll.options);
            case 25:
              return _context13.abrupt("return", _context13.sent);
            case 26:
            case "end":
              return _context13.stop();
          }
        }, _callee12, null, [[8, 17, 20, 23]]);
      }));
      function vote(_x15, _x16, _x17) {
        return _vote.apply(this, arguments);
      }
      return vote;
    }()
  }, {
    key: "unvote",
    value: function () {
      var _unvote = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(pollId, optionId, userId) {
        var poll, optionIndex, option, userIndex;
        return _regeneratorRuntime().wrap(function _callee13$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return _pollModel["default"].getPollById(pollId);
            case 2:
              poll = _context14.sent;
              if (poll) {
                _context14.next = 5;
                break;
              }
              throw new Error("Poll not found");
            case 5:
              if (!poll.isLocked) {
                _context14.next = 7;
                break;
              }
              throw new Error("Poll is locked. Voting is not allowed.");
            case 7:
              optionIndex = poll.options.findIndex(function (opt) {
                return opt._id.toString() === optionId;
              });
              if (!(optionIndex === -1)) {
                _context14.next = 10;
                break;
              }
              throw new Error("Option not found");
            case 10:
              option = poll.options[optionIndex];
              userIndex = option.userVote.findIndex(function (uid) {
                return uid.toString() === userId;
              });
              if (!(userIndex === -1)) {
                _context14.next = 14;
                break;
              }
              throw new Error("User has not voted for this option");
            case 14:
              option.votes = Math.max(0, option.votes - 1);
              option.userVote.splice(userIndex, 1);
              poll.options[optionIndex] = option;
              _context14.next = 19;
              return _pollModel["default"].updatePollOptions(pollId, poll.options);
            case 19:
              return _context14.abrupt("return", _context14.sent);
            case 20:
            case "end":
              return _context14.stop();
          }
        }, _callee13);
      }));
      function unvote(_x18, _x19, _x20) {
        return _unvote.apply(this, arguments);
      }
      return unvote;
    }()
  }]);
}();
var _default = exports["default"] = new PollService();