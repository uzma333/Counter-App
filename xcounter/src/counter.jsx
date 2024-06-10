import React, { useState } from 'react'
import styles from "./counter.module.css"

function Counter() {
    const[count,setCount]=useState(0);


const handleIncrement=()=>{
    setCount((prevState)=>prevState+1)
}

const handleDecrement=()=>{
    setCount((prevState)=>prevState-1)
}







  return (
    <div className={styles.counter}>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

    </div>
  )
}

export default Counter