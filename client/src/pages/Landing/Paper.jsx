import React from 'react';
import '../../styles/Paper.scss'
import Lottie from "lottie-react";
import paper from '../../lottie/paper.json'
import { Link } from 'react-router-dom';
const Paper = () => {

  return (
    <>


      <div className="row  h-paper-auto">

        <div className="col d-flex align-items-center">
          <Lottie animationData={paper} className='style' />
        </div>
        <div className="col d-flex align-items-center ">
          <div className="landing-hight p-3">
            <h2 >you haven't seen<span className='text-span-welcome'> EXPRESSIFY</span> paper yet. </h2>
            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores soluta minus. Qui ab ad quibusdam eveniet. Aperiam maiores perspiciatis blanditiis enim fugit praesentium! Sequi aliquid quibusdam nobis consequuntur quae?</p>
            <button className="btn btn-primary w-100">
              donwload the paper
            </button>

          </div>
        </div>
      </div>

    </>
  );
};

export default Paper;
