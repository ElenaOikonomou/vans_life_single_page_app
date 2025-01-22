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
     <NavLink to='/host' end  style={({isActive}) => isActive? hostStyles : null}>Dashboard</NavLink> {/*/end the matching here otherwise the style will always be applied when we are inside the host url*/}
     <NavLink to="/host/income" style={({isActive}) => isActive? hostStyles : null}>Income</NavLink>
     <NavLink to="/host/reviews" style={({isActive}) => isActive? hostStyles : null}>Reviews</ NavLink>      
    </nav>
    <Outlet /> {/* The Outlet component renders the component that matches the current route */}
    </div>
  )
}
