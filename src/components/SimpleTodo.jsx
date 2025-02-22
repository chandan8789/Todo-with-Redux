import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const SimpleTodo = () => {

    const todos = useSelector(state => state.todos)
    console.log(todos);
    const dispatch = useDispatch()

  return (
    <>
      <div>Todos</div>
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.text}
            <button onClick={()=> dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    
    </>
  )
}

export default SimpleTodo
