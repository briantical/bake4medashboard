import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import { Dashboard as Home, Support, User } from 'views';

const Dashboard: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user" exact component={User} />
      <Route path="/support" exact component={Support} />
    </Switch>
  );
};

export default Dashboard;
