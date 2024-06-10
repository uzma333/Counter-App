import React, { useState } from 'react'
import styles from "./counter.module.css"

function Counter() {
    const[counter,setCounter]=useState(0);


const handleIncrement=()=>{
    setCounter((prevState)=>prevState+1)
}

const handleDecrement=()=>{
    setCounter((prevState)=>prevState-1)
}







  return (
    <div className={styles.counter}>
        <h1>Counter App</h1>
        <p>Count: 0</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

    </div>
  )
}

export default Counter