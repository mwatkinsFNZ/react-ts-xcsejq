import { updateLocalStorage } from '../CommonComponentCode/Functions';
import { LocalStorage } from '../CommonComponentCode/Types';

/* IN THE DOCK */
export function ChangeApp(url: string, localStorage: LocalStorage[]): void {
  if (/* change of app */ true) {
    // update local storage
  }

  if (localStorage) {
    localStorage.forEach((entry) => updateLocalStorage(entry));
  }

  // redirect to full url path
  // should prepend destination app-base-route to the url - currently taken from service-discovery, so we may need a map similar to the app-access map
}
