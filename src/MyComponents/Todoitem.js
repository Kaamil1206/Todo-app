import React from 'react';

export const Todoitem = ({ todo, onDelete, onEdit, theme }) => {
    return (
        <div className={`card shadow-sm mb-3 ${theme === "dark" ? "bg-secondary text-light" : "bg-white text-dark"}`}>
            <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <p className="card-text">{todo.desc}</p>
                <div className="d-flex justify-content-center mt-2">
                    <button className="btn btn-sm btn-primary me-2" onClick={onEdit}>
                        Edit
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={onDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
