"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLazyLoad = _interopRequireDefault(require("react-lazy-load"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = function Card(props) {
  return /*#__PURE__*/_react["default"].createElement(_style.CardBox, null, /*#__PURE__*/_react["default"].createElement(_reactLazyLoad["default"], {
    debounce: false
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)), /*#__PURE__*/_react["default"].createElement(_style.Title, null, "Test"));
};

var string = _propTypes["default"].string;
Card.propsTypes = {
  title: string,
  imageSrc: string,
  content: string
};
var _default = Card;
exports["default"] = _default;