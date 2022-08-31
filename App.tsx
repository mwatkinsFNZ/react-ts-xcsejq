import * as React from 'react';
import { NavigateToBreachSummary } from './PortfolioReview/NavigateToBreachSummary';

export default function App() {
  return (
    <div>
      <p>check console log for details</p>
      <button onClick={() => NavigateToBreachSummary()}>
        Go To Breach Summary
      </button>
    </div>
  );
}
