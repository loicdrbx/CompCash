import React from 'react';
import AuthUI from '../../components/AuthUI';
import './Home.css';
import FButtonPill from '../../components/FButtonPill/FButtonPill';

import img1 from '../../assets/Home/1.svg';

function Home() {
  return (
    <div>
      <div className="home-landing container">
        <div className="row align-items-center h-100">
          <div className="col-12 col-md-7">
            <h1>
              Compost your waste and earn<span className="green">money</span>
            </h1>
            <p>
              By composting your own waste, CompCash helps you earn quick and
              easy cash while practicing a good deed for the environment.
            </p>
            <div className="row m-0">
              <FButtonPill value="Learn More" href="#" style="dark" />
              <div className="ml-3">
                <FButtonPill value="Register Now" href="#" style="green" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <img src={img1} className="col" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
