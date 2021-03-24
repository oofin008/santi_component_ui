"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonBox = _styledComponents["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  border-radius: 37px;\n  border-color: #ff7a18;\n  color: white;\n  font-size: inherit;\n  background: #ff7a18;\n\n  &:active,:focus {\n    border-box: none;\n    outline: none;\n  }\n"])), function (props) {
  return props.width ? props.width : 'inherit';
}, function (props) {
  return props.height ? props.height : 'inherit';
});

exports.ButtonBox = ButtonBox;