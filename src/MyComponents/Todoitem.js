import React from 'react';

export const Todoitem = ({ todo, onDelete, onEdit, theme }) => {
    // Determine card styling based on the selected theme
    const cardClass = theme === "dark"
        ? "card shadow-sm mb-3 bg-secondary text-light"
        : "card shadow-sm mb-3 bg-white text-dark";

    return (
        <div className={cardClass}>
            <div className="card-body">
                {/* Todo Title */}
                <h5 className="card-title">{todo.title}</h5>

                {/* Todo Description */}
                <p className="card-text">{todo.desc}</p>

                {/* Action Buttons */}
                <div className="d-flex justify-content-center mt-2">
                    <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={onEdit}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
