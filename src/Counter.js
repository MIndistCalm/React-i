import React, { useState } from 'react'

const App = () => {

    let [ clicks, updateClicks ] = useState(0)

    return <div>
                <span onClick = {() => updateClicks(clicks + 1)}>{ clicks }</span>
                <p>Appfn file</p>
            </div>
}


export default App;