import React, { useRef } from "react";
import { Todoitem } from "./Todoitem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Todos = ({ todos, onDelete, onEdit }) => {
    const containerRef = useRef(null);
    const nodeRefs = useRef({});

    const handleDelete = (todo) => {
        const scrollTop = containerRef.current?.scrollTop;
        onDelete(todo);
        setTimeout(() => {
            if (containerRef.current) {
                containerRef.current.scrollTop = scrollTop;
            }
        }, 0);
    };

    return (
        <div
            ref={containerRef}
            className="container fade-in todos-container"
            style={{ minHeight: "70vh", margin: "40px auto", maxHeight: "65vh", overflowY: "auto" }}
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
                                timeout={400}
                                classNames="todo"
                                nodeRef={nodeRefs.current[todo.sno]}
                            >
                                <div
                                    ref={nodeRefs.current[todo.sno]}
                                    className="todo-item glass-card p-3 mb-3 shadow-sm rounded-3"
                                >
                                    <Todoitem
                                        todo={todo}
                                        onDelete={() => handleDelete(todo)}
                                        onEdit={onEdit}
                                        theme="light"
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
