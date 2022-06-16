import React, { useState } from 'react'
import styles from './todo.module.css'

const Input = ({addTask}) => {
    const [value, setValue] = useState("")
  return (
      <div className={styles.top}>
          <button onClick={() => {
              addTask(value)
              setValue("")
          }}>+</button>
       <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type something" />   
    </div>
  )
}

export default Input