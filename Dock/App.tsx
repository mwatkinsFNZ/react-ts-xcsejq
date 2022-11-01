import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Dock/Routes';

export default function DockApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}
