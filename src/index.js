import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const app = <BrowserRouter basename='app'>
  <App />
</BrowserRouter>


ReactDOM.render(app, document.getElementById('root'));