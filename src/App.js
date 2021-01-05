import './App.css';
import logo from './logo.svg';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import FNavbar from './components/FNavbar/FNavbar';

import { db } from './firebase/index';
import { auth } from './firebase/index';

function App() {
  // Just a test to see if auth workks
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(user.displayName + ' just logged in');
    } else {
      console.log('No one is logged in');
    }
  });

  // Just a test to see if db works
  db.collection('Teams')
    .doc('Project-Compost')
    .set({
      member1: 'Loic',
      member2: 'Mith',
      member3: 'Qi',
      member4: 'V',
      member5: 'Harsh',
    })
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });

  return (
    <>
      <FNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
