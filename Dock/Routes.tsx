import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { BreachesApp } from '../Breaches/App';
import { GetRoutes } from '../CommonComponentCode/Routes';
import { useChangeApp } from '../Dock/useChangeApp';
import { PortfoliosApp } from '../PortfolioReview/App';

export default function Routes() {
  const { changeApp } = useChangeApp();

  const toPortfolios = () => {
    const route = GetRoutes().portfolioReview.reviewOnly;
    changeApp(
      {
        ...route,
        url: route.url(123),
        localStorage: [],
      },
      false
    );
  };

  const toBreaches = () => {
    const route = GetRoutes().breaches.overviewPage;
    changeApp(
      {
        ...route,
        localStorage: [],
      },
      false
    );
  };

  return (
    <div>
      <span>Dock Navigation: </span>
      <button onClick={toPortfolios}>Portfolios</button>
      <button onClick={toBreaches}>Breaches</button>
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
