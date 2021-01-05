import React from 'react';
import AuthUI from '../../components/AuthUI';
import './Dashboard.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import FButtonPill from '../../components/FButtonPill/FButtonPill';

import DNav from '../../components/DNav/DNav';
import DHome from '../../components/DHome/DHome';

function Dashboard() {
  let { path, url } = useRouteMatch();

  console.log(path);
  return (
    <div className="container dashboard">
      <div className="row">
        <DNav />
        <div className="col">
          <Switch>
            <Route exact path={path + '/'} component={DHome} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
