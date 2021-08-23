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
                    <CounterFn max={5} />
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