import React from 'react'
import { Outlet } from 'react-router-dom'
import  Header  from './Header.js';

export default function Layout() {
  return (
    <div>
        <Header />
        <Outlet /> {/* This renders the component that matches the current route */}
    </div>
  )
}