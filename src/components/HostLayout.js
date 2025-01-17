import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HostLayout() {
  return (
    <div>
    <nav className='hostLayout'>
     <Link to='/host'>Dashboard</Link>
     <Link to="/host/income">Income</Link>
     <Link to="/host/reviews">Reviews</Link>      
    </nav>
    <Outlet /> {/* The Outlet component renders the component that matches the current route */}

    </div>
  )
}
