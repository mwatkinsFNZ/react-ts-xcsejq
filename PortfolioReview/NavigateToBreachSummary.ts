import { GetRoutes } from '../CommonComponentCode/Functions';
import { ChangeApp } from '../Dock/ChangeApp';

/* IN PORTFOLIO REVIEW */
export function NavigateToBreachSummary(): void {
  const route = GetRoutes().Breaches.breachSummary;
  ChangeApp(route.url, route.localStorage('123'));
}
