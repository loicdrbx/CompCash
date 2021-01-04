import './App.css';
import logo from './logo.svg';

import { auth } from './firebase/index';
import AuthUI from './components/AuthUI';


function App() {

  // Just a test to see if auth workks
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(user.displayName + " just logged in")
    } else {
      console.log("No one is logged in");
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AuthUI />
        <p>
<<<<<<< HEAD
          Edit <code>src/App.js</code> and save to reload. kjd
=======
          Check the <code>console</code> to monitor auth status.
>>>>>>> feature/auth
        </p>
      </header>
    </div >
  );
}

export default App;
