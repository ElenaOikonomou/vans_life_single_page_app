import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//for this to be a single page application with routing using react router import the following:
import { BrowserRouter, Routes, Route} from "react-router-dom" ;/*BrowserRouter is a context provider*/
import Home from './pages/Home.js';
import About from './pages/About.js';
import VansListPage from './pages/vans/VansListPage.js';
import VanDetail from './pages/vans/VanDetail.js';
import Layout from './components/Layout.js';
import Dashboard from './pages/Host/Dashboard.js';
import Income from './pages/Host/Income.js';
import Reviews from './pages/Host/Reviews.js';  
import HostLayout from './components/HostLayout.js';
import HostVans from './pages/Host/HostVans.js';
import HostVanDetail from './pages/Host/HostVanDetail.js';
//the server file is for setting up a server to handle requests and serve the static files (html, css, js)
import "./server"



function App() {
  return (
    <BrowserRouter>  
             
      <Routes>   
      <Route element={<Layout />} >
        <Route path="/" element={<Home/>}/> {/*path="/" (single slash) refers to homepage meaning the App is gonna be displayed on the homepage page*/}
        <Route path="/about" element={<About/>}/>

        <Route path="/vans" element= {<VansListPage/>}/>
        <Route path="/vans/:id" element={<VanDetail/>}/> {/* :id is a route param (I tell my router this is not literally the address my link will show to)*/ }
       
        <Route path='/host' element={<HostLayout />}>
          <Route index element={<Dashboard/>}></Route>
          <Route path="income" element={<Income/>}/>
          <Route path="vans" element={<HostVans/>}/>
          <Route path="vans/:id" element={<HostVanDetail/>}/>           
          <Route path="reviews" element={<Reviews/>}/>{/* :id is a route param (I tell my router this is not literally the address my link will show to)*/ }
          
          </Route> {/* :id is a route param (I tell my router this is not literally the address my link will show to)*/ }
       
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
