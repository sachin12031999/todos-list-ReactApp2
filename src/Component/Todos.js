import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
  return (
    <>
    <div className="container " style={{height : "60vh"}}>
        <h3 className="text-center my-2">Todos List</h3>
      {/* <Todo todo={props.Todo[0]}/> */}
      {props.todos.length===0?"No Todos avilable": Todos}
      {props.todos.map((todo)=>{
        return  <Todo Todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })}

     

    </div>
    </>
  )
}

export default Todos;
