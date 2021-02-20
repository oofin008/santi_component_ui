"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = function Card() {
  return /*#__PURE__*/_react["default"].createElement(_style.CardBox, null, /*#__PURE__*/_react["default"].createElement(_style.Title, null, "Test"));
};

var _default = Card;
exports["default"] = _default;