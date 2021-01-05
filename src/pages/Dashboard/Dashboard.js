import React from 'react';
import AuthUI from '../../components/AuthUI';
import './Dashboard.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import FButtonPill from '../../components/FButtonPill/FButtonPill';

import DHome from '../../pages/DHome/DHome';

function Dashboard() {
  let { path, url } = useRouteMatch();

  console.log(path);
  return (
    <Switch>
      <Route exact path={path + '/home'} component={DHome} />
    </Switch>
  );
}

export default Dashboard;
