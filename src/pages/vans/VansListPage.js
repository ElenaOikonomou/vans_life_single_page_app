import React from 'react'
import { useEffect, useState} from 'react'
import { Link, useSearchParams} from "react-router-dom"


export default function VansListPage() {

  const [searchParams, setSearchParams] = useSearchParams(); // This will hold the query parameters from the URL
  const [vansData, setVansData] = useState([])

  const typeFilter = searchParams.get('type')
  console.log(typeFilter)
 


 
  useEffect(() => {
   
    fetch("/api/vans")
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data);  // Add this
        setVansData(data.vans);
      })
      .catch(error => console.error("Error fetching vans:", error));
  }, []);
  
   
  const displayedData = vansData.map(van =>{
        return (
        <div key={van.id} className='vansList-specs'>
          <Link
           to={`/vans/${van.id}`}
           aria-label={`View details for ${van.name} priced at $${van.price} per day`}> {/* Says to the screen-reader what to read*/}
            <img src={van.imageUrl} alt={`{image of ${van.name}`} />
            <div className='vans-name-price'>
              <h2>{van.name}</h2>
              <h2>${van.price} <br/>/day</h2>
            </div>
            </Link>
            <i className='type--i'>{van.type}</i>
          </div>
          
          
        )})   
      
    
    


  return (
    <div className='vansList--div'>
      <h1>Explore our vans options</h1>
      <div className="vansList--links">
        <Link to='/simple_vans'>Simple</Link>
        <Link to='/luxury_vans'>Luxury</Link>
        <Link to='/rugged_vans'>Rugged</Link>
        <Link to='/clicked_van' className='filters'>Clear filters</Link> 
      </div>   
      <div className='displayed-data'>{displayedData}</div>
      
    </div>
  )
  }

