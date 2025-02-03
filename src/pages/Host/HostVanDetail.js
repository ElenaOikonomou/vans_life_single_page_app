import React from 'react';
import { useParams, Link, Outlet, NavLink} from 'react-router-dom';
import { getHostVans } from '../../api';


export default function HostVanDetail() {
    const { id } = useParams();
    const [details, setDetails] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVans(){
           setLoading (true)
           try {
            const data = await getHostVans(id)
            setDetails(data)
           } catch (err) {
            setError(err)
        } finally {
          setLoading(false)
        }
      }
        loadVans()
    }, [id])

    if(loading){
      return <h1>Loading...</h1>;
    }
    
    if(error){
      return <h1>There was an error: {error.message}</h1>;
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
          
          {details &&
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
            <NavLink to='.'  end  style={({isActive}) => isActive? styles : null}>Details</NavLink>
            <NavLink to='pricing' style={({isActive}) => isActive? styles : null}>Pricing</NavLink>
            <NavLink to='photos' style={({isActive}) => isActive? styles : null}>Photos</NavLink>
          </nav>
          <Outlet context={{details}}/> {/* This will render the component below the HostVanDetail */}
          

          </div>}
     </section>
    );
}
