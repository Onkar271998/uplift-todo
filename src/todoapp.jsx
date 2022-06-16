import React,{useState} from 'react'
import Completed from './compleated';
import Input from './input'
import List from './list';

const Todoapp = () => {
    const [task, setTask] = useState([]);

    const addTask = (newTask) => {
        setTask([...task, {
            id: Date.now(),
            value: newTask,
            checked: false
        }]);
  }
  const deleteTask = (id) => {
        setTask(task.filter((e) => e.id !== id))
  }
  return (
    <div>
          <Input addTask={addTask} /> 
          <List  task={task} deleteTask={deleteTask} />
          <Completed />
    </div>
  )
}

export default Todoapp