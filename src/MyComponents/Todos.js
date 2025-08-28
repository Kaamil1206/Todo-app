import React from 'react';
import { Todoitem } from './Todoitem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    };

    return (
        <div className='container fade-in' style={myStyle}>
            {props.todos.length === 0 ? (
                <div className="glass-card p-4 text-center text-muted">
                    <p>No Todos to display</p>
                </div>
            ) : (
                <TransitionGroup>
                    {props.todos.map((todo) => (
                        <CSSTransition
                            key={todo.sno}
                            timeout={300}
                            classNames="todo"
                        >
                            <div className="todo-item">
                                <Todoitem todo={todo} onDelete={props.onDelete} />
                            </div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            )}
        </div>
    );
};
