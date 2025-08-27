import React from 'react';
import { Todoitem } from './Todoitem';

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    };

    return (
        <div className='container' style={myStyle}>
            <h3 className='my-3 text-center'>My Todos</h3>
            {props.todos.length === 0
                ? <p className="text-center text-muted">No Todos to display</p>
                : props.todos.map((todo) => {
                    return (
                        <div className="card glass-card shadow-sm mb-3" key={todo.sno}>
                            <div className="card-body">
                                <Todoitem
                                    todo={todo}
                                    onDelete={props.onDelete}
                                />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}
