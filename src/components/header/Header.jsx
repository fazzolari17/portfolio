import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './styleSheet';
import headerItems from '../../data/headerItems';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import GFLogo from '../Logo';

const Header = () => {
  const loc = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const [locations, setLocations] = React.useState(loc.pathname);
  React.useEffect(() => {
    setLocations(loc.pathname);

  }, [locations, loc]);


  const addUnderlineToCurrentPage = (location, page) => {
    if (location === page) return style.currentPage;
    return style.link;
  };

  const handleLogout =  () => {
    try {
      const response = logout();

      if (response.data.success) {
        navigate('/home');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderHeaderItems = () => {
    return (
      Object.entries(headerItems).filter(([key, _items]) => isLoggedIn ? key !== 'login' : key !== 'logout').map(([key, value]) => (
        <Fragment key={key}>
          <Link id={`${value.name}-nav-link`} style={addUnderlineToCurrentPage(loc.pathname, value.path)} to={value.path} onClick={key === 'logout' ? handleLogout : () => setLocations(loc.pathname)}>{value.name}
          </Link>
        </Fragment>))
    );
  };


  return (
    <header data-testid='header' style={style.header}>
      {/* <Link to={headerItems.home.path}><div data-testid={'logoG'} className="logo">G<span data-testid={'logoF'} className="tilt">F</span></div></Link> */}
      <Link to={headerItems.home.path}><GFLogo/></Link>
      <nav style={style.nav}>
        {renderHeaderItems()}
      </nav>
    </header>
  );
};

export default Header;
