import React from 'react'
import { Link } from "react-router-dom" /*BrowserRouter is a context provider*/

export default function NavBar() {
  return (
    <div className='navbar'>
     <Link to = "/"><h1 className = "navbar--h1">#VANLIFE</h1></Link>
     <div className='navbar--h2'>
        <Link to = "/about">
        <h2 className='h2--about'>About</h2>
        </Link>   {/*using the Link the page does not refresh, so any state does not change*/}
        <Link to ='/vans_list' >        
        <h2 className='h2--vans' >Vans</h2>
        </Link>   
     </div>   
    </div>
  )
}
