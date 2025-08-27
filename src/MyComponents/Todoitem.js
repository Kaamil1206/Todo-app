import React from 'react';

export const Todoitem = ({ todo, onDelete }) => {
    return (
        <div className="card shadow-sm mb-3">
            <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <p className="card-text">{todo.desc}</p>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(todo)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
