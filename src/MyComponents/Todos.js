import React from 'react'
import { Todoitem } from './Todoitem';
export const Todos = (props) => {
    return (
        <div className='container'>
            <h3>Todos Works</h3>
            <Todoitem todo={props.todos[0]}/>

        </div>
    )
}
