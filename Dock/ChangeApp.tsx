import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateLocalStorage } from '../CommonComponentCode/LocalStorage';
import { ChangeAppRoute } from '../CommonComponentCode/Types';

export type ChangeAppType = (changeApp: ChangeAppRoute) => void;

export const useChangeApp = (): {
  changeApp: ChangeAppType;
} => {
  const [appStorage, setAppStorage] = useState<Map<string, ChangeAppRoute>>(
    new Map()
  );

  const history = useHistory();

  const changeApp = (route: ChangeAppRoute) => {
    if (/* change of app */ true) {
      // remove previous local storage
      // not sure how this will work with some local-storage such as the styling done in shell/poa
      console.log('remove existing local storage');
    }

    if (route.localStorage) {
      route.localStorage.forEach((entry) => updateLocalStorage(entry));
    }

    history.push(route.url);
  };

  return { changeApp };
};
