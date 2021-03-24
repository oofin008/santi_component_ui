"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button(_ref) {
  var id = _ref.id,
      onClick = _ref.onClick,
      children = _ref.children,
      _ref$formTarget = _ref.formTarget,
      formTarget = _ref$formTarget === void 0 ? '_self' : _ref$formTarget,
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault;

  var handleClick = function handleClick(e) {
    if (preventDefault) e.preventDefault();
    if (onClick) onClick(e);
  };

  return /*#__PURE__*/_react["default"].createElement(_style.ButtonBox, {
    id: id,
    className: "",
    onClick: function onClick(e) {
      return handleClick(e);
    },
    formTarget: formTarget
  }, children);
};

Button.propTypes = {
  id: _propTypes["default"].number.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node.isRequired,
  formTarget: _propTypes["default"].oneOf(['_blank', '_self', '_parent', '_top']),
  preventDefault: _propTypes["default"].bool
};
var _default = Button;
exports["default"] = _default;