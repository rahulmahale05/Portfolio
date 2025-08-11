import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Add loading class to body initially
document.body.classList.add('loading');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);