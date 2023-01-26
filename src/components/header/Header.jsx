import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './styleSheet';

const Header = () => {
  const loc = useLocation();
  const home = '/';
  const aboutMe = '/aboutMe';
  const projects = '/projects';
  const contact = '/contact';



  const addUnderlineToCurrentPage = (location, page) => {
    if (location === page) return style.currentPage;
    return style.link;
  };

  return (
    <header style={style.header}>
      <Link to={home}><div className="logo">G<span className="tilt">F</span></div></Link>
      <nav>
        <Link style={addUnderlineToCurrentPage(loc.pathname, home)} to={home}>Home</Link>
        <Link style={addUnderlineToCurrentPage(loc.pathname, aboutMe)} to={aboutMe}>About Me</Link>
        <Link style={addUnderlineToCurrentPage(loc.pathname, projects)} to={projects}>Projects</Link>
        <Link style={addUnderlineToCurrentPage(loc.pathname, contact)} to={contact}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;