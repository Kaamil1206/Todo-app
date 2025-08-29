import { useEffect, useState, memo } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";

import './App.css';
import Header from './MyComponents/Header';
import { Addtodo } from './MyComponents/Addtodo';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { About } from './MyComponents/About';
import ParticlesBackground from './MyComponents/ParticlesBackground';

// Memoizing the background to avoid unnecessary re-renders
const MemoizedParticles = memo(ParticlesBackground);

function App() {
  // Get todos from localStorage or start with an empty array
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);
  const [editTodo, setEditTodo] = useState(null);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (title, desc) => {
    const sno = todos.length ? todos[todos.length - 1].sno + 1 : 0;
    setTodos([...todos, { sno, title, desc }]);
  };

  // Delete a todo
  const onDelete = (todo) => {
    setTodos(todos.filter(t => t.sno !== todo.sno));
  };

  // Set a todo for editing
  const onEdit = (todo) => {
    setEditTodo(todo);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 animated-bg" style={{ position: "relative" }}>
        {/* Background */}
        <MemoizedParticles />

        <div className="flex-grow-1" style={{ position: "relative", zIndex: 1 }}>
          {/* Header with search bar */}
          <Header title="My Todos List" searchBar={true} />

          <Switch>
            <Route exact path="/">
              <div className="container my-3">

                {/* Add Todo Section */}
                <motion.div
                  className="glass-card p-4 shadow-lg mb-4"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Addtodo
                    addTodo={addTodo}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                    todos={todos}
                    setTodos={setTodos}
                  />
                </motion.div>

                {/* List of Todos */}
                <motion.div
                  className="glass-card p-4 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <h4 className="text-center mb-3">My Todos</h4>
                  <Todos todos={todos} onDelete={onDelete} onEdit={onEdit} />
                </motion.div>
              </div>
            </Route>

            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
