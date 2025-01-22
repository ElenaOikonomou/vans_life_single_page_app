import React from 'react'
import { NavLink } from 'react-router-dom' 



export default function Header() {
    const myStyle = {
        fontWeight: "bold",
        textDecoration: "underline" ,
        color: '#161616'
    }


  return (
    <div>    
        <header className='header'>
        <NavLink className="site-logo" to="/">#VanLife</NavLink>
        <nav className='navbar--h2'>
            <NavLink to='/host' style = {({isActive})=> isActive? myStyle : null}>Host</NavLink> {/*instead of creating a myStyle obj, I could use a className with the same syntax and add my styles to css*/ }
            <NavLink to="/about" style = {({isActive})=> isActive? myStyle : null}>About</NavLink>
            <NavLink to="/vans" style = {({isActive})=> isActive? myStyle : null}>Vans</NavLink>
        </nav>
        </header> 
    </div>
   
)
}



/*return (
    <div className='navbar'>
     <Link to = "/"><h1 className = "navbar--h1">#VANLIFE</h1></Link>
     <div className='navbar--h2'>
        <Link to = "/about">
        <h2 className='h2--about'>About</h2>
        </Link>   using the Link the page does not refresh, so any state does not change
        <Link to ='/vans_list' >        
        <h2 className='h2--vans' >Vans</h2>
        </Link>   
     </div>   
    </div>
  )
}   } 

*/