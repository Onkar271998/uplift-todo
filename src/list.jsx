import React from 'react'
import Todoitem from './todoitems'
import styles from './todo.module.css'

const List = ({ task,deleteTask }) => {
   
    
  return (
      <div className={styles.list}>
          {task.map((e) => (
              <Todoitem key={e.id} e={e} deleteTask={deleteTask }/>
          ))}
    </div>
  )
}

export default List