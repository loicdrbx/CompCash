import React from 'react';
import './SignIn.css';
import AuthUI from '../../components/AuthUI/AuthUI';
import graphic from '../../assets/SignIn/signin-graphic.svg';

import { auth } from '../../firebase/index';
import { Redirect } from 'react-router-dom';

function SignIn() {
  var user = auth().currentUser;
  if (user) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <div className="signin-page container">
        <div className="row justify-content-center justify-content-md-between align-items-center h-100">
          <div className="col-12 col-md-6 order-2 order-md-1 mt-n5">
            <img src={graphic} className="col" alt="login graphic" />
          </div>
          <div className="col-11 col-md-6 order-1 order-md-2  ">
            <h3 className="text-center">Login with a provider</h3>
            <div className="mt-4">
              <AuthUI />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
