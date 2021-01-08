import React from 'react';
import './Dashboard.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import DNav from '../../components/DNav/DNav';
import DHome from '../../components/DHome/DHome';
import DNewBox from '../../components/DNewBox/DNewBox';
import DGuide from '../../components/DGuide/DGuide';
import DTool from '../../components/DTool/DTool';

function Dashboard() {
  let { path } = useRouteMatch();

  return (
    <div className="container dashboard mb-5">
      <div className="row justify-content-md-between justify-content-center">
        <DNav />
        <div className="col ml-2 mt-4 mt-md-0">
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
