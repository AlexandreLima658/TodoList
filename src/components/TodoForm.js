import React, {useState, useEffect, useRef} from 'react'
import { FcPlus, FcOk } from "react-icons/fc";

function Todo(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value: '')

  const inputRef = useRef()

  useEffect(() =>{
    inputRef.current.focus()
  })

  const handleChange =  e =>{
    setInput(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random()* 10000),
      text: input
    })
    setInput('')
  }
  return (
    
    <form onSubmit={handleSubmit} className="todo-form" >
      {props.edit ? (
        
          <div className="single-input">
          <input 
              type="text" 
              value={input}
              required
              name="text" 
              className="input"
              onChange={handleChange}
              ref={inputRef}
            />
            <label for="atualizar">Atualizar</label>
            <button className="btn-at">
             <FcOk />
          </button>
          </div>
          ) : (
        <div className='single-input'> 
          
           <input
            type="text" 
            value={input}
            required
            name="text" 
            className="input"
            onChange={handleChange}
            ref={inputRef}
          />
            <label for="adicionar">Adicionar</label>
          
          <button className="btn-add">
             <FcPlus />
          </button>
         
        </div>
      )
     }
       
      </form>
   
  )
}

export default Todo