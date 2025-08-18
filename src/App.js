import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react';
import { Addtodo } from './MyComponents/Addtodo';
function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete function of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the Market",
      desc: "You need to go to the market to buy vegetables"
    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc: "You need to go to the mall to buy clothes"
    },
    {
      sno: 3,
      title: "Go to the Bank",
      desc: "You need to go to the bank to deposit money"
    }]);
  return (

    <>
      <Header title="My Todos List" searchBar={true} />
      <Addtodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
