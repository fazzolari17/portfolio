import React from 'react';
import useViewport from '../../hooks/useViewport';
import ContactIcons from '../ContactIcons';
import { style } from './styleSheet';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { isMobile } = useViewport();
  const loc = useLocation().pathname;

  const mobileStyle = isMobile ? style.mobileFooter : '';
  const contactStyle = loc === `/contact` ? { position: 'fixed' } : '';

  return (
    <footer style={{ ...style.footer, ...contactStyle }}>
      <div style={{ ...style.flex, ...mobileStyle }}>
        <p style={style.marginRight}>
          Designed & Created By: Giuseppe Fazzolari ©
        </p>
        <br />
        <ContactIcons style={style.marginRight} size={'2rem'} color={'var(--header-text, #F0F8FF)'} />

      </div>
    </footer>
  );
};

export default Footer;