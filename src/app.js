import React from 'react'

class App extends React.Component{

    state = {
        clicks: 1
    }

    render(){
        let { clicks } = this.state;

        return <div>
                    <span onClick={() => this.setState({clicks: clicks + 1})}>
                        { this.state.clicks }
                    </span>
                </div>
    }
}

export default App;