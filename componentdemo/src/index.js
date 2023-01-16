import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// concept of composition
// it mean creating a big thing with small things


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WebPage />
);

// html element always start with lower case
// where component of react starts with upper case
// index.js is main entry file 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
