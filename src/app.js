import React from 'react'

import CounterCl from './CounterClass'
import CounterFn from './Counter'

import UserCard from './UserCard'

const App = () => {
    return <div>
                <header>
                    Header
                </header>
                <div>
                    <h2>Test Class</h2>
                    <CounterCl/>
                    <hr/>
                    <h2>Test Class</h2>
                    <CounterFn min={1} max={10} />
                    <hr/>
                </div>
                <footer>
                    footer
                    <UserCard name="Olga" description="With Apple"/>
                    <UserCard name="Olga" description="With Banana"/>
                </footer>
            </div>
}

export default App;