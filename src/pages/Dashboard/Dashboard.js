import React from 'react';
import './Dashboard.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import FButtonPill from '../../components/FButtonPill/FButtonPill';

import DNav from '../../components/DNav/DNav';
import DHome from '../../components/DHome/DHome';
import DNewBox from '../../components/DNewBox/DNewBox';
import DGuide from '../../components/DGuide/DGuide';
import DTool from '../../components/DTool/DTool';

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
            <Route exact path={path + '/guide'} component={DGuide} />
            <Route exact path={path + '/tool'} component={DTool} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
