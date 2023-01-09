import React from 'react';
import Navbar from '../components/Navbar';
// import logo from './../logo.svg';
import githublogo from './../images/github-mark.png';
import linkedinlogo from './../images/linkedinlogo.png'
import gmaillogo from './../images/gmail.png'
import myface from './../images/my_photo.jpg'


const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <div className="content">
        <div class="tablesection tablesection33">
          <div className='sectiondata'>
            <div className='facecard'>
              <div><div className='namearea'>Vishnu Raja</div>
              <div className='employmentarea'>Freelance Developer</div></div>
              <div className='myimagearea'><img src={myface} className="circle-image" alt="my face" /></div>
              <div className='qualificationsarea'><div>B.E. (Computer)</div><div><a href='https://pict.edu/' target="_blank" rel="noopener noreferrer">PICT</a>, Pune (<a href='http://www.unipune.ac.in/' target="_blank" rel="noopener noreferrer">SPPU</a>)</div></div>
            </div>
          </div>
          <div className='sectiondata'>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className='iconbar'>
              <a
                  className="App-link"
                  href="https://github.com/VishnuRaja98"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <img className='socialicon' src={githublogo} alt="Github"></img>
              </a>
              <a
                  className="App-link"
                  href="https://www.linkedin.com/in/vishnu-raja-637ba8183/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <img className='socialicon' src={linkedinlogo} alt="LinkedIn"></img>
              </a>
              <a href="mailto:vishnu1234raja@gmail.com">
                <img className='socialicon' src={gmaillogo} alt="Mail"></img>
              </a>
            </div>
          </div>
        </div>
        
        <div class="tablesection tablesection66">
          <div className='sectiondata'>
            <h2>About me</h2>
            <p>
            Avid coder currently interested in Artificial intelligence - mainly Game AI and Creative AI.
            </p>
            <p>
              Experienced in Python, C++, Javascript and currently a freelance Developer
            </p>
          </div>
          <div className='sectiondata'>
            <h2>Research Interests</h2>
            <ul>
            <li>
              Deep Learning Models and their Mathematical Significance
            </li>
            <li>
              Artificial intelligence for Games as Creative applications
            </li>
            <li>
              Interactive neural systems
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Home;