import React, { useState } from 'react'
import styles from "./todo.module.css"

const Todoitem = ({ e,deleteTask }) => {
    //console.log('e:', e)
    const [complete, setComplete] = useState(e.checked)

  return (
    <div className={styles.map}>
        <h4 className={complete ? styles.striked : ""} >
        <input
          className={styles.check}type="checkbox" checked={complete} onChange={(e) => { setComplete(e.target.checked) }} />
                  {e.value}
          </h4>
          <button onClick={() => deleteTask(e.id)}>Delete</button>
    </div>
  )
}

export default Todoitem