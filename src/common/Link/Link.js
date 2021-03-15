import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, onClick, children, target = '_self', preventDefault = true }) => {
  const handleClick = (e, href) => {
    if (preventDefault) e.preventDefault();
    if (onClick) onClick(href, e);
  };

  return (
    <a href={href} onClick={e => handleClick(e, href)} target={target}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  preventDefault: PropTypes.bool
};

export default Link;
