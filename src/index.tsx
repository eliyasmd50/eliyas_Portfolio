import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root')!); //Adding ! for root for container which expects only true
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
