import './App.css';
import Home from './pages';
import EmailVerified from './pages/emailverified';
import { BrowserRouter, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/emailverified' element={<EmailVerified />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
