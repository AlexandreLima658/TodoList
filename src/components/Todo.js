import React, {useState} from 'react'
import TodoForm from "./TodoForm"
import {RiCloseCircleLine} from "react-icons/ri"
import { FcEmptyTrash, FcEditImage } from "react-icons/fc";
import {TiEdit} from "react-icons/ti"



function Todo({todos, completeTodo, removeTodo, updateTodo}) {

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value =>{
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
    }
    if(edit.id){
      return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
  return todos.map((todo, index) => ( 
    <div clasName={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div className='values' key={todo.id} oncClick={() => completeTodo(todo.id)}>
        <p>
          {todo.text}
        </p>
        <FcEmptyTrash 
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <FcEditImage 
          onClick={() => setEdit({id: todo.id, value: todo.text})}
          className="edit-icon"
        />
      </div>
      
      
    </div>
  ))
    
}

export default Todo