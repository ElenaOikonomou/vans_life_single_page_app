import React from 'react'
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"



export default function HostVans() {

  const [vans, setVans] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    async function loadVans(){
      setLoading(true)
      try{
        const data = await getHostVans()
        setVans(data)
      } catch (err){
        setError(err)
      } finally{
        setLoading(false)
      }
    }
    loadVans()
  },   
  [])



  const displayedVans = vans
  .map(van => ( 
    <Link to={van.id} key={van.id} className='host-van-link-wrapper'> {/* replace with actual route */} 
      <div key={van.id} className="host-van-single">
        <img src={van.imageUrl} alt={van.name} /> 
        <div className="host-van-info"> 
          <h3>{van.name}</h3>      
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ))

 if(loading){
   return <h1>Loading ...</h1>
 }

 if(error){
   return <h1>There was an error: {error.message}</h1>
 }
    



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
          <h2>Loading...</h2>
        )
      }
     
      </div>
    </div>
  )
}
