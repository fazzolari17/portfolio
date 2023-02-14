import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './styleSheet';
import { uppercase } from '../../util/helperFunctions';
import useViewport from '../../hooks/useViewport';

const Project = ({ title, imageSource, _hostedUrl, id }) => {
  const { width, isMobile } = useViewport();

  const transformText = width < 561 ? { transform: 'scale(.75)' } : '';

  const mobileStyles = isMobile ? { width: '100%' } : '';


  const imageStyle = isMobile ? { ...style.mobileImg } : { ...style.img };

  return (
    <div style={{ ...style.flexCenter, ...mobileStyles }}>
      <h2 style={{ ...style.projectTitle, ...transformText }}>{uppercase(title)}</h2>
      <Link style={{ ...style.flexCenter }} to={`/projects/${id}`}>
        <img style={imageStyle} src={imageSource} alt='screenshot of project' />
      </Link>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  imageSource: PropTypes.string,
  _hostedUrl: PropTypes.string,
  id: PropTypes.string
};

export default Project;