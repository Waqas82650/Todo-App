import React from "react"
import App from "../App"
import Todo from "./Todo"

function TodoContainer({todos,delTodo})
{
    return (
        
        <div className='tasks-container'>
           {todos.map((todo,index)=>{
            return (
                <Todo todo={todo} index={index} delTodo={delTodo}/>
            )
           })}
        </div>
      
    )
}

export default TodoContainer