import useViewport from '../../hooks/useViewport';
import ContactIcons from '../contactIcons';
import { style } from './styleSheet';

const Footer = () => {
  const { isMobile } = useViewport();

  const mobileStyle = isMobile ? style.mobileFooter : '';

  return (
    <footer style={style.footer}>
      <div style={{...style.flex, ...mobileStyle}}>
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