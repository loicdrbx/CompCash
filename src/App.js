import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
import FNavbar from './components/FNavbar/FNavbar';
import Footer from './components/Footer/Footer';

import { AuthProvider } from './providers/Auth';
import AuthUI from './components/AuthUI/AuthUI';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <FNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signIn" component={SignIn} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </AuthProvider>
  );
}

export default App;
