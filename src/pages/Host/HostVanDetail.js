import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function HostVanDetail() {
    const { id } = useParams();
    const [details, setDetails] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/host/${id}`)
            .then(resp => resp.json())
            .then(data => setDetails(data.van)) // Use `van`, not `vans`
            .catch((error) => console.error("Error fetching details:", error));
    }, []);

    if (!details) {
        return <h2>Loading...</h2>;
    }

    return (
        <div key={details.id} className='host-detail-div'>        
          <Link to=".." 
          relative="path" 
          className="back-button"><span>Back to all vans</span></Link> {/*/ I want the link to be relative to the path, not the route hierarchy given by my index.js*/}
          <img src={details.imageUrl} alt={details.name} />
          <div className='host-detail-info'>
            <i className="type--i">{details.type}</i>
            <h2>{details.name}</h2>
            <p>${details.price}/day</p>
          </div>
        </div>
    );
}
