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
import { capitalized } from '../../util/helperFunctions';
import HomePage from './dashboard pages/Home';
import MileagePage from './dashboard pages/Mileage';
import { Link } from 'react-router-dom';
// import headerItems from '../../data/headerItems';
// import GFLogo from '../Logo';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentPage, setCurrentPage] = React.useState('home');
  const { logout } = useAuth();

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
    sidebar: {
      width: '250px',
      backgroundColor: '#1e293b',
      color: 'white',
      height: '100%',
      transition: 'margin-left 0.3s ease-in-out',
      marginLeft: isOpen ? '0' : '-250px', // This creates the slide effect
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      borderBottom: '1px solid #334155',
    },
    nav: {
      flex: 1,
      paddingTop: '20px',
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 20px',
      color: '#cbd5e1',
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
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
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


  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
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
                  onClick={value.name === 'logout' ? handleLogout : () => setCurrentPage(() => value.name)}
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
          <span style={{ marginLeft: '20px', fontWeight: '500' }}>{`${capitalized(currentPage)} Dashboard`}</span>
        </header>

        <main style={styles.contentArea}>
          {renderCurrentPage(currentPage, dashboardMenuItems)}
          {/* <h2>Welcome to your Dashboard</h2>
          <p>The sidebar is currently {isOpen ? 'Visible' : 'Hidden'}.</p> */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
