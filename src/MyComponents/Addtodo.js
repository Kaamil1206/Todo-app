import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export const Addtodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [show, setShow] = useState(true);
    const nodeRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();

        if (title.trim() === "" || desc.trim() === "") {
            alert("Please fill in both Title and Description before adding 🚨");
            return;
        }

        addTodo(title.trim(), desc.trim());
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
            <div
                ref={nodeRef}
                className="glass-card p-4 shadow-sm mb-4 rounded-3"
            >
                <h5 className="text-center mb-3 fw-bold "> Add a New Todo</h5>
                <form onSubmit={submit}>
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

                    <button
                        type="submit"
                        className="btn btn-success w-100 fw-bold shadow"
                    >
                        Add Todo 🚀
                    </button>
                </form>
            </div>
        </CSSTransition>
    );
};
