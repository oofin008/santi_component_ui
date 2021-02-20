"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MiniCard = function MiniCard(props) {
  var title = props.title,
      content = props.content;
  return /*#__PURE__*/_react["default"].createElement(_style.MiniCardBox, {
    className: "MiniCardBox"
  }, /*#__PURE__*/_react["default"].createElement("time", {
    dateTime: Date.now(),
    title: "test"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "Job"), " on Jan 2020"), /*#__PURE__*/_react["default"].createElement("h2", null, title), /*#__PURE__*/_react["default"].createElement("p", null, content));
};

var MiniCardGrid = function MiniCardGrid(props) {
  var data = props.data,
      theme = props.theme;
  return /*#__PURE__*/_react["default"].createElement(_style.MiniCardGridContainer, null, /*#__PURE__*/_react["default"].createElement(_style.MiniCardGridBox, {
    className: "MiniCardGrid"
  }, data.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(MiniCard, {
      title: item.title,
      content: item.content
    }));
  })));
};

var string = _propTypes["default"].string,
    number = _propTypes["default"].number,
    arrayOf = _propTypes["default"].arrayOf,
    exact = _propTypes["default"].exact;
var dataObject = exact({
  title: string,
  content: string,
  startDate: string,
  endDate: string,
  clientName: string,
  teamSize: number
});
MiniCardGrid.propTypes = {
  data: arrayOf(dataObject).isRequired,
  theme: string
};
var _default = MiniCardGrid;
exports["default"] = _default;