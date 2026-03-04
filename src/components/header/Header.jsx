import React, { Fragment, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from './styleSheet';
import headerItems from '../../data/headerItems';
import { useAuth } from '../../contexts/AuthContext';
import useClickOutsideToCloseMenu from '../../hooks/useClickOutsideToCloseMenu';
import GFLogo from '../Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import PropTypes from 'prop-types';

const Header = ({ isMobile }) => {
  const loc = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const [locations, setLocations] = useState(loc.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    setLocations(loc.pathname);

  }, [locations, loc]);


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

  const handleLogout = () => {
    try {
      const response = logout();

      if (response.data.success) {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterFn = (values) => {
    const [key] = values;
    if (isLoggedIn) {
      return key !== 'login';
    } else {
      return key !== 'logout' && key !== 'dashboard';
    }
  };

  const renderHeaderItems = () => {
    return (
      Object.entries(headerItems).filter((v) => filterFn(v)).map(([key, value]) => (
        <Fragment key={key}>
          <Link id={`${value.name}-nav-link`} style={addUnderlineToCurrentPage(loc.pathname, value.path)} to={value.path} onClick={key === 'logout' ? handleLogout : () => setLocations(loc.pathname)}>{value.name}
          </Link>
        </Fragment>))
    );
  };


  return (<div ref={applyRef}>

    <header data-testid='header' style={style.header}>
      {/* <Link to={headerItems.home.path}><div data-testid={'logoG'} className="logo">G<span data-testid={'logoF'} className="tilt">F</span></div></Link> */}
      <Link to={headerItems.home.path}><GFLogo /></Link>
      {
        isMobile
          ? <GiHamburgerMenu style={{ cursor: 'pointer' }} id={'menuIcon'} size={50} onClick={() => setIsMenuOpen(state => !state)} />
          : <></>
      }
      {!isMobile
        ? <nav style={isMobile ? { ...style.mobileNav, ...slideMenu } : style.nav}>
          {renderHeaderItems()}
        </nav>
        : <></>
      }
    </header>
    {isMobile
      ? <nav style={isMobile ? { ...style.mobileNav, ...slideMenu } : style.nav}>
        {renderHeaderItems()}
      </nav>
      : <></>
    }
  </div>
  );
};

Header.propTypes = {
  isMobile: PropTypes.string,
};

export default Header;

