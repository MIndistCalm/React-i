import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

const Counter = ({ min, max }) => {

    const [ count, setCount ] = useState(min)
    const [inputValue, setInputValue] = useState(count)

    useEffect( () => setInputValue(count), [count]);

    const isLessThanMax = count < max;
    const isMoreThanMin = count > min;
    
    const inc = () => { 
        setCount(isLessThanMax ? count + 1 : count);
    }
    const dec = () => { 
        setCount(isMoreThanMin ? count - 1 : count);
    }
    
    const handleInputChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleInputBlur = () => {
        const parsedInputValue = parseInt(inputValue, 10);

        if (isNaN(parsedInputValue)){
            setInputValue(count)
        } else{
            const nextCountValue = Math.min(Math.max(min, parsedInputValue), max);

            count === nextCountValue ? setInputValue(nextCountValue) : setCount(nextCountValue);
        }
    }

    return <div>
                <button type="button" onClick={ dec } disabled={ !isMoreThanMin }>-</button>
                <span>{ count }</span>
                <input 
                    type="text" 
                    value={ inputValue } 
                    onChange={ handleInputChange }
                    onBlur={ handleInputBlur } />
                <button type="button" onClick={ inc } disabled={ !isLessThanMax }>+</button>
            </div>
}

Counter.defaultProps = {
    min: 0,
    max: Infinity,
}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    count: PropTypes.string,
  };

export default Counter; 