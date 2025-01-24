import React from 'react'
import { Link } from "react-router-dom"



export default function HostVans() {

  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
    fetch("/api/host/vans")
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(data => setVans(data.vans))
    .catch(error => console.error("Error fetching vans:", error));    
  },   
  [])



  const displayedVans = vans
  .map(van => ( 
    <Link to={`/host/vans/${van.id}`} key={van.id} className='host-van-link-wrapper'> {/* replace with actual route */} 
      <div key={van.id} className="host-van-single">
        <img src={van.imageUrl} alt={van.name} /> 
        <div className="host-van-info"> 
          <h3>{van.name}</h3>      
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ))

  if (vans.length === 0) {
    return <h2>Loading your vans</h2>}
    



  return (
    <div>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-title">
      {
        vans.length > 0? (
          <div>
           {displayedVans}
          </div>
        ) : (
          <h2>No vans listed yet</h2>
        )
      }
     
      </div>
    </div>
  )
}
