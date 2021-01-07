import React from 'react';
import './SignIn.css';
import AuthUI from '../../components/AuthUI/AuthUI';

function SignIn() {
  return (
    <div className="signin-page">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col">
          <AuthUI />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
