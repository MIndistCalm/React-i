import React from 'react'

class Counter extends React.Component{

    state = {
        clicks: 0
    }

    inc = () => {
        let { clicks } = this.state;
        this.setState({ clicks: clicks + 1 })
    }

    render(){
        return <div>
                    <span onClick = { this.inc }>
                        { this.state.clicks }
                    </span>
                </div>
    }
}

export default Counter;