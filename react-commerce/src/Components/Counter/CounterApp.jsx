import React, { useState } from 'react'

const CounterApp = ({value = 0}) => {

    const[counter,SetCounter] = useState(value);

    const increaseValue = () =>{
        SetCounter((prevState)=> prevState +1);
        SetCounter(counter +1)
    }
    const restValue = () =>{
        if(counter === 0) return value;

       else SetCounter((prevState) => prevState -1);
    }
    const DeleteValue = () =>{
        SetCounter((value = 0));
    }



  return (
<>
    <div>{counter}</div>
    <button onClick={increaseValue}>+</button>
    <button onClick={restValue}>-</button>
    <button onClick={DeleteValue}>C</button>
</>
  )
}

export default CounterApp