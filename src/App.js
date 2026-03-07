import React from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './App.css';
// Components
import Header from './components/header/Header';
import Home from './components/home/Index';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import AboutMe from './components/aboutMe/AboutMe';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import ProjectDetail from './components/projects/ProjectDetail';
import ProtectedRoute from './components/ProtectedRoutes';
import MobileProjects from './components/projects/MobileProjects';
import PageNotFound from './components/PageNotFound';
// Contexts
import { useAuth } from './contexts/AuthContext';
import { useIsMobile } from './contexts/ViewportProvider';
// Data
import { dashboardMenuItems } from './data/dashboardMenuItems';


function App() {
  const { isMobile } = useIsMobile();
  const { setIsLoggedIn, isLoggedIn, verifyAuth } = useAuth();
  const loc = useLocation();
  const [formState, setFormState] = React.useState({ state: 'notSubmitted' });

  React.useEffect(() => {
    verifyAuth();
  }, [verifyAuth]);

  const renderDashboardRoutes = (dashboardMenuItems) => {
    return Object.entries(dashboardMenuItems).filter(([key, value]) => value.component ? [key, value] : null).map(([key, value]) => {
      return <Route key={key} path={value.name} element={value.component } />;
    });
  };

  return (
    <main>

      <div className='app-container'>
        {isLoggedIn && loc.pathname.includes('/dashboard') ? (
          <></>
        ) : (
          <Header
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            isMobile={isMobile}
          />
        )}
        <div className='content-area'>
          <Routes>
            <Route path='/projects/:id' element={<ProjectDetail />} />
            <Route
              path='/projects'
              element={isMobile ? <MobileProjects /> : <Projects />}
            />
            <Route path='/aboutMe' element={<AboutMe />} />
            <Route
              path='/contact'
              element={
                <Contact formState={formState} setFormState={setFormState} />
              }
            />
            <Route
              path='/login'
              element={
                <Login
                  formState={formState}
                  setFormState={setFormState}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route path='/' element={<Home />} />

            {/* PROTECTED ROUTES */}
            <Route element={<ProtectedRoute />}>

              {/* DASHBOARD ROUTES */}
              <Route path='/dashboard/*' element={<Dashboard />}>
                {renderDashboardRoutes(dashboardMenuItems)}
                <Route path='*' element={<PageNotFound />} />
              </Route>

            </Route>

            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default App;
