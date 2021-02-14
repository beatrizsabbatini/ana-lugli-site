import React from 'react';

import { Route } from 'react-router-dom';
import LandingPage from '../pages/Landing';

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={LandingPage} />

      {/* para o github pages:  */}
      <Route path="/ana-lugli-site/" exact component={LandingPage} />
    </>
  );
};

export default Routes;
