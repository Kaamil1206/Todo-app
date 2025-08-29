import React from 'react';

export const Todoitem = ({ todo, onDelete, onEdit, theme }) => {
    return (
        <div
            className={`card shadow-sm mb-3 ${theme === "dark" ? "bg-secondary text-light" : "bg-white text-dark"
                }`}
        >
            <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <p className="card-text">{todo.desc}</p>

                {/* Buttons below content */}
                <div className="d-flex justify-content-start gap-2 mt-3">
                    <button
                        className={`btn btn-sm ${theme === "dark" ? "btn-outline-primary" : "btn-primary"
                            }`}
                        onClick={() => onEdit(todo)}
                    >
                        Edit
                    </button>

                    <button
                        className={`btn btn-sm ${theme === "dark" ? "btn-outline-light" : "btn-danger"
                            }`}
                        onClick={() => onDelete(todo)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
