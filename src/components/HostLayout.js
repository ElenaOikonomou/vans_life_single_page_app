import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HostLayout() {
  const hostStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'

  }
  return (
    <div>
    <nav className='hostLayout'>
     <NavLink to='.' end  style={({isActive}) => isActive? hostStyles : null}>Dashboard</NavLink> {/*/1. relative link: when I want my element to have the same path as the parent layout get rendered within I use  the dot (.)
      2. 'end' the matching here, otherwise the style will always be applied when we are inside the host url*/}
     <NavLink to="income" style={({isActive}) => isActive? hostStyles : null}>Income</NavLink>
     {/*/I don't need to use absolute paths eg /host/income because on the index.js file, these elements get renderent withing the parent HoatLayout element*/}
     <NavLink to="reviews" style={({isActive}) => isActive? hostStyles : null}>Reviews</NavLink>
     <NavLink to="vans" style={({isActive}) => isActive? hostStyles : null}>Vans</NavLink>            
    </nav>
    <Outlet /> {/* The Outlet component renders the component that matches the current route */}
    </div>
  )
}
