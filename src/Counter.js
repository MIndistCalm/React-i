import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Counter = ({ min, max }) => {

    let [ current, setCurrent ] = useState(min)
    let inc = () => { (current < max) ? 
        setCurrent(current + 1) : setCurrent(max);
    }
    let dec = () => { (current > min) ? 
        setCurrent(current - 1) : setCurrent(min);
    }
    
    return <div>
                <button type="button" onClick={ dec } disabled={ current <= min }>-</button>
                <span>{ current }</span>
                <input type="number" value={ current } onChange={ event => setCurrent((current >= max + 1) ? max : ((current <= min - 1) ? min : event.target.value)) } />
                <button type="button" onClick={ inc } disabled={ current >= max }>+</button>
            </div>
}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    current: PropTypes.number,
  };

export default Counter; 