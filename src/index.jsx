import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/Router';
import "./scss/layout.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
