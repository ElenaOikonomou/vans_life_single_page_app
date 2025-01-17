import React from 'react'
import AboutPage_pic from "../images/aboutPage_pic.png"
import {  Link } from "react-router-dom"
 

export default function About(){
    return (
      
        
        <div className='about---div'>
          <img className='about--img' src={AboutPage_pic} alt="van_at_a_starry_night"/>      
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
                <div className='link--button'>           
                <Link  to="/vans">Explore our vans</Link>  
                </div>           
            </div>
          </div>
      
    )
  }
  
