import React from 'react';
import PropsTypes from 'prop-types';
import { ButtonBox } from './style';

const Button = ({ id, onClick, children, formTarget = '_self', preventDefault = true }) => {
  const handleClick = e => {
    if (preventDefault) e.preventDefault();
    if (onClick) onClick(e);
  };

  return (
    <ButtonBox id={id} className="" onClick={e => handleClick(e)} formTarget={formTarget}>
      {children}
    </ButtonBox>
  );
};

Button.propTypes = {
  id: PropsTypes.number.isRequired,
  onClick: PropsTypes.func.isRequired,
  children: PropsTypes.node.isRequired,
  formTarget: PropsTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  preventDefault: PropsTypes.bool
};

export default Button;
