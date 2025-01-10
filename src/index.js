import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//for this to be a single page application with routing using react router import the following:
import { BrowserRouter, Routes, Route, Link } from "react-router-dom" /*BrowserRouter is a context provider*/
import NavBar from "./components/NavBar"
import aboutPage from "./images/aboutPage_pic.png"
import Footer from "./components/Footer.js"


function App() {
  return (
    <BrowserRouter>  
             
      <Routes>    
        <Route path="/" element={<Home/>}/> {/*path="/" (single slash) refers to homepage meaning the App is gonna be displayed on the homepage page*/}
        <Route path="/about" element={<About/>}/>
    </Routes>    
  </BrowserRouter>
  )
}

function Home(){
  return (
    <div >
      <NavBar/>
      <div className='home--main'>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button>Find your van</button>
      </div>         
      <Footer />            
    </div>
  )
}


function About(){
  return (
    <div>
      <NavBar/>
      <div className='about---div'>
        <img className='about--img' src={aboutPage} alt="van_at_a_starry_night"/>      
        <h1 className='about--h1'>Don’t squeeze in a sedan when<br/>you could relax in a van.</h1>
        <p className='about--p'>Our mission is to enliven your road trip with the perfect travel<br/>
        van rental. Our vans are recertified before each trip to ensure<br/>
          your travel plans can go off without a hitch.
        (Hitch costs extra 😉)<br/>
        <br/>      
        Our team is full of vanlife enthusiasts who know firsthand the<br/>
        magic of touring the world on 4 wheels.</p>
        <div className='about--main'>
          <h2>Your destination is waiting.<br/>
          Your van is ready.</h2>
          <button>Explore our vans</button>
        </div>
        <Footer/>
      </div>
    </div>
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
