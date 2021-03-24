"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = exports.Title = exports.ImageBox = exports.CardBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardBox = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 250px;\n  height: 350px;\n\n  background: linear-gradient(152.97deg, rgba(21, 21, 21, 0.2) 0%, rgba(21, 21, 21, 0) 100%);\n  backdrop-filter: blur(4l0px);\n\n  border-radius: 16px;\n  color: white;\n  position: relative;\n\n  .thumb {\n    width: 100px;\n    height: auto;\n  }\n"])));

exports.CardBox = CardBox;

var ImageBox = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 100px;\n  display: block;\n"])));

exports.ImageBox = ImageBox;

var Title = _styledComponents["default"].p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: white;\n\n"])));

exports.Title = Title;

var Content = _styledComponents["default"].article(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));

exports.Content = Content;