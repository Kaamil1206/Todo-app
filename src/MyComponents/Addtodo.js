import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export const Addtodo = ({ addTodo, editTodo, setEditTodo, todos, setTodos }) => {
    // Local state for form inputs
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [show, setShow] = useState(true); // Controls CSSTransition visibility
    const nodeRef = useRef(null); // Reference for animation

    // Populate form fields if editing a todo
    useEffect(() => {
        if (editTodo) {
            setTitle(editTodo.title);
            setDesc(editTodo.desc);
        }
    }, [editTodo]);

    // Handle form submission
    const submit = (e) => {
        e.preventDefault();

        // Basic validation
        if (title.trim() === "" || desc.trim() === "") {
            alert("Please fill in both Title and Description before adding 🚨");
            return;
        }

        if (editTodo) {
            // Update existing todo
            const updatedTodos = todos.map((t) =>
                t.sno === editTodo.sno ? { ...t, title, desc } : t
            );
            setTodos(updatedTodos);
            setEditTodo(null); // Reset edit mode
        } else {
            // Add new todo
            addTodo(title.trim(), desc.trim());
        }

        // Reset form fields
        setTitle("");
        setDesc("");
    };

    return (
        <CSSTransition
            in={show}
            timeout={300}
            classNames="fade"
            unmountOnExit
            nodeRef={nodeRef}
        >
            <div ref={nodeRef} className="glass-card p-4 shadow-sm mb-4 rounded-3">
                {/* Form Header */}
                <h5 className="text-center mb-3 app-title">
                    {editTodo ? "Edit Todo" : "Add a New Todo"}
                </h5>

                {/* Todo Form */}
                <form onSubmit={submit}>
                    {/* Title Input */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label fw-semibold">
                            Todo Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="form-control shadow-sm"
                            placeholder="Enter todo title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {/* Description Input */}
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label fw-semibold">
                            Description
                        </label>
                        <textarea
                            id="desc"
                            className="form-control shadow-sm"
                            rows="3"
                            placeholder="Enter todo details..."
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-success w-100 fw-bold shadow"
                    >
                        {editTodo ? "Save Changes" : "Add Todo"}
                    </button>
                </form>
            </div>
        </CSSTransition>
    );
};
