import React from 'react';
import '../../styles/Paper.scss'
import Lottie from "lottie-react";
import paper from '../../lottie/paper.json'
import { Link } from 'react-router-dom';
const Paper = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../../public/upload/Expressify.pdf';  // Make sure this path is correct
    link.download = 'Expressify.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>


      <div className="row  h-paper-auto">

        <div className="col d-flex align-items-center">
          <Lottie animationData={paper} className='style' />
        </div>
        <div className="col d-flex align-items-center ">
          <div className="landing-hight p-3">
            <h2 className='text-light'>you haven't seen<span className='text-span-welcome'> EXPRESSIFY</span> paper yet. </h2>
            <p className='text-muted'>Techniques and methodologies to process multimodal data and extract meaningful features. Machine learning algorithms, such as deep learning models and ensemble methods, are commonly used for feature extraction and fusion. These algorithms enable the integration of data from different modalities, creating a holistic understanding of emotions and enhancing the accuracy of recognition systems. Check the paper</p>
           <button className="btn btn-primary w-100" onClick={handleDownload}>
            Download the paper
          </button>

          </div>
        </div>
      </div>

    </>
  );
};

export default Paper;
