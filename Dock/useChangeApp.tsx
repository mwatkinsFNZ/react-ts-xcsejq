import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateLocalStorage } from '../CommonComponentCode/LocalStorage';
import { ChangeAppRoute, LocalStorage } from '../CommonComponentCode/Types';

type state = Map<
  string,
  {
    url: string;
    localStorage: LocalStorage[];
    children?: state;
  }
>;

const testState: state = new Map([
  [
    'breach',
    {
      url: '',
      localStorage: [],
      children: new Map([
        [
          'reports',
          {
            url: '',
            localStorage: []
          }
        ]
      ])
    },
  ],
  [
    'portfolioReview',
    {
      url: '',
      localStorage: [],
    },
  ],
]);

testState.get('breach').children

export type ChangeAppType = (
  changeApp: ChangeAppRoute,
  override: boolean
) => void;

export const useChangeApp = (): {
  changeApp: ChangeAppType;
} => {
  const history = useHistory();
  const [appStorage, setAppStorage] = useState<Map<string, ChangeAppRoute>>(
    new Map()
  );

  const addLocalStorage = (localStorage: LocalStorage[]) => {
    window.localStorage.clear();
    localStorage.forEach((entry) => updateLocalStorage(entry));
  };

  const changeApp = (route: ChangeAppRoute, override: boolean) => {
    console.log(route.key);
    console.log(appStorage.has(route.key));
    if (!override && appStorage.has(route.key)) {
      console.log('using cached local storage');
      const cache = appStorage.get(route.key);
      console.log(cache.localStorage);
      addLocalStorage(cache.localStorage ?? []);
    } else {
      console.log('using new local storage');
      let newStorage = new Map(appStorage);
      newStorage.set(route.key, route);
      console.log({ txt: 'new data: ', obj: newStorage.size });
      setAppStorage(newStorage);

      addLocalStorage(route.localStorage ?? []);
    }

    history.push(route.url);
  };

  const changeAppFromDock = () => {
    
  }

  return { changeApp };
};
