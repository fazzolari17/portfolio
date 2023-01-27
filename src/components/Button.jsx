import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ href, buttonName, style, handleClick, invert }) => {

  const styling = invert
    ? { backgroundColor: 'var(--heder-text, #F0F8FF)', color: 'var(--header-background, #071013)' }
    : { backgroundColor: 'var(--header-background, #071013)', color: 'var(--heder-text, #F0F8FF)' };

  const componentStyle = {
    padding: '1rem 1.5rem',
    fontFamily: 'Lexend Deca, sans-serif',
    maxWidth: 'fit-content',
    backgroundColor: 'var(--hero-background, #395E66)',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '-1px 0px 38px 8px rgba(0,0,0,0.51)',
  };

  return (<div style={{ ...componentStyle, ...style, ...styling }} onClick={handleClick}>
    <a style={styling} href={href} target='_blank' rel='noreferrer' >
      {buttonName}
    </a>
  </div>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  buttonName: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  handleClick: PropTypes.func,
  invert: PropTypes.bool
};

export default Button;