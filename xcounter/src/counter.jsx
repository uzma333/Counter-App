import React, { useState } from 'react'
import styles from "./counter.module.css"

function Counter() {
    const[counter,setCounter]=useState();


const handleIncrement=()=>{
    setCounter(counter+1)
}

const handleDecrement=()=>{
    setCounter(counter-1)
}







  return (
    <div className={styles.counter}>
        <h1>Counter App</h1>
        <p>Count: {counter}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

    </div>
  )
}

export default Counter