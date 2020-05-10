import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './dashboard';
import { Signin, Signup, Password, Profile } from 'views';

const Index: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/password" exact component={Password} />
    </Switch>
  );
};

export default Index;
