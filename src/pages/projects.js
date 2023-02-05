import React from 'react';
import Navbar from '../components/Navbar';
import Projectbar from '../components/Projectbar';

const Projects = () => {
  return (
    <div className="App">
    <div className="App-header">
      <Navbar></Navbar>
    </div>
    <div className='content'>
      <Projectbar
        date={"2022"}
        title={"Android Game - Word Battle"}
        description={<div>
          <p>Cloned and added features to Wordle like - AI, Multiplayer, 5 letter, and 6 letter modes</p>
          <ul>
            <li>Used Unity Game Engine to develop the android game</li>
            <li>Integrated with microsoft's Playfab Service to provide Multiplayer</li>
            <li>Implemented an AI which mimics human behavior in the game</li>
          </ul>          
          <a href="https://github.com/VishnuRaja98/WRBTL" target='_blank' rel="noreferrer">Github</a>&nbsp; &nbsp;
          <a href="https://play.google.com/store/apps/details?id=com.VishnuRajaOrg.com.unity.template.wrbtl" target='_blank' rel="noreferrer">Link</a>
        </div>
      }
      />
      <br/><br/>
      <Projectbar
        date={"2021"}
        title={"A Watch Face App for Garmin"}
        description={<div><p>I made a watch face that looked laide the Andriod 12 clock for my garmin watch and put it up on the ConnectIQ store.
          The programming of the watch face is done in a language called Monkey C and I have integrated some of the Watch SDK functionalities in the wtch face.</p>
          <a href="https://github.com/VishnuRaja98/Garmin---Android-12-Clock-Watch-Face" target='_blank' rel="noreferrer">Github</a>&nbsp; &nbsp;
          <a href="https://apps.garmin.com/en-US/apps/55f389c6-2a3e-441d-9689-37818bd328d9" target='_blank' rel="noreferrer">Link</a>
        </div>
      }
      />
      <br/><br/>
      <Projectbar
        date={"2019-2020"}
        title={"Facial Action Detection Under Large Head Poses using CNNs"}
        description={<div>
        <h4>Abstract:</h4>
          <p>Liquidity of a bank is an important factor, because this parameter affects the
          performance of the bank. In fact, liquidity management is among the main duties
          of banks and one important factor for managing assets and debts in a bank. Bank
          managements are interested in determining the rate of liquidity based on a strategy
          for meeting this need. Lack of sufficient liquidity might impose heavy costs and
          even lead to bankruptcy. On the other hand, surplus liquidity will result in losing
          investment opportunities and reduction in productivity and profitability of banks.
          In this research, efforts are taken to use the most affecting factors by investigation
          on important factors effective on the liquidity rate. In the proposed work Liquidity
          is considered as a dependent variable while Net Interest Margin(NIM), credit risk,
          bank size, profitability, income diversification and financial leverage were selected
          as independent variables. Along with the above factors, transactional records will
          also be taken into consideration to predict the liquidity. The dataset will mainly
          comprise of the company’s balance sheet. In this project, to overcome limitation
          of some techniques, our work focus is on the machine learning approaches and use
          of neural networks along with a few mathematical models to predict the liquidity</p>
          <a href="https://drive.google.com/file/d/1jfmR0W6D52YCiwg4FNikc-0HoZeSCRTd/view?usp=share_link" target='_blank' rel="noreferrer">PDF</a>
        </div>
      }
      />
      <br/><br/>
      <Projectbar
        date={"2018-2019"}
        title={"Facial Action Detection Under Large Head Poses using CNNs"}
        description={<div>
        <h4>Abstract:</h4>
          <p>Facial actions are used to convey a positive or negative feeling toward a particular topic. They
          are also used by humans subconsciously when to communicate intention. Automated Face
          Analysis (AFA) is used for detection,synthesis and analysis of facial expression. Spontaneous
          face detection is a complicated task as variation in shape, color and size of face is to be considers. In this work, I present a novel approach to Facial Action Unit detection using a
          combination of Convolutional and Bi-directional Long Short-Term Memory Neural Networks
          (CNN-BLSTM), which jointly learns shape, appearance and dynamics in a deep learning manner. I have created 3D camera video data in the database and it is converted to 2D datagrams
          and a deep learning approach is used to identify the short term actions.</p>
          <a href="https://drive.google.com/file/d/1DGqfSHKJiXutueomEnchefYpNI8mw63f/view?usp=share_link" target='_blank' rel="noreferrer">PDF</a>
        </div>
      }
      />
    </div>
    </div>
    
  );
};
  
export default Projects;