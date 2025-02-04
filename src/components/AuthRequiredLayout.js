import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function AuthRequiredLayout() {
    // Add logic to check if user is authenticated
    // If authenticated, render the Outlet component
    // If not, render a "Navigate" component to the login page
        
    const authenticated = false
         
    if(!authenticated) {
        return <Navigate to="/login"  state={{message: "You must log in first"}} />
        
    } else {
        return <div><Outlet /></div>
       
  }
}
