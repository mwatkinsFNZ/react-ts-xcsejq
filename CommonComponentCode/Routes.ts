import { LocalStorageKeys } from '../CommonComponentCode/LocalStorage';
import { LocalStorage, Routes } from '../CommonComponentCode/Types';

export function GetRoutes(): Routes {
  // returns the full redirection mapping
  return {
    breaches: {
      overviewPage: {
        url: '/dashboard',
      },
      reportsPage: {
        url: '/breaches-reports-page',
      },
      breachSummary: {
        url: '/breaches-reports-page',
        localStorage: (breachId: string): LocalStorage[] => [
          {
            key: LocalStorageKeys.Breach_Reports_Summary_Modal,
            value: 'true',
          },
          {
            key: LocalStorageKeys.Breach_Reports_Summary_ID,
            value: breachId,
          },
        ],
      },
    },
    portfolioReview: {
      reviewOnly: {
        url: '/',
      },
      buySell: {
        url: '/',
        localStorage: (): LocalStorage[] => [
          {
            key: LocalStorageKeys.PortfolioReview_BuySell,
            value: 'true',
          },
        ],
      },
    },
  };
}
