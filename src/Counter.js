import React, { useState } from 'react'

const Counter = () => {

    let [ clicks, setClicks ] = useState(0)
    let inc = () => {
        setClicks(clicks + 1)
    }
    return <div>
                <span onClick = { inc }>{ clicks }</span>
                <p>Appfn file</p>
            </div>
}


export default Counter;