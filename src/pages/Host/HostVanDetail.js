import React from 'react';
import { useParams, Link, Outlet, NavLink, useOutletContext} from 'react-router-dom';


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

    const styles = {
      fontWeight: 'bold',
      textDecoration: 'underline',
      color: '#161616'
    }

    return (
        <section className='hostVanDetail--section'>        
          <Link to=".." 
          relative="path"  
          className="back-button"><span>Back to all vans</span></Link> {/*/ I want the link to be relative to the path, not the route hierarchy given by my index.js*/}
          
          <div key={details.id} className='host-van-detail-layout-container'>
            <div className='host-van-detail'>         
              <img src={details.imageUrl} alt={details.name} />
              <div className='host-van-detail-info-text'>
                <i className="type--i">{details.type}</i>
                <h2>{details.name}</h2>
                <p>${details.price}/day</p>
              </div>
            </div>


          <nav className='host-van-detail-navbar'>
            <NavLink to='.' relative='path' end  style={({isActive}) => isActive? styles : null}>Details</NavLink>
            <NavLink to='pricing' style={({isActive}) => isActive? styles : null}>Pricing</NavLink>
            <NavLink to='photos' style={({isActive}) => isActive? styles : null}>Photos</NavLink>
          </nav>
          <Outlet context={{details}}/> {/* This will render the component below the HostVanDetail */}
          

          </div>
     </section>
    );
}
