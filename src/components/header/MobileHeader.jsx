import React, { Fragment } from 'react';
import {
  Link,
  useLocation
} from 'react-router-dom';
import style from './styleSheet';
import { GiHamburgerMenu } from 'react-icons/gi';
import useClickOutsideToCloseMenu from '../../hooks/useClickOutsideToCloseMenu';
import headerItems from '../../data/headerItems';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const loc = useLocation();



  const addUnderlineToCurrentPage = (location, page) => {
    if (location === page) return style.currentPage;
    return style.link;
  };

  const renderHeaderItems = () => {
    return (
      Object.entries(headerItems).map(([key, value]) => (
        <Fragment key={key} >
          <Link id={`${value.name}-nav-link`} style={addUnderlineToCurrentPage(loc.pathname, value.path)} to={value.path} onClick={() => setIsMenuOpen(false)}>{value.name}
          </Link>
        </Fragment>))
    );
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
        <Link to={headerItems.home.path}><div className="logo">G<span className="tilt">F</span></div></Link>
      </div>

      <GiHamburgerMenu style={{ cursor: 'pointer' }} id={'menuIcon'} size={50} onClick={() => setIsMenuOpen(state => !state)} />

    </header>

    <nav style={{ ...style.mobileNav, ...slideMenu }}>
      {renderHeaderItems()}
    </nav>
  </div>
  );
};

export default Header;
