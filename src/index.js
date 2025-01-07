import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//for this to be a single page application with routing using react router import the following:
import { BrowserRouter, Routes, Route } from "react-router-dom" /*BrowserRouter is a context provider*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<App/>}/> 
    </Routes>    
  </BrowserRouter>
  </React.StrictMode>
);

//path="/" (single slash) refers to homepage meaning the App is gonna be displayed on the homepage page

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
