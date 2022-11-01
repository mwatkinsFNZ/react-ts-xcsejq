import * as React from 'react';
import { FC } from 'react';
import { GetRoutes } from '../CommonComponentCode/Routes';
import { ChangeAppType } from '../Dock/useChangeApp';

export const BreachesApp: FC<{ changeApp: ChangeAppType }> = ({
  changeApp,
}) => {
  const navigateToReviewOnly = () => {
    const route = GetRoutes().portfolioReview.reviewOnly;
    changeApp(
      {
        ...route,
        url: route.url(123),
        localStorage: [],
      },
      true
    );
  };

  const navigateToBuySell = () => {
    const route = GetRoutes().portfolioReview.buySell;
    changeApp(
      {
        ...route,
        url: route.url(123),
        localStorage: route.localStorage(),
      },
      true
    );
  };

  const localStorage = JSON.stringify(window.localStorage);

  return (
    <div>
      <h1>Breaches</h1>
      <p>Local Storage: {localStorage}</p>
      <button onClick={() => navigateToReviewOnly()}>Go To Review Only</button>
      <button onClick={() => navigateToBuySell()}>Go To Buy Sell</button>
    </div>
  );
};
