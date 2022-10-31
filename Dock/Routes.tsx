import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { BreachesApp } from '../Breaches/App';
import { useChangeApp } from '../Dock/ChangeApp';
import { PortfoliosApp } from '../PortfolioReview/App';

export default function Routes() {
  const { changeApp } = useChangeApp();

  return (
    <div>
      <Route path={'/Breaches'}>
        <BreachesApp changeApp={changeApp} />
      </Route>
      <Route path={'/Portfolios'}>
        <PortfoliosApp changeApp={changeApp} />
      </Route>
      <Route path={'/'}>
        <Redirect to={'/Portfolios'} />
      </Route>
    </div>
  );
}
