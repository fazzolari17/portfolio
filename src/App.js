import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import AboutMe from './components/aboutMe/AboutMe';
import Footer from './components/footer/Footer';
import ProjectDetail from './components/projects/ProjectDetail';

import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';



function App() {


  return (
    <main>
      <Router>
        <Header />
  
        <Routes>
          <Route path='/projects/:id' element={<ProjectDetail />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/aboutMe' element={<AboutMe />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/' element={<Home />} />
        </Routes>

      </Router>
      <Footer />
    </main>
  );
}

export default App;
