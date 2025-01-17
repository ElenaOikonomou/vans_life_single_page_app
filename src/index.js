import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//for this to be a single page application with routing using react router import the following:
import { BrowserRouter, Routes, Route} from "react-router-dom" ;/*BrowserRouter is a context provider*/
import Home from './assets/Home.js';
import About from './assets/About.js';
import VansListPage from './assets/VansListPage.js';
import VanDetail from './assets/VanDetail.js';
import Layout from './components/Layout.js';
//the server file is for setting up a server to handle requests and serve the static files (html, css, js)
import "./server"

function App() {
  return (
    <BrowserRouter>  
             
      <Routes>   
      <Route element={<Layout />} >
        <Route path="/" element={<Home/>}/> {/*path="/" (single slash) refers to homepage meaning the App is gonna be displayed on the homepage page*/}
        <Route path="/about" element={<About/>}/>
        <Route path="/vans_list" element= {<VansListPage/>}/>
        <Route path="/vans/:id" element={<VanDetail/>}/> {/* :id is a route param (I tell my router this is not literally the address my link will show to)*/ }
      </Route>
        </Routes>    
  </BrowserRouter>
  )
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
