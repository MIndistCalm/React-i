import React, { useState } from 'react'

const Counter = ({ max }) => {

    let [ clicks, setClicks ] = useState(0)
    let inc = () => { (clicks < max) ? 
        setClicks(clicks + 1) : null;
    }
    return <div>
                <span>{ clicks }</span>
                <button type="button" onClick={ inc } disabled={ clicks >= max }>+</button>
            </div>
}


export default Counter;