import * as React from 'react';
import { FC } from 'react';
import { GetRoutes } from '../CommonComponentCode/Routes';
import { ChangeAppType } from '../Dock/ChangeApp';

export const BreachesApp: FC<{ changeApp: ChangeAppType }> = ({
  changeApp,
}) => {
  const navigateToReviewOnly = () => {
    const route = GetRoutes().portfolioReview.reviewOnly;
    changeApp(route.url, []);
  };

  const navigateToBuySell = () => {
    const route = GetRoutes().portfolioReview.buySell;
    changeApp(route.url, route.localStorage());
  };

  return (
    <div>
      <h1>Breaches</h1>
      <button onClick={() => navigateToReviewOnly()}>Go To Review Only</button>
      <button onClick={() => navigateToBuySell()}>Go To Buy Sell</button>
    </div>
  );
};
