import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useChangeApp } from '../Dock/ChangeApp';
import Routes from '../Dock/Routes';

export default function DockApp() {
  return (
    <div>
      <p>
        Open the console at the bottom to see the log results of what would
        happen
      </p>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}
