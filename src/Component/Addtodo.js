import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  
  const submit = (e) => {
    e.preventDefault()
    if (!title || !desc) {
      alert("Please fill in both fields.")
    }
    addTodo(title, desc)
  }
  
  return (
    <div className='container my-3'>
      <h3 className='text-center'>Add a todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3 w-75">
          <label htmlFor="title" className="form-label">Todo title</label>
          <input type="text" name="title" value={title} id="title" className="form-control" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="my-3 w-75">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text" name="desc" value={desc} id="desc" className="form-control" onChange={(e) => setDesc(e.target.value)} />
        </div>
        <button type='submit' className="btn btn-sm btn-success">Add todo</button>
      </form>
    </div>
  )
}

export default AddTodo;
