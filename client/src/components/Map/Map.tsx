import './Map.css'
import { APIProvider, Map as GoogleMap, Marker } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { useLocation } from '../../hooks/useLocation';


export default function Map() {

    const { getLocation } = useLocation();
    
    useEffect(() => {
        const intervalMap = setInterval(() => { getLocation.refetch() }, 5000);
        return () => clearInterval(intervalMap);
    }, []);
    
    
    return (
        <div className='map'>
            {
                getLocation.isSuccess
                ?
                <APIProvider apiKey={import.meta.env.VITE_MAP_KEY_1}>
                    <GoogleMap defaultZoom={10} className='google-map'
                        center={{ lng: +getLocation.data.iss_position.longitude, lat: +getLocation.data.iss_position.latitude }}>
                        <Marker position={{ lng: +getLocation.data.iss_position.longitude, lat: +getLocation.data.iss_position.latitude }}/>
                    </GoogleMap>
                    <div className='google-map-wrapper' />
                </APIProvider>
                : getLocation.isError
                ? <div className='center-div'><label>Server Error</label></div>
                : <div className='center-div'><label>Loading...</label></div>
            }
        </div>
    )
}