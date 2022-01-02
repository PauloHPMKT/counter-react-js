import React, { useState } from 'react';

import './Counter.css' 

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleOnclick = operador => {
        let novoValor = operador === '+'
            ?count + 1
            :count - 1
        setCount(novoValor)
    }
    
    return(
        <div className='counter'>
            <span>{count}</span>
            <button onClick={() => handleOnclick('-')}>-</button>
            <button onClick={() => handleOnclick('+')}>+</button>
        </div>
    )
}

export default Counter