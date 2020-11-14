import React from 'react'
import Northan from './image/northern.gif'
import Southern from './image/southern.jpg'
import './style.css'

function Child (props){
    console.log(props)

    const {Hamisphere} = props;
    let image = Hamisphere>0? Northan:Southern;
    const location = Hamisphere>0? 'northan hamisphere' :' southern hamisphere'
    const background = Hamisphere>0? 'northan' :' southern'

    return(
        <div className={background}>
           <h2> Hamisphere: {location}</h2>
            <img src={image} alt={location}/>
        </div>
        )
   
}
export default Child