import { LocalStorage, Routes } from '../CommonComponentCode/Types';

export function GetRoutes(): Routes {
  return {
    breaches: {
      overviewPage: {
        key: 'breaches_overviewPage',
        url: '/breaches/dashboard',
      },
      reportsPage: {
        key: 'breaches_reportsPage',
        url: '/breaches/breaches-reports-page',
      },
      breachSummary: {
        key: 'breaches_breachSummary',
        url: '/breaches/breaches-reports-page',
        localStorage: (breachId: string): LocalStorage[] => [
          {
            key: 'breaches-reports-modal-open',
            value: 'true',
          },
          {
            key: 'reports-page-breaches-id',
            value: breachId,
          },
        ],
      },
    },
    portfolioReview: {
      reviewOnly: {
        key: 'portfolioReview_reviewOnly',
        url: (portfolioId) => `/portfolios/${portfolioId}`,
      },
      buySell: {
        key: 'portfolioReview_buySell',
        url: (portfolioId) => `/portfolios/${portfolioId}`,
        localStorage: (): LocalStorage[] => [
          {
            key: 'portfolio-review-buy-sell',
            value: 'true',
          },
        ],
      },
    },
  };
}
