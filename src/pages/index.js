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
            <p>I like building things from scratch. <a href='https://youtu.be/c6pbDfmM9ZY' target="_blank" rel="noopener noreferrer">I built a raft</a> from scratch at Kodungallur - my home town. 
            I am learing the piano, starting with music theory. Will soon post a link to me playing 'River Flows in You' by Yiruma. This year,  I also played Taasha in a <a href='https://www.instagram.com/reel/CjwwcOEjAGP/?utm_source=ig_web_copy_link' target="_blank" rel="noopener noreferrer">Dhol-Taasha band</a>.
            I play most sports and am up for most outdoor and indoor activities.
            </p>
            <p>
              Mainly, I am a programmer. I have experience developing large application in Python and Javascript. I do competative coding in C++ and develop games using Unity C#. I have some experience with Machine Learning (ML) and am working towards imporving my ML skills. 
            </p>
          </div>
          <div className='sectiondata'>
            <h2>Research Interests</h2>
            <p>
              UNderstanding deep learning
            </p>
            <p>
              GAme AI Craetive AI
            </p>
            <p>
              Neural Systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Home;