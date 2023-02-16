import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './styleSheet';

const Header = () => {
  const loc = useLocation();
  const [locations, setLocations] = React.useState(loc);
  const home = '/';
  const aboutMe = '/aboutMe';
  const projects = '/projects';
  const contact = '/contact';

  React.useEffect(() => {
    setLocations(loc);
    console.log('rendered');
  }, [locations, loc]);


  const addUnderlineToCurrentPage = (location, page) => {
    if (location === page) return style.currentPage;
    return style.link;
  };

  return (
    <header data-testid='header' style={style.header}>
      <Link to={home}><div data-testid={'logoG'} className="logo">G<span data-testid={'logoF'} className="tilt">F</span></div></Link>
      <nav style={style.nav}>
        <Link style={addUnderlineToCurrentPage(loc.pathname, home)} to={home} onClick={() => setLocations(loc)}>Home</Link>
        <Link style={addUnderlineToCurrentPage(loc.pathname, aboutMe)} to={aboutMe} onClick={() => setLocations(loc)}>About Me</Link>
        <Link style={addUnderlineToCurrentPage(loc.pathname, projects)} to={projects} onClick={() => setLocations(loc)}>Projects</Link>
        <Link style={addUnderlineToCurrentPage(loc.pathname, contact)} to={contact} onClick={() => setLocations(loc)}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
