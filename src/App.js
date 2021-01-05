import './App.css';
import logo from './logo.svg';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import FNavbar from './components/FNavbar/FNavbar';

import authApi from './firebase/authApi';

function App() {

  console.log(authApi.getUser());

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
