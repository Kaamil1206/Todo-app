import React, { useRef } from "react";
import { Todoitem } from "./Todoitem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Todos = ({ todos, onDelete, onEdit }) => {
    // Reference to the container for scrolling / animations
    const containerRef = useRef(null);

    // Keep a ref for each todo item to properly handle CSSTransition
    const nodeRefs = useRef({});

    return (
        <div
            ref={containerRef}
            className="container fade-in todos-container"
            style={{
                minHeight: "70vh",
                margin: "40px auto",
                maxHeight: "65vh",
                overflowY: "auto",
            }}
        >
            {/* Display a message if there are no todos */}
            {todos.length === 0 ? (
                <div className="glass-card p-4 text-center text-muted shadow-sm rounded-3">
                    <p>No Todos to display</p>
                </div>
            ) : (
                // Animate the list of todos
                <TransitionGroup component={null}>
                    {todos.map((todo) => {
                        // Ensure each todo has its own ref for animation
                        if (!nodeRefs.current[todo.sno]) {
                            nodeRefs.current[todo.sno] = React.createRef();
                        }

                        return (
                            <CSSTransition
                                key={todo.sno}
                                timeout={400}
                                classNames="todo"
                                nodeRef={nodeRefs.current[todo.sno]}
                            >
                                {/* Each todo item */}
                                <div
                                    ref={nodeRefs.current[todo.sno]}
                                    className="todo-item glass-card p-3 mb-3 shadow-sm rounded-3"
                                >
                                    <Todoitem
                                        todo={todo}
                                        onDelete={() => onDelete(todo)}
                                        onEdit={() => onEdit(todo)}
                                    />
                                </div>
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            )}
        </div>
    );
};
