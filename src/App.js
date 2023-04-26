import React, { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Todos from './Component/Todos';
import Footer from './Component/Footer';
import Addtodo from './Component/Addtodo';

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Study React",
      desc: "Complete JavaScript first at night, then study ReactJS in the morning."
    },
    {
      sno: 2,
      title: "Go to Ghat",
      desc: "Complete job 2."
    }
  ]);

  const onDelete = (todo) => {
    // console.log("onDelete work", todo);
    setTodos(todos.filter((e) => e !== todo));
  }

  let addTodo = (title , desc)=>{
    console.log(title , desc);
    let sno
    if(todos.length==0){
      sno=0
    }
    else{sno = todos[todos.length-1].sno+1;}
    let myTodo ={
      sno: sno,
      title: title,
      desc:desc
    }
    setTodos([...todos , myTodo])
  }

  return (
    <div className="">
      <Header title="ToDos List" />
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
