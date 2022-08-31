import * as React from 'react';
import { NavigateToBreachSummary } from './PortfolioReview/NavigateToBreachSummary';

export default function App() {
  return (
    <div>
      <p>
        Open the console at the bottom to see the log results of what would
        happen
      </p>
      <button onClick={() => NavigateToBreachSummary()}>
        Go To Breach Summary
      </button>
    </div>
  );
}
