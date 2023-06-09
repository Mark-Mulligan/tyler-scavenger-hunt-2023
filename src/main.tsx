import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// React router dom
import { BrowserRouter } from 'react-router-dom';

// styles
import './styles/tube.scss';
import './styles/globals.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
