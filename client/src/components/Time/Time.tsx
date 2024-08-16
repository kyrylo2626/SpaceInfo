import { useEffect, useState } from 'react'
import { useTime } from '../../hooks/useTime';
import './Time.css'


export default function Time() {

    const { getDateTime } = useTime();
    const [ dateTime, setDateTime ] = useState(getDateTime());

    useEffect(() => {
        const intervalDateTime = setInterval(() => { setDateTime(getDateTime()) }, 1000);
        return () => clearInterval(intervalDateTime);
    }, []);

    
    return (
        <div className='time'>
            <label style={{fontSize: '16pt', fontWeight: '600'}}>Current UTC time:</label>
            <label>{dateTime}</label>
        </div>
    )
}