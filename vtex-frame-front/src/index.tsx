import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MainRoutes } from './Routes/Main';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <MainRoutes />
    <ToastContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);
