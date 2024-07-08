import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './apps/store.ts';

// Attach the React app to the HTML element with the ID 'root'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Provide the Redux store to the app */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
);
