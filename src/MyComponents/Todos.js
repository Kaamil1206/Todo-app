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
                        <Todoitem
                            todo={todo}
                            key={todo.sno}
                            onDelete={props.onDelete}
                        />
                    );
                })
            }
        </div>
    )
}
