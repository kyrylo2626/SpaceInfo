import './Location.css'
import { useLocation } from '../../hooks/useLocation'
import { useEffect } from 'react';


export default function Location() {

    const { getLocation } = useLocation();
    
    useEffect(() => {
        const intervalLocation = setInterval(() => { getLocation.refetch() }, 5000);
        return () => clearInterval(intervalLocation);
    }, []);
    
    return (
        <div className='loaction'>
            {
                getLocation.isSuccess
                ?
                <>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" className='icon-logo' />
                    <label style={{fontSize: '16pt', fontWeight: '600'}}>ISS is now located at:</label>
                    <label>
                        {`
                            Longitude: ${getLocation.data.iss_position.longitude}; 
                            Latitude: ${getLocation.data.iss_position.latitude}
                        `}
                    </label>
                </>
                : getLocation.isError
                ? <div className='center-div'><label>Server Error</label></div>
                : <div className='center-div'><label>Loading...</label></div>
            }
        </div>
    )
}