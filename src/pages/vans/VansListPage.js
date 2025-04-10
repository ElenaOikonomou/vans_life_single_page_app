import React from 'react'
import { useEffect, useState} from 'react'
import { Link, useSearchParams} from "react-router-dom"
import {getVans} from '../../api';


export default function VansListPage() {

  const [searchParams, setSearchParams] = useSearchParams(); // This will hold the query parameters from the URL
  const [vansData, setVansData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const typeFilter = searchParams.get('type')
  console.log(typeFilter)
 

   useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try{
        const data = await getVans()
        setVansData(data)
      } catch (err) {
        setError(err)
      } finally {     
      setLoading(false)
    }
  }
       loadVans()
}, []);
  

  const filteredData = typeFilter? vansData.filter(van => van.type.toLowerCase() === typeFilter) : vansData
   
  const displayedData = filteredData.map(van =>{
        return (
        <div key={van.id} className='vansList-specs'>
          <Link
           to={van.id}
           aria-label={`View details for ${van.name} priced at $${van.price} per day`} 
           state={{ search: `?${searchParams.toString()} `, type: typeFilter }}> {/* Says to the screen-reader what to read*/}
            <img src={van.imageUrl} alt={`{image of ${van.name}`} />
            <div className='vans-name-price'>
              <h2>{van.name}</h2>
              <h2>${van.price} <br/>/day</h2>
            </div>
            </Link>
            <i className='type--i'>{van.type}</i>
          </div>
          
          
        )})   


        function handleFilterChange (key, value) {
          setSearchParams(prevParams => {
            if(!value){
              prevParams.delete(key)
            } else {
              prevParams.set(key, value)
            }
            return prevParams;
          })
        }

        if(loading){
          return <h1 aria-live="polite">Loading...</h1>
        }
      
        if(error){
          return <h1 aria-live="assertive">There was an Error: {error.message}</h1>
        }
    
    


  return (
    <div className='vansList--div'>
      <h1>Explore our vans options</h1>
      <div className="vansList--buttons">
       <button onClick={() => handleFilterChange('type', 'simple')}  className={`van-type simple ${typeFilter === 'simple'? 'selected' : ''}`}> Simple</button>
       <button onClick={() => handleFilterChange('type', 'luxury')}  className={`van-type luxury ${typeFilter === 'luxury'? 'selected': ''}`}>Luxury</button>
       <button onClick={() => handleFilterChange('type', 'rugged')}  className={`van-type rugged ${typeFilter === 'rugged'? 'selected' : ''}`}>Rugged</button>
       {typeFilter? (<button onClick={() => handleFilterChange('type', null)}  className="van-type clear-filters">Clear filters</button>) : null}
      </div>   
      <div className='displayed-data'>{displayedData}</div>
      
    </div>
  )
  }

