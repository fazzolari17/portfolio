import React, { useState, Fragment } from 'react';
// React Router
import { Outlet, Link } from 'react-router-dom';
// Icons
import {
  Menu, X,
  // Home, BarChart2, Users, Settings, Truck, LogOut
} from 'lucide-react';
import { dashboardMenuItems } from '../../data/dashboardMenuItems';
// Contexts
import { useAuth } from '../../contexts/AuthContext';
import { useIsMobile } from '../../contexts/ViewportProvider';
// Hooks
import useClickOutsideToCloseMenu from '../../hooks/useClickOutsideToCloseMenu';
// Helper Functions
import { capitalized } from '../../util/helperFunctions';



const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { logout, verifyAuth } = useAuth();
  const { isMobile } = useIsMobile();

  const primaryColor = 'var(--header-background)';
  const secondaryColor = 'var(--header-text)';
  const secondaryWhiteColor = 'var(--secondary-white)';
  const borderColor = '#334155';


  React.useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }

    verifyAuth();
  }, [isMobile, verifyAuth]);

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      fontFamily: 'sans-serif',
      overflow: 'hidden',
    },
    menubar: {

      backgroundColor:  primaryColor,//'#1e293b',
      color: 'white',

      transition: 'transform 0.3s ease-in-out, all 0.3s ease-in-out',
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

      marginLeft: !isMobile && !isOpen ? '-250px' : '0',
      zIndex: 1000,
    },
    header: {
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: secondaryColor,
      borderBottom: `1px solid ${borderColor}`,
    },
    nav: {
      flex: 1,
      paddingTop: '20px',
      width: !isMobile && '250px'
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 20px',
      color: secondaryColor,
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'background 0.2s',
    },
    mainContent: {
      width: '100vw',
      overflow: 'scroll',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: secondaryWhiteColor,
    },
    topBar: {
      height: '60px',
      backgroundColor: isOpen && isMobile ? primaryColor : secondaryWhiteColor,
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      position: 'relative',
      zIndex: 1001, // Keep toggle button above the sliding menu
      transition: 'background-color 0.35s ease-in-out',
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
      color: isMobile ? secondaryColor : primaryColor,
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

  const renderHeaderText = () => {
    const pathname = window.location.href.split('/');

    if (pathname.at(-1) !== '' && pathname.at(-1) in dashboardMenuItems) {
      return <>
        {capitalized(pathname.at(-1))}
        {pathname.at(-1).toLowerCase() !== 'dashboard' ? ' Dashboard' : ''}
      </>;
    } else if (pathname.at(-2) in dashboardMenuItems) {
      return <>
        {capitalized(pathname.at(-2))}
        {pathname.at(-2).toLowerCase() !== 'dashboard' ? ' Dashboard' : ''}
      </>;
    }
  };

  const wrapperRef = React.useRef(null);
  useClickOutsideToCloseMenu(wrapperRef, setIsOpen);
  const applyRef = isOpen ? wrapperRef : null;


  return (
    <div style={styles.container} >
      {/* MENUBAR */}
      <aside style={styles.menubar} ref={applyRef}>
        <div style={{ ...styles.header, padding: '10px', textAlign: 'center' }}>
          DASHBOARD MENU
        </div>
        <nav style={styles.nav}>
          {Object.entries(dashboardMenuItems).map(([key, value]) => {
            const Icon = value.icon;
            return (
              <Fragment key={key}>
                <Link
                  onClick={value.name === 'logout' ? handleLogout : () => setIsOpen(false)}
                  to={`/dashboard/${value.name}`} style={styles.navItem}>
                  <Icon size={18} style={{ marginRight: '12px' }} />
                  {value.name}
                </Link>
              </Fragment>);
          }
          )}
        </nav>
      </aside>

      {/* MAIN SECTION */}
      <div style={styles.mainContent}>
        <header style={styles.topBar}>
          <button onClick={() => setIsOpen(!isOpen)} style={styles.toggleBtn}>
            {isMobile
              ? isOpen
                ? <X size={24} color={primaryColor} /> : <Menu size={24} color={primaryColor} />
              : <></>}
            {!isMobile
              ? isOpen
                ?
                < X size={24} color={primaryColor} />
                : <Menu size={24} color={primaryColor} />
              : <></>}
          </button>
          <span style={{
            marginLeft: '20px',
            fontWeight: '500',
            color:
              !isMobile
                ? primaryColor
                : isMobile && !isOpen
                  ? primaryColor
                  : secondaryColor }
          }>
            {renderHeaderText()}
          </span>
        </header>
        {/* Main Content Area */}
        <main style={styles.contentArea}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
