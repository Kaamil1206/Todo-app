import React, { useRef } from "react";
import { Todoitem } from "./Todoitem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Todos = ({ todos, onDelete }) => {
    const containerRef = useRef(null);
    const nodeRefs = useRef({});

    const handleDelete = (todo) => {
        const scrollTop = containerRef.current?.scrollTop; // save scroll
        onDelete(todo);
        setTimeout(() => {
            if (containerRef.current) {
                containerRef.current.scrollTop = scrollTop; // restore scroll
            }
        }, 0);
    };

    return (
        <div
            ref={containerRef}
            className="container fade-in todos-container"
            style={{
                minHeight: "70vh",
                margin: "40px auto",
                maxHeight: "65vh", // ✅ keeps list contained
                overflowY: "auto", // ✅ scrolls inside container only
            }}
        >
            {todos.length === 0 ? (
                <div className="glass-card p-4 text-center text-muted shadow-sm rounded-3">
                    <p>No Todos to display</p>
                </div>
            ) : (
                <TransitionGroup component={null}>
                    {todos.map((todo) => {
                        if (!nodeRefs.current[todo.sno]) {
                            nodeRefs.current[todo.sno] = React.createRef();
                        }
                        return (
                            <CSSTransition
                                key={todo.sno}
                                timeout={300}
                                classNames="todo"
                                nodeRef={nodeRefs.current[todo.sno]} // ✅ avoids findDOMNode error
                            >
                                <div
                                    ref={nodeRefs.current[todo.sno]}
                                    className="todo-item glass-card p-3 mb-3 shadow-sm rounded-3"
                                >
                                    <Todoitem todo={todo} onDelete={() => handleDelete(todo)} />
                                </div>
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            )}
        </div>
    );
};
