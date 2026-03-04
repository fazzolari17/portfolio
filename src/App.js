import React from 'react';
import './App.css';
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
import { breakpoint } from './constants';

import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import useViewport from './hooks/useViewport';
import { useAuth } from './contexts/AuthContext';
import PageNotFound from './components/PageNotFound';

function App() {
  const { width } = useViewport();
  const [isMobile, setIsMobile] = React.useState(false);
  const { setIsLoggedIn, isLoggedIn, verifyAuth } = useAuth();
  const loc = useLocation();
  const [formState, setFormState] = React.useState({ state: 'notSubmitted' });

  React.useEffect(() => {
    if (width < breakpoint) setIsMobile(true);
    if (width > breakpoint) setIsMobile(false);
    verifyAuth();
  }, [width, verifyAuth]);

  return (
    <main>

      <div className='app-container'>
        {isLoggedIn && loc.pathname === '/dashboard' ? (
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
            <Route element={<ProtectedRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
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
