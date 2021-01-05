import React from 'react';
import AuthUI from '../../components/AuthUI';
import './Dashboard.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import FButtonPill from '../../components/FButtonPill/FButtonPill';

import DHome from '../../pages/DHome/DHome';

function Dashboard() {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route path={path + '/'} exact component={DHome} />
    </Switch>
  );
}

export default Dashboard;
