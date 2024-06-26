import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Todo = ({task,deleteTodo, editTodo, toggleCompleted}) => {
  return (
    <div className='Todo'>
      <p className={`${task.completed?"completed":"incompleted"}`} onClick={()=>toggleCompleted(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
        <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo
