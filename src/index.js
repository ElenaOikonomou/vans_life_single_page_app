import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//for this to be a single page application with routing using react router import the following:
import { BrowserRouter, Routes, Route} from "react-router-dom" ;/*BrowserRouter is a context provider*/
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.js";
import Home from './components/Home.js';
import About from './components/About.js';
import VansListPage from './components/VansListPage.js';
import VanDetail from './components/VanDetail.js';
import "./server"

function App() {
  return (
    <BrowserRouter>  
             
      <Routes>    
        <Route path="/" element={<div><NavBar/><Home/><Footer/></div>}/> {/*path="/" (single slash) refers to homepage meaning the App is gonna be displayed on the homepage page*/}
        <Route path="/about" element={<div><NavBar/><About/><Footer/></div>}/>
        <Route path="/vans_list" element= {<div><NavBar/><VansListPage/><Footer/></div>}/>
        <Route path="/:id" element={<VanDetail/>}/> {/* :id is a route param (I tell my router this is not literally the address my link will show to)*/ }
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
