import React from 'react';
import Navbar from '../components/Navbar';
import Certificate from '../components/Certificate';
// import certificatePdf from "../pdfs/Coursera-AZPVLSL4YDZF.pdf"; 
import CertificateImageFeb24 from '../images/Coursera_SUB653ZWHH8A.png';
import CertificateImageJan23 from '../images/Coursera_AZPVLSL4YDZF.png';
import CertificateImageFeb22 from '../images/Coursera_3DLECCS8QS79.png';
import CertificateImageMay17 from '../images/Coursera_NMMR3XQ6R8N9.png';
import CertificateImageApr27 from '../images/Coursera_F7N2N8DQNV7Y.png';


const Skills = () => {

  const skills1 = [
    { name: "Python", proficiency: "Advanced" },
    { name: "JavaScript", proficiency: "Advanced" },
    { name: "C++", proficiency: "Intermediate" },
    { name: "C#", proficiency: "Intermediate" },
    { name: "Java", proficiency: "Beginner" },
  ];
  const skills2 = [
    { name: "MySQL", proficiency: "Advanced" },
    { name: "MongoDB", proficiency: "Intermediate" },
    { name: "AngularJS", proficiency: "Intermediate" },
    { name: "React", proficiency: "Beginner" }
  ];
  const skills4 = [
    { name: "Git", proficiency: "Advanced" },
    { name: "Docker", proficiency: "Beginner" },
    { name: "Kubernetes", proficiency: "Beginner" },
    { name: "Unity", proficiency: "Beginner" },
    { name: "ChatGPT to build components", proficiency: "Expert" }
  ];
  const skills3 = [
    { name: "Web Development", proficiency: "Advanced" },
    { name: "Android Development", proficiency: "Beginner" },
    { name: "Computer Vision", proficiency: "Beginner" },
    { name: "Natural Language Processing", proficiency: "Intermediate" },
    { name: "Machine Learning", proficiency: "Intermediate" },
  ];
  

  return (
    <div className="App">
    <div className="App-header">
      <Navbar></Navbar>
    </div>
    <div className="content">
    <div className='tablesection tablesection100'>
      <p>
      I have worked in various facets of Tech. 
      Sometimes i dabble in competative coding on <a href='https://www.codechef.com/users/vixhnuraja' target="_blank" rel="noreferrer">codechef</a> and <a href="https://leetcode.com/vishnu1234raja/" target="_blank" rel="noreferrer">leetcode</a>. 
      Im also hoping to improve my skills in Data Science by taking part in some Kaggle projects. 
      Apologies for my bad CSS</p>
    </div>
    <div className="tablesection tablesection25">
      <div className='skills'>
      <ul>
        {skills1.map((skill) => (
          <li key={skill.name}>
            <span>{skill.name}</span>
            <div className="proficiency-bar">
              <div
                className={`proficiency-level ${skill.proficiency.toLowerCase()}`}
              ></div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
    <div className="tablesection tablesection25">
      <div className='skills'>
      <ul>
        {skills2.map((skill) => (
          <li key={skill.name}>
            <span>{skill.name}</span>
            <div className="proficiency-bar">
              <div
                className={`proficiency-level ${skill.proficiency.toLowerCase()}`}
              ></div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
    <div className="tablesection tablesection25">
      <div className='skills'>
      <ul>
        {skills3.map((skill) => (
          <li key={skill.name}>
            <span>{skill.name}</span>
            <div className="proficiency-bar">
              <div
                className={`proficiency-level ${skill.proficiency.toLowerCase()}`}
              ></div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
    <div className="tablesection tablesection25">
      <div className='skills'>
      <ul>
        {skills4.map((skill) => (
          <li key={skill.name}>
            <span>{skill.name}</span>
            <div className="proficiency-bar">
              <div
                className={`proficiency-level ${skill.proficiency.toLowerCase()}`}
              ></div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
    <h2>Certificates</h2>
    <div class="tablesection tablesection50">
          <div className='sectiondata'>
                <Certificate 
            certificateURL={"https://coursera.org/share/566c282cb334e46965f1cbf1314c94aa"}
            imageSrc={CertificateImageFeb24}
            title={"Natural Language Processing with Probabilistic Models"}
            issuer={"DeepLearning.AI"}
            date={"February 24, 2023"}
            skillsGained={["Word2vec","Parts-of-Speech Tagging","N-gram Language Models","Autocorrect"]}
            />
          </div>
        </div>

        <div class="tablesection tablesection50">
          <div className='sectiondata'>
                <Certificate 
            certificateURL={"https://coursera.org/share/288afe55eecf1facac2ec51a34e1d80f"}
            imageSrc={CertificateImageJan23}
            title={"Natural Language Processing with Classification and Vector Spaces"}
            issuer={"DeepLearning.AI"}
            date={"January 23, 2023"}
            skillsGained={["Machine Translation","Word Embeddings","Locality-Sensitive Hashing","Sentiment Analysis","Vector Space Models"]}
            />
          </div>
        </div>

        <div class="tablesection tablesection50">
          <div className='sectiondata'>
                <Certificate 
            certificateURL={"https://coursera.org/share/6ef261d36827c37c6727a7bf8ed60e01"}
            imageSrc={CertificateImageFeb22}
            title={"Introduction to Data Science in Python"}
            issuer={"University of Michigan"}
            date={"February 6, 2022"}
            skillsGained={["Python Programming","Numpy","Pandas","Data Cleansing"]}
            />
          </div>
        </div>

        <div class="tablesection tablesection50">
          <div className='sectiondata'>
                <Certificate 
            certificateURL={"https://coursera.org/share/4b531fcda0055b3d59bb640eb22b4bfe"}
            imageSrc={CertificateImageMay17}
            title={"Machine Learning in the Enterprise"}
            issuer={"Google Cloud"}
            date={"May 17, 2020"}
            skillsGained={["Tensorflow","Machine Learning","Cloud Computing"]}
            />
          </div>
        </div>

        <div class="tablesection tablesection50">
          <div className='sectiondata'>
                <Certificate 
            certificateURL={"https://coursera.org/share/42e5de8f2a02ed06cb04f4995c4b468a"}
            imageSrc={CertificateImageApr27}
            title={"Getting Started with AWS Machine Learning"}
            issuer={"Amazon Web Services"}
            date={"April 27, 2020"}
            skillsGained={["Artificial Intelligence (AI)","Machine Learning","Amazon SageMaker","Natural Language Processing (NLP)","Computer Vision"]}
            />
          </div>
        </div>
        <div class="tablesection tablesection50">
          <div className='sectiondata'>
                <Certificate 
            title={"Some courses Related to Docker and Kubernetes"}
            issuer={"Udemy and Google Cloud"}
            date={"Lost the certificates and the account. :("}
            skillsGained={["DevOps Basics","Docker","Kunernetes"]}
            />
          </div>
        </div>
    </div>
    </div>
    
  );
};
  
export default Skills;