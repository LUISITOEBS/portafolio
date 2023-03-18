import React from 'react';
import ReactDOM from 'react-dom/client';
import { PortafolioApp } from './PortafolioApp';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <PortafolioApp />
    </Provider>
  </React.StrictMode>,
)
