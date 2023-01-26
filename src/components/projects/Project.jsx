/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import style from './styleSheet';
import { uppercase } from '../../util/helperFunctions';
import useViewport from '../../hooks/useViewport';

const Project = ({ title, imageSource, _hostedUrl, id }) => {
  const { width, isMobile } = useViewport();

  const midBreakPoint = width < 561 ? { transform: 'scale(.75)' } : '';

  const mobileStyles = isMobile ? { ...style.mobileStyles } : '';

  const mobileStylesFlex = isMobile ? { ...style.mobileStylesFlex } : '';

  return (
    <div style={{ ...style.flexCenter, ...mobileStylesFlex }}>
      <h2 style={{ ...style.projectTitle,  ...mobileStyles, ...midBreakPoint }}>{uppercase(title)}</h2>
      <Link style={style.flexCenter} to={`/projects/${id}`}>
        <img style={style.img} src={imageSource} alt='screenshot of project' />
      </Link>
    </div>
  );
};

export default Project;