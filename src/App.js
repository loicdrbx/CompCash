import './App.css';

import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import FNavbar from './components/FNavbar/FNavbar';

import { AuthProvider } from './providers/Auth';
import AuthUI from './components/AuthUI';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <FNavbar />
      <Switch>
        <Route exact path="/signIn" component={AuthUI} />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
