import React from 'react'

const Todo = ({Todo , onDelete }) => {
  return (
    <>
      <h4>{Todo.title}</h4>
      <p>{Todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(Todo)}}>Delete</button>
    </>
  )
}

export default Todo
