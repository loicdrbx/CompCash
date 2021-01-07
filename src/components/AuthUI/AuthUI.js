import React from 'react';
import { auth } from '../../firebase/index';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './AuthUI.css';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/dashboard',
  signInOptions: [
    auth.GoogleAuthProvider.PROVIDER_ID,
    auth.GithubAuthProvider.PROVIDER_ID,
  ],
};

const AuthUI = () => {
  return (
    <div className="">
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={auth()}
        className="auth-ui"
        style={{ backgroundColor: '#FFF' }}
      />
    </div>
  );
};

export default AuthUI;
