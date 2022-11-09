import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from './../logo.svg';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          My github is at
        </p>
        <a
          className="App-link"
          href="https://github.com/VishnuRaja98"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <p>
          And Linkedln
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/vishnu-raja-637ba8183/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedln
        </a>
        
      <NavLink to="/emailverified">purpose</NavLink>
      </header>
      
    </div>
  );
};
  
export default Home;