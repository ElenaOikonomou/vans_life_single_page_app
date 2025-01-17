import React from 'react'
import { Outlet } from 'react-router-dom'


export default function Dashboard() {
  return (
    <div>
    <h1>This is my Dashboard</h1>
    <Outlet />
   
    </div>
  )
}

