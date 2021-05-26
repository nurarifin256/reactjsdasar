import React from 'react';
import ReactDOM from 'react-dom';
import Lifecycle from './Lifecycle';
import reportWebVitals from './reportWebVitals';
// import Map from './Map';
// import Stateprops from './Stateprops';
// import App from './App';
// import Variabel from './Variabel';

ReactDOM.render(
  <React.StrictMode>
    <Lifecycle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
