import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DrinkApp } from './DrinkApp';
import "bootstrap/dist/css/bootstrap.min.css";
import "src/styles/styles.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DrinkApp />
    </BrowserRouter>
  </React.StrictMode>,
)
