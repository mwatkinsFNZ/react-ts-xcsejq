import { GetRoutes } from '../CommonComponentCode/Routes';
import { ChangeApp } from '../Dock/ChangeApp';

/* IN PORTFOLIO REVIEW */
export function NavigateToBreachSummary(): void {
  const route = GetRoutes().Breaches.breachSummary;
  ChangeApp(route.url, route.localStorage('123'));
}
