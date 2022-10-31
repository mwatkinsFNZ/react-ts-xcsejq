import { LocalStorage } from '../CommonComponentCode/Types';

export const LocalStorageKeys = {
  Breach_Reports_Summary_Modal: 'breaches-reports-modal-open',
  Breach_Reports_Summary_ID: 'reports-page-breaches-id',
  PortfolioReview_BuySell: 'portfolio-review-buy-sell',
};

export function updateLocalStorage(localStorage: LocalStorage): void {
  // Extract from POA Core
  // Set local storage for given data
  console.log(
    `add local storage: key=${localStorage.key} value=${localStorage.value}`
  );
}
