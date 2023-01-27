import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const ContactIcons = ({ color, style, size }) => {

  return (
    <IconContext.Provider value={style}>
      <div>

        <a href={'https://github.com/fazzolari17'} target={'_blank'} rel={'noreferrer'} aria-label={'github link'}>
          <FaGithubSquare style={style} size={size} color={color}/>
        </a>

        <a href={'https://www.linkedin.com/in/giuseppe-fazzolari'} target={'_blank'} rel={'noreferrer'} aria-label={'linkedin link'}>
          <FaLinkedin style={style} size={size} color={color}/>
        </a>

        <a href={'mailto:fazzolari17@gmail.com'} target={'_blank'} rel={'noreferrer'} aria-label={'email link'}>
          <HiOutlineMail style={style} size={size} color={color}/>
        </a>

      </div>
    </IconContext.Provider>
  );
};

ContactIcons.propTypes = {
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  size: PropTypes.string
};

export default ContactIcons;