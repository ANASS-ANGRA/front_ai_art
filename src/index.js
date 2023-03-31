import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Accueil from './accueil/accueil';
import App from './App';
import { Store } from './a_store/reducer';
import"./index.css"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={Store}>
    <App/>
  </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

