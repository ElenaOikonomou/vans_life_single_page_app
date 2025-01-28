import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'




export default function VanDetail() {

  const location = useLocation()
  console.log(location)

    const params = useParams()
    console.log(params)
    const [details, setdetails] = useState(null)

    const search = location.state?.search || "" //newer JS syntax (optional chaining) means if there is a state inside the link then use the value or search else nothing
   
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setdetails(data.vans))
    }, [params.id])

  return (
    
    <div>
    
      {details ? (
        <div className='vanDetail---div'>
            <Link to={`..${search}`} relative='path'>Back to all vans</Link>        
            <img src={details.imageUrl} alt='display of the van'/>
            <div className='van-chars'>
            <i className='type--i'>{details.type}</i>
            <h1>{details.name}</h1>
            <h2>${details.price}/day</h2>
            <p>{details.description}</p>            
            <button>Rent this van</button>
            </div>
        </div>
    ): <h2>Loading...</h2>}
    </div>
  )
}
