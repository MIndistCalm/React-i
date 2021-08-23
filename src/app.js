import React from 'react'

import CounterCl from './CounterClass'
import CounterFn from './Counter'

const App = () => {
    return <div>
                <header>
                    Header
                </header>
                <body>
                    <h2>Test Class</h2>
                    <CounterCl/>
                    <hr/>
                    <h2>Test Function</h2>
                    <CounterFn/>
                    <hr/>
                </body>
                <footer>
                    footer
                </footer>
            </div>
}


export default App;