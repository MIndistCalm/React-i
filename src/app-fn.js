import React, { useState } from 'react'


const App = () => {

    let [ clicks, updateClicks ] = useState(0)

    return <div>
                <header>
                    Header
                </header>
                <body>
                    <span onClick = {() => updateClicks(clicks + 1)}>{ clicks }</span>
                    <p>Appfn file</p>
                </body>
                <footer>
                    footer
                </footer>
            </div>
}


export default App;