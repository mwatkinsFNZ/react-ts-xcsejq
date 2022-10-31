// used by dock to retain the existing local storage for each page
export type Route = {
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
    url: string;
  };
  reportsPage: {
    url: string;
  };
  breachSummary: {
    url: string;
    localStorage: (breachId: string) => LocalStorage[];
  };
};

export type PortfolioReviewRoutes = {
  reviewOnly: {
    url: string;
  };
  buySell: {
    url: string;
    localStorage: () => LocalStorage[];
  };
};
