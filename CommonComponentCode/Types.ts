export type LocalStorageKeys =
  | 'breaches-reports-modal-open'
  | 'reports-page-breaches-id'
  | 'portfolio-review-buy-sell';

export type ChangeAppRoute = {
  key: string;
  url: string;
  localStorage?: LocalStorage[];
};

export type LocalStorage = {
  key: LocalStorageKeys;
  value: string;
};

export type Routes = {
  breaches: BreachesRoutes;
  portfolioReview: PortfolioReviewRoutes;
};

export type BreachesRoutes = {
  overviewPage: {
    key: string;
    url: string;
  };
  reportsPage: {
    key: string;
    url: string;
  };
  breachSummary: {
    key: string;
    url: string;
    localStorage: (breachId: string) => LocalStorage[];
  };
};

export type PortfolioReviewRoutes = {
  reviewOnly: {
    key: string;
    url: (portfolioId: number) => string;
  };
  buySell: {
    key: string;
    url: (portfolioId: number) => string;
    localStorage: () => LocalStorage[];
  };
};
