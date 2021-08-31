import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import PromoteMain from './PromoteMain';
import GetPromote from './GetPromote';
import UsePromote from './UsePromote';

export default function Promote() {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <PromoteMain />
        </Route>
        <Route path={`${path}/get`}>
          <GetPromote />
        </Route>
        <Route path={`${path}/use`}>
          <UsePromote />
        </Route>
      </Switch>
    </div>
  );
}
