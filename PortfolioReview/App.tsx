import * as React from 'react';
import { FC } from 'react';
import { GetRoutes } from '../CommonComponentCode/Routes';
import { ChangeAppType } from '../Dock/ChangeApp';

export const PortfoliosApp: FC<{ changeApp: ChangeAppType }> = ({
  changeApp,
}) => {
  const navigateToBreachSummary = () => {
    const route = GetRoutes().breaches.breachSummary;
    changeApp(route.url, route.localStorage('123'));
  };

  return (
    <div>
      <h1>Portfolio Review</h1>
      <button onClick={() => navigateToBreachSummary()}>
        Go To Breach Summary
      </button>
    </div>
  );
};
