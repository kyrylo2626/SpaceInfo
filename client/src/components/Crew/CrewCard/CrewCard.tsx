import './CrewCard.css'
import { IoPerson } from "react-icons/io5"


export default function CrewCard(props: { data: { craft: string, name: string } }) {
    
    
    return (
        <div className='crew-card'>
            <div className='icon-person-box'>
                <IoPerson className='icon-person'/>
            </div>
            <label>{props.data.name}</label>
        </div>
    )
}