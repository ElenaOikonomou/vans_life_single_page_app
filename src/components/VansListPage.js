import React from 'react'
import { useEffect, useState} from 'react'

export default function VansListPage() {

  const [vansData, setVansData] = useState([])

  
  function displayedData(data){
    
      const selectedData = data.map(van =>{
        return (
          <div key={van.id}>
            <h2>{van.name}</h2>
            <img src={van.imageUrl} alt={van.name} />
            <p>{van.description}</p>
          </div>
        )
      })
      return selectedData
      }
      
  

  /*const finalVansData = vansData.map(van => {
    return (van.imageUrl)
  })*/
 

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
    <div>
    <h1>These are my data</h1>
        <div>{displayedData(vansData)}</div>
    </div>
  )
}
