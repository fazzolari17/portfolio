/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
// Note: You can replace these with plain text if you don't have lucide-react installed
import {
  Menu, X,
  Home, BarChart2, Users, Settings, Truck, LogOut,
} from 'lucide-react';
import { Fragment } from 'react';
// import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import useViewport from '../../hooks/useViewport';
import { capitalized } from '../../util/helperFunctions';
import HomePage from './dashboard pages/Home';
import MileagePage from './dashboard pages/Mileage';
import { Link } from 'react-router-dom';
import useClickOutsideToCloseMenu from '../../hooks/useClickOutsideToCloseMenu';
// import headerItems from '../../data/headerItems';
// import GFLogo from '../Logo';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentPage, setCurrentPage] = React.useState('home');
  const { logout } = useAuth();
  const { isMobile } = useViewport();
  const navItemsColor = '#cbd5e1';

  React.useEffect(() => {
    // This runs whenever isMobile changes
    if (isMobile) {
      setIsOpen(false); // Close it automatically on mobile
    } else {
      setIsOpen(true);  // Keep it open on desktop
    }
  }, [isMobile]);

  const dashboardMenuItems = {
    home: {
      name: 'home',
      icon: Home,
      page: <HomePage></HomePage>
    },
    analystics: {
      name: 'analytics',
      icon: BarChart2
    },
    team: {
      name: 'team',
      icon: Users
    },
    mileage: {
      name: 'mileage',
      icon: Truck,
      page: <MileagePage></MileagePage>
    },
    settings: {
      name: 'settings',
      icon: Settings
    },
    logout: {
      name: 'logout',
      icon: LogOut
    }
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      fontFamily: 'sans-serif',
      overflow: 'hidden',
    },
    menubar: {
      // width: '250px',
      backgroundColor: '#1e293b',
      color: 'white',
      // height: '100%',
      transition: 'margin-left 0.3s ease-in-out',
      // marginLeft: isOpen ? '0' : '-250px', // This creates the slide effect
      display: 'flex',
      flexDirection: 'column',
      // Mobile (Top Slide) vs Desktop (Side Slide)
      position: isMobile ? 'fixed' : 'relative',
      width: isMobile ? '100vw' : '250px',
      height: isMobile ? 'auto' : '100%',
      left: 0,
      top: 0,
      // Slide logic
      transform: isOpen
        ? 'translate(0, 0)'
        : (isMobile ? 'translateY(-100%)' : 'translateX(-250px)'),
      // Ensure it doesn't leave a gap on desktop when closed
      marginLeft: !isMobile && !isOpen ? '-250px' : '0',
    },
    header: {
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'white',
      borderBottom: '1px solid #334155',
    },
    nav: {
      flex: 1,
      paddingTop: '20px',
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'flex-start',
      padding: '12px 20px',
      color: navItemsColor,
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'background 0.2s',
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f8fafc',
    },
    topBar: {
      height: '60px',
      backgroundColor: isOpen && isMobile ? '#1e293b' : 'f0f8ff',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      position: 'relative',
      zIndex: 1001, // Keep toggle button above the sliding menu
    },
    toggleBtn: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: isMobile ? navItemsColor : 'black',
    },
    contentArea: {
      padding: '30px',
      flex: 1,
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await logout();

    if (response.data.success) {
      window.location.href = '/login';
    }
  };

  const renderCurrentPage = (currentPage, dashboardMenuItems) => {
    return dashboardMenuItems[currentPage].page;
  };

  const handleMenuItemClick = (event, value) => {
    if (value.name === 'logout') {
      return handleLogout(event);
    } else {
      setCurrentPage(() => value.name);
      if (isMobile) {
        setIsOpen(false);
      }
      return ;
    }
  };

  const wrapperRef = React.useRef(null);
  useClickOutsideToCloseMenu(wrapperRef, setIsOpen);
  const applyRef = isOpen ? wrapperRef : null;


  return (
    <div style={styles.container} >
      {/* MENUBAR */}
      <aside style={styles.menubar} ref={applyRef}>
        <div style={{ ...styles.header }}>
          <Link to={'/'} onClick={() => window.location.href('/')}>
          </Link>DASHBOARD MENU
        </div>
        <nav style={styles.nav}>
          {Object.entries(dashboardMenuItems).map(([key, value]) => {
            const Icon = value.icon;
            return (
              <Fragment key={key}>
                <a
                  href='#'
                  onClick={(e) => handleMenuItemClick(e, value)}
                  style={styles.navItem}> <Icon size={18} style={{ marginRight: '12px' }} />{value.name}</a>
              </Fragment>);
          }
          )}
        </nav>
      </aside>

      {/* MAIN SECTION */}
      <div style={styles.mainContent}>
        <header style={styles.topBar}>
          <button onClick={() => setIsOpen(!isOpen)} style={styles.toggleBtn}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <span style={{ marginLeft: '20px', fontWeight: '500', color: isMobile ? navItemsColor : 'black' }}>{`${capitalized(currentPage)} Dashboard`}</span>
        </header>

        <main style={styles.contentArea}>
          {renderCurrentPage(currentPage, dashboardMenuItems)}
          {/* <h2>Welcome to your Dashboard</h2>
          <p>The menubar is currently {isOpen ? 'Visible' : 'Hidden'}.</p> */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
