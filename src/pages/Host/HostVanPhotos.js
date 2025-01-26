import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos() {

  const { details } = useOutletContext()
  return (
    <div className='host-van-photos-div'>
    <img src={details.imageUrl} alt={details.name}/>
    </div>
  )
}
