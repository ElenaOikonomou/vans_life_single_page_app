import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//for this to be a single page application with routing using react router import the following:
import { BrowserRouter, Routes, Route, Link } from "react-router-dom" /*BrowserRouter is a context provider*/
import NavBar from "./components/NavBar"
import aboutPage from "./images/aboutPage_pic.png"


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
      <footer className='home--footer'>
        <p>Ⓒ 2022 #VANLIFE</p>
       </footer>            
    </div>
  )
}


function About(){
  return (
    <div>
      <NavBar/>
      <img className='about--img' src={aboutPage} alt="van_at_a_starry_night"/>
      <h1 className='about--h1'>Don’t squeeze in a sedan when you could relax in a van.</h1>
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
