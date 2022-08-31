import { LocalStorageKeys } from '../CommonComponentCode/Constants';
import { LocalStorage } from '../CommonComponentCode/Types';

export function updateLocalStorage(localStorage: LocalStorage): void {
  // Extract from POA Core
  // Set local storage for given data
}

export function GetRoutes() {
  // returns the full redirection mapping
  return {
    Breaches: {
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
  };
}
