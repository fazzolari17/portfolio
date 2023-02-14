import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, style, invert, className, shadow }) => {

  const background = invert ? 'var(--header-contrastColor, #75ABBC)' : 'var(--hero-background, #395E66)';
  const textColor = invert ? 'var(--header-background, #071013)' : 'var(--header-text, #F0F8FF)';
  const boxShadow = shadow ? '-1px 0px 38px 8px rgba(0,0,0,0.51)' : '';

  const componentStyle = {
    fontFamily: 'Lexend Deca, sans-serif',
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: 'fit-content',
    backgroundColor: background,
    color: textColor,
    borderRadius: '5px',
    boxShadow: boxShadow,
  };

  return (
    <section style={{ ...componentStyle, ...style }} className={className}>
      {children}
    </section>
  );
};

Card.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
  invert: PropTypes.bool,
  className: PropTypes.string,
  shadow: PropTypes.bool
};

export default Card;