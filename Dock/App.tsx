import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { BreachesApp } from '../Breaches/App';
import { useChangeApp } from '../Dock/ChangeApp';
import { PortfoliosApp } from '../PortfolioReview/App';

export default function DockApp() {
  const { changeApp } = useChangeApp();

  return (
    <div>
      <p>
        Open the console at the bottom to see the log results of what would
        happen
      </p>
      <BrowserRouter>
        <Route path={'/Breaches'}>
          <BreachesApp changeApp={changeApp} />
        </Route>
        <Route path={'/Portfolios'}>
          <PortfoliosApp changeApp={changeApp} />
        </Route>
        <Route path={'/'}>
          <Redirect to={'/Portfolios'} />
        </Route>
      </BrowserRouter>
    </div>
  );
}
