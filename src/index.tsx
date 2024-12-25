import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new import for React 18
import './index.css';
import App from './App';

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);