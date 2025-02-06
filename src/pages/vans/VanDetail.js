import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getVan} from '../../api'




export default function VanDetail() {

  const location = useLocation()
  console.log(location)
  const params = useParams()
  console.log(params)
  const type = location.state?.type || "all"
  const [details, setdetails] = useState(null)
  const search = location.state?.search || "" //newer JS syntax (optional chaining) means if there is a state inside the link then use the value or search else nothing
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

    useEffect(()=>{
      async function loadVans() {
        setLoading(true)
        try {
            const data = await getVan(params.id)
            setdetails(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }
    loadVans()
}, [params.id])

    
if (loading) {
  return <h1>Loading...</h1>
}

if (error) {
  return <h1>There was an error: {error.message}</h1>
}

   
  return (
    
    <div>
    
      {details ? (
        <div className='vanDetail---div'>
            <Link to={`..${search}`} relative='path'>Back to {type} vans</Link>        
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
