"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Image = _interopRequireDefault(require("../../common/Image/Image"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = function Card(props) {
  var title = props.title,
      imageSrc = props.imageSrc,
      content = props.content;
  return /*#__PURE__*/_react["default"].createElement(_style.CardBox, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    imageSrc: imageSrc,
    imageAlt: title,
    imagePlaceholder: true
  })), /*#__PURE__*/_react["default"].createElement(_style.Title, null, title), /*#__PURE__*/_react["default"].createElement(_style.Content, null, content));
};

var string = _propTypes["default"].string;
Card.propsTypes = {
  title: string,
  imageSrc: string,
  content: string
};
var _default = Card;
exports["default"] = _default;