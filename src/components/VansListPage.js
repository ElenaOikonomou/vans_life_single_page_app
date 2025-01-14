import React from 'react'
import { useEffect, useState} from 'react'
import { Link } from "react-router-dom"

export default function VansListPage() {

  const [vansData, setVansData] = useState([])

  
  
  function displayedData(data){
    
      const selectedData = data.map(van =>{
        return (
          <div key={van.id} className='vansList-specs'>
            <img src={van.imageUrl} alt={van.name} />
            <div className='vans-name-price'>
              <h2>{van.name}</h2>
              <h2>${van.price} <br/>/day</h2>
            </div>
            <h3 >{van.type}</h3>
          </div>
        )
      })
      return selectedData
      }
      
      useEffect(() => {
      console.log('useEffect ran');
      fetch("/api/vans")
        .then(response => response.json())
        .then(data => {
          console.log("Fetched data:", data);  // Add this
          setVansData(data.vans);
        })
        .catch(error => console.error("Error fetching vans:", error));
    }, []);
    
    


  return (
    <div className='vansList--div'>
      <h1>Explore our vans options</h1>
      <div className="vansList--links">
        <Link to='/simple_vans'>Simple</Link>
        <Link to='/luxury_vans'>Luxury</Link>
        <Link to='/rugged_vans'>Rugged</Link>
        <Link to='/clicked_van' className='filters'>Clear filters</Link> 
      </div>   
      <div className='displayed-data'>{displayedData(vansData)}</div>
      
    </div>
  )
  }

