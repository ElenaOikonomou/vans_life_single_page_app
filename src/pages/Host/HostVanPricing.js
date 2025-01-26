import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing() {

  const {details} = useOutletContext()

  return (
    <div host-van-price-div>
    <h1>$<span>{details.price}</span>/day</h1></div>
  )
}
