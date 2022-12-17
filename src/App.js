import './App.css';
import Home from './pages';
import EmailVerified from './pages/emailverified';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Skills from './pages/skills';
import { BrowserRouter, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/emailverified' element={<EmailVerified />}/>
        <Route exact path='/contact' element={<Contact />}/>
        <Route exact path='/projects' element={<Projects />}/>
        <Route exact path='/skills' element={<Skills />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
