import React from 'react'

import CounterFn from './Counter'

import UserCard from './UserCard'

const App = () => {
    return <div>
                <header>
                    Header
                </header>
                <div>
                    <hr/>
                    <h2>Test function</h2>
                    <CounterFn min={1} max={10} />
                    <hr/>
                </div>
                <footer>
                    footer
                </footer>
            </div>
}

export default App;