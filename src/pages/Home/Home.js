import React from 'react';
import AuthUI from '../../components/AuthUI/AuthUI';
import './Home.css';
import FButtonPill from '../../components/FButtonPill/FButtonPill';

import img1 from '../../assets/Home/1.svg';
import img2 from '../../assets/Home/2.svg';
import img3 from '../../assets/Home/3.svg';
import img4 from '../../assets/Home/4.svg';
import img5 from '../../assets/Home/5.svg';
import cusec from '../../assets/Home/cusec-logo.svg';

function Home() {
  return (
    <div>
      <div className="home-landing container">
        <div className="row align-items-center h-100">
          <div className="col-12 col-md-7">
            <h1>
              Compost your waste and earn <span className="green">money</span>
            </h1>
            <p>
              By composting your own waste, CompCash helps you earn quick and
              easy cash while practicing a good deed for the environment.
            </p>
            <div className="row m-0">
              <FButtonPill value="Learn More" style="dark" href="#intro" />
              <div className="ml-3">
                <FButtonPill
                  value="Register Now"
                  style="green"
                  href="/signin"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <img src={img1} className="col" />
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-center" id="intro">
          Introducing <span className="green">CompCash</span>
        </h2>
        <div className="row justify-content-center">
          <p className="text-center col-10 col-md-6">
            CompCash is a non-profit organization that promotes the safe and
            sustainable composting of household waste. By creating useable
            compost right outside one’s home, CompCash will purchase your
            compost and sell to locals for a reduced cost than the market.
          </p>
        </div>
      </div>
      <div className="margin-t-120">
        <h2 className="text-center">How it Works</h2>
      </div>
      <div className="container">
        <div className="row justify-content-between align-items-center margin-t-70">
          <div className="col-12 col-md-6">
            <h3>Purchase a biodegradable box from us</h3>
            <p>
              We will send you a biodegradable box that you will fill up your
              homemade compost. You can select from three sizes, depending on
              how much compost you plan to create.
            </p>
          </div>
          <div className="col-12 col-md-5">
            <img src={img2} className="col" />
          </div>
        </div>

        <div className="row justify-content-between align-items-center margin-t-70">
          <div className="col-12 col-md-5">
            <img src={img3} className="col" />
          </div>
          <div className="col-12 col-md-6 text-right">
            <h3>Follow our guide on how to compost effectively</h3>
            <p>
              Our expert biologists and enivornmentalists have created the
              ultimate guide to creating compost at home and maximizing output.
            </p>
          </div>
        </div>

        <div className="row justify-content-between align-items-center margin-t-70">
          <div className="col-12 col-md-6">
            <h3>Start the countdown</h3>
            <p>
              Composting takes time. But don’t worry! You just have to let the
              compost sit in one spot while it biodegrades behind the scences.
              We will send you regular updates to check in on it as time passes!
            </p>
          </div>
          <div className="col-11 col-md-4">
            <img src={img4} className="col" />
          </div>
        </div>

        <div className="row justify-content-between align-items-center margin-t-70">
          <div className="col-12 col-md-5">
            <img src={img5} className="col" />
          </div>
          <div className="col-12 col-md-6 text-right">
            <h3>
              Fill up your box, drop it off and get
              <span className="green"> paid</span>!
            </h3>
            <p>
              Our expert biologists and enivornmentalists have created the
              ultimate guide to creating compost at home and maximizing output.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-center margin-t-120">
          <h2 className="">
            That's cool. <span className="green">But why?</span>
          </h2>
          <p>Well, there's two main reasons...</p>
        </div>
        <div className="row justify-content-between margin-t-70">
          <div className="col-12 col-md text-center benefit-box py-5 mr-2">
            <h3>
              You get <span className="green">money</span>...duh
            </h3>
            <p>Getting paid cash for doing minimal work? I’m in!</p>
          </div>
          <div className="col-12 col-md text-center benefit-box py-5 ml-2">
            <h3>
              You’re helping the <span className="green">environment</span>
            </h3>
            <p>Getting paid AND helping the environment? I’m double in!</p>
          </div>
        </div>
      </div>
      <h2 className="text-center margin-t-120">Supported by</h2>
      <div className="row justify-content-center margin-t-70 margin-b-120">
        <img src={cusec} className="col-2" />
      </div>
    </div>
  );
}

export default Home;
