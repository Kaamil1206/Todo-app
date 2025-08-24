import { useEffect, useState } from 'react';
import './App.css';
import { Addtodo } from './MyComponents/Addtodo';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { About } from './MyComponents/About';
import {
  browserRouter as Router,
  Switch,
  Route,
  Links
} from "react-router";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("I am onDelete function of todo", todo);
    const newTodos = todos.filter((e) => e !== todo);
    setTodos(newTodos);
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <router>
        <Header title="My Todos List" searchBar={true} />

        <Switch>

          <Route path="/" render={() => {
            return(
            <>
              <Addtodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
            )

          }}>
          </Route>

          <Route path="/about">
            <About />
          </Route>

        </Switch>

        <Footer />
      </router>
    </>
  );
}

export default App;
