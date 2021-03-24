"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MiniCardBox = exports.MiniCardGridBox = exports.MiniCardGridContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MiniCardGridContainer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 0;\n  place-items: center;\n  overflow: hidden;\n  display: flex;\n  background: ", ";\n  box-sizing: content-box;\n  position: relative;\n  :after {\n    content: '';\n    position: absolute;\n    right: 0;\n    top: 3rem;\n    bottom: 4rem;\n    width: 5px;\n    border-radius: 5px;\n    background: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%);\n    box-shadow: -10px 0 20px 3px #000;\n  }\n"])), function (props) {
  return props.background ? props.background : '';
});

exports.MiniCardGridContainer = MiniCardGridContainer;

var MiniCardGridBox = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 3rem 0 3rem 2rem;\n  margin: 0;\n  display: flex;\n  overflow-x: scroll;\n  positon: relative;\n  .MiniCardGrid :-webkit-scrollbar-thumb {\n    background: linear-gradient(152.97deg, rgba(21, 21, 21, 0.2) 0%, rgba(21, 21, 21, 0) 100%);\n  }\n  .MiniCardGrid :-webkit-scrollbar-track {\n    background: red;\n  }\n"])));

exports.MiniCardGridBox = MiniCardGridBox;

var MiniCardBox = _styledComponents["default"].article(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  min-width: 250px;\n  min-height: 350px;\n\n  box-shadow: -10px 0 20px 3px rgba(21,21,21,0.2);\n  background: linear-gradient(152.97deg, rgba(21, 21, 21, 0.2) 0%, rgba(21, 21, 21, 0) 100%);\n  backdrop-filter: blur(10px);\n  color: #fff;\n\n  border-radius: 1rem;\n  padding: 2rem;\n\n  transition: 0.2s;\n\n  :not(:first-child) {\n    margin-left: -5rem;\n  }\n  \n  :hover {\n    box-shadow: -10px 0 20px 3px rgba(21,21,21,0.1);\n    background: linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(21, 21, 21, 0) 100%);\n    transform: translateY(-2rem) rotate(3deg); \n\n  }\n\n  :hover ~ .MiniCardBox {\n    transform: translateX(4.5rem);\n  }\n\n  time {\n\n  }\n\n  .thumb {\n    display: block;\n    img {\n      width: 100%;\n      border-radius: 6px;\n    }\n  }\n\n  h3 {\n    display: block;\n    white-space: nowrap; \n    overflow: hidden;\n    text-overflow: ellipsis; \n  }\n\n  .tags {\n\n  }\n\n  .contents {\n\n  }\n\n"])));

exports.MiniCardBox = MiniCardBox;