import * as React from 'react';
import { FC } from 'react';
import { GetRoutes } from '../CommonComponentCode/Routes';
import { ChangeAppType } from '../Dock/useChangeApp';

export const PortfoliosApp: FC<{ changeApp: ChangeAppType }> = ({
  changeApp,
}) => {
  const navigateToBreachSummary = () => {
    const route = GetRoutes().breaches.breachSummary;
    changeApp(
      {
        ...route,
        localStorage: route.localStorage('123'),
      },
      true
    );
  };

  const localStorage = JSON.stringify(window.localStorage);

  return (
    <div>
      <h1>Portfolio Review</h1>
      <p>Local Storage: {localStorage}</p>
      <button onClick={() => navigateToBreachSummary()}>
        Go To Breach Summary
      </button>
    </div>
  );
};
