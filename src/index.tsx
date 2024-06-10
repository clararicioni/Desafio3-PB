import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
)
