export type ExistingRoutes = {
  // used by dock to retain the existing local storage for each page
  url: string;
  localStorage: LocalStorage[];
};

export type LocalStorage = {
  key: string;
  value: string;
};
