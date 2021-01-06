import React from 'react';
import AuthUI from '../../components/AuthUI';
import './Dashboard.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import FButtonPill from '../../components/FButtonPill/FButtonPill';

import DNav from '../../components/DNav/DNav';
import DHome from '../../components/DHome/DHome';
import DNewBox from '../../components/DNewBox/DNewBox';

function Dashboard() {
  let { path, url } = useRouteMatch();

  console.log(path);
  return (
    <div className="container dashboard mb-5">
      <div className="row">
        <DNav />
        <div className="col ml-2">
          <Switch>
            <Route exact path={path + '/'} component={DHome} />
            <Route exact path={path + '/boxes'} component={DNewBox} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
