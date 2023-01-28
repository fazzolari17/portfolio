import React from 'react';
import {
  Link,
  useLocation
} from 'react-router-dom';
import style from './styleSheet';
import { GiHamburgerMenu } from 'react-icons/gi';
import useClickOutsideToCloseMenu from '../../hooks/useClickOutsideToCloseMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const loc = useLocation();
  const home = '/';
  const aboutMe = '/#/aboutMe';
  const projects = '/#/projects';
  const contact = '/#/contact';



  const addUnderlineToCurrentPage = (location, page) => {
    if (location === page) return style.currentPage;
    return style.link;
  };

  const slideMenu = isMenuOpen
    ? { transform: 'translate(0)', transition: 'transform .5s ease-in-out' }
    : { transform: 'translate(0, -100%)', transition: 'transform .5s ease-in-out' };

  const wrapperRef = React.useRef(null);
  useClickOutsideToCloseMenu(wrapperRef, setIsMenuOpen);
  const applyRef = isMenuOpen ? wrapperRef : null;

  return (<div ref={applyRef}>
    <header style={style.header}>

      <div>
        <Link to={home}><div className="logo">G<span className="tilt">F</span></div></Link>
      </div>

      <GiHamburgerMenu style={{ cursor: 'pointer' }} id={'menuIcon'} size={50} onClick={() => setIsMenuOpen(state => !state)} />

    </header>

    <nav style={{ ...style.mobileNav, ...slideMenu }}>
      <Link style={addUnderlineToCurrentPage(loc.pathname, home)} to={home} onClick={() => setIsMenuOpen(false)}>Home</Link>
      <Link style={addUnderlineToCurrentPage(loc.pathname, aboutMe)} to={aboutMe} onClick={() => setIsMenuOpen(false)}>About Me</Link>
      <Link style={addUnderlineToCurrentPage(loc.pathname, projects)} to={projects} onClick={() => setIsMenuOpen(false)}>Projects</Link>
      <Link style={addUnderlineToCurrentPage(loc.pathname, contact)} to={contact} onClick={() => setIsMenuOpen(false)}>Contact</Link>
    </nav>
  </div>
  );
};

export default Header;
