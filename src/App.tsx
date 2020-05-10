import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from 'routes';

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Route path="/" component={Index} />
    </Router>
  );
};

export default App;
