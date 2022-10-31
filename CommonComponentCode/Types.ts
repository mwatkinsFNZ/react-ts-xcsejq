export type ChangeAppRoute = {
  key: string;
  url: string;
  localStorage?: LocalStorage[];
};

export type LocalStorage = {
  key: string;
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
