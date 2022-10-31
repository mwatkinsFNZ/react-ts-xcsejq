import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import DockApp from './Dock/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DockApp />
  </StrictMode>
);
