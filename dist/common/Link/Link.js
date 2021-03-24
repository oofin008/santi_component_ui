"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Link = function Link(_ref) {
  var href = _ref.href,
      onClick = _ref.onClick,
      children = _ref.children,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_self' : _ref$target,
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault;

  var handleClick = function handleClick(e, href) {
    if (preventDefault) e.preventDefault();
    if (onClick) onClick(href, e);
  };

  return /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    onClick: function onClick(e) {
      return handleClick(e, href);
    },
    target: target
  }, children);
};

Link.propTypes = {
  href: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node.isRequired,
  target: _propTypes["default"].oneOf(['_blank', '_self', '_parent', '_top']),
  preventDefault: _propTypes["default"].bool
};
var _default = Link;
exports["default"] = _default;