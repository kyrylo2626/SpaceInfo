import { useEffect, useRef, useState } from 'react';
import { useCrew } from '../../hooks/useCrew'
import './Crew.css'
import CrewCard from './CrewCard/CrewCard';


export default function Crew() {

    const { getCrew } = useCrew();

    useEffect(() => {
        const intervalCrew = setInterval(() => { getCrew.refetch() }, 5000);
        return () => clearInterval(intervalCrew);
    }, []);


    const crewBodyRef = useRef<HTMLDivElement | null>(null);
    const [ isOverflow, setIsOverflow ] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (crewBodyRef.current) {
                const hasOverflow = crewBodyRef.current.scrollHeight > crewBodyRef.current.clientHeight;
                setIsOverflow(hasOverflow)
            }
        }
            
        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => { window.removeEventListener('resize', checkOverflow) };
    }, [getCrew]);
    
    
    return (
        <div className='crew'>
            {
                getCrew.isSuccess
                ?
                <>
                    <div ref={crewBodyRef} className={`crew-body ${isOverflow ? 'overflow' : ''}`} id='scrollfield'>
                        {   
                            getCrew.data?.people.map((item, index) => (
                                index !== getCrew.data?.people.length-1
                                ? <><CrewCard data={item} /><br /></>
                                : <CrewCard data={item} />
                            ))
                        }
                    </div>
                    <div className='crew-footer'>
                        <label>{`Total amount: ${getCrew.data?.number} people on ISS`}</label>
                    </div>
                </>
                : getCrew.isError
                ? <div className='center-div'><label>Server Error</label></div>
                : <div className='center-div'><label>Loading...</label></div>
            }
        </div>
    )
}