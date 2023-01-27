import React from 'react';
import PropTypes from 'prop-types';
import componentStyle from './aboutMe/styleSheet';

const Section = ({ children, invert, style, className }) => {

  const backgroundStyle = invert ? { ...componentStyle.invert, ...componentStyle.flex } : componentStyle.flex;

  return (
    <section style={{ ...backgroundStyle, ...componentStyle.sectionWidth, ...style }} className={className}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.element,
  invert: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string
};

export default Section;
