import { useEffect, useState, memo } from 'react';
import './App.css';
import { Addtodo } from './MyComponents/Addtodo';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { About } from './MyComponents/About';
import { motion } from "framer-motion";
import ParticlesBackground from './MyComponents/ParticlesBackground';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const MemoizedParticles = memo(ParticlesBackground);

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    const newTodos = todos.filter((e) => e !== todo);
    setTodos(newTodos);
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = { sno, title, desc };
    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 animated-bg" style={{ position: "relative" }}>
        {/* Particles fixed in background, won't re-render */}
        <MemoizedParticles />

        <div className="flex-grow-1" style={{ position: "relative", zIndex: 1 }}>
          <Header title="My Todos List" searchBar={true} />
          <Switch>
            <Route exact path="/">
              <div className="container my-3">

                {/* AddTodo card with motion animation */}
                <motion.div
                  className="glass-card p-4 shadow-lg mb-4"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Addtodo addTodo={addTodo} />
                </motion.div>

                {/* Todos list card with motion animation */}
                <motion.div
                  className="glass-card p-4 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <h4 className="text-center mb-3">My Todos</h4>
                  <Todos todos={todos} onDelete={onDelete} />
                </motion.div>
              </div>
            </Route>

            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
