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
        date={"2018-2019"}
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
          <a href="https://drive.google.com/file/d/1jfmR0W6D52YCiwg4FNikc-0HoZeSCRTd/view?usp=share_link" target='_blank'>PDF</a>
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
          <a href="https://drive.google.com/file/d/1DGqfSHKJiXutueomEnchefYpNI8mw63f/view?usp=share_link" target='_blank'>PDF</a>
        </div>
      }
      />
    </div>
    </div>
    
  );
};
  
export default Projects;