import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {

  const { details } = useOutletContext()    
  return (
    <div className='host-van-info-div'>
    <h2>Name: <span>{details.name}</span></h2>
    <h2>Type: <span>{details.type}</span></h2>
    <h2>Description: <span>{details.description}/day</span></h2>
    </div>
  )
}
