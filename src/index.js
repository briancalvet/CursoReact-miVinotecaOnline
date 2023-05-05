import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// context 
import { CarritoProvider } from './context/CartContex.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <CarritoProvider >
    <App />
  </CarritoProvider>
);


