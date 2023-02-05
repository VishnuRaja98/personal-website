import React from 'react';
import Navbar from '../components/Navbar';
import Expbar from '../components/Experiencebar';
// import logo from './../logo.svg';
import githublogo from './../images/github-mark.png';
import linkedinlogo from './../images/linkedinlogo.png'
import gmaillogo from './../images/gmail.png'
import myface from './../images/myphoto1.jpg'


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
              <div><a className='namearea' href='https://docs.google.com/document/d/1Kxrm5f1k4Uos4twW_EfHbOK616Q7SN8x2gfoAvKdb4w/edit?usp=sharing' target='_blank'>Vishnu Raja</a>
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
        
        <div className="tablesection tablesection66">
          <div className='sectiondata'>
            <h2>About me</h2>
            <p>
            I am a computer scientist with a background in engineering and experience working in a startup in the software industry. 
            My goal is to deepen my understanding of AI and become a researcher and educator in this field. 
            I have a strong foundation in computer science, specifically ML and AI, and hope to further develop these skills through graduate studies. 
            During my undergraduate studies, I became interested in ML and AI through a video on Game AI, and have continued to study these areas through various projects and work experiences. 
            My senior year project was focused on liquidity prediction using ML, and I have also worked as a full-stack developer and data scientist at a startup. 
            I have also pursued personal projects, including developing a game with an AI mode. I am eager to continue my studies and contribute to the field of AI research.            
            </p>
          </div>
          <div className='sectiondata'>
            <h2>Current Research Interests</h2>
            <ul>
            <li>
              Deep Learning Models and their Mathematical Significance
            </li>
            <li>
              Artificial intelligence for Games and Creative applications
            </li>
            <li>
              Interactive neural systems
            </li>
            </ul>
          </div>
        </div>

        <div className="tablesection tablesection100">
          <div className='sectiondata'>
            <h2>Experience</h2>
              <Expbar
                startDate={"Sep 2022"}
                endDate={"Current"}
                org={"Vaultize, North18 Systems"}
                position={"Freelance Developer"}
                description={<p>Making enhancements to a Digital Rights Management Platform using Python and MongoDb.</p>}
              />
              <Expbar
                startDate={"Aug 2020"}
                endDate={"Sep 2022"}
                org={"ElasticRun"}
                position={"Engineer"}
                description={<p>Worked in a fast paced environment and held roles of Full-Stack Developer, Data Scientist for a project - Kredit
                <ul>
                <li>Developed and Owned multiple modules of the application that catered to lakhs of customers</li>
                <li>Contributed multiple features to the Frappe framework using monkey patching</li>
                <li>Created data reconciliation framework for identifying and fixing data issues</li>
                <li>Provided data insights to relevant stakeholders by developing Reports, Dashboards and ETL pipelines</li>
                <li>Used Docker, Kubernetes, Gitlab and JIRA to provide effective CI/CD pipeline</li>
                </ul>
                <i>Note: Internship from Aug 2020 to Dec 2020</i>
                </p>}
              />
              <Expbar
                startDate={"Aug 2019"}
                endDate={"Oct 2019"}
                org={"Ador Powertron Ltd"}
                position={"Software Development Intern"}
                description={<p>Worked on a project titled ‘Ador Harmony: Fixed Speed Enforcement’. 
                As a part of it - developed web application for speed enforcement system and worked on the SDK of the camera used in the project
                </p>}
              />
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Home;