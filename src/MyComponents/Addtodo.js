import React, { useState } from 'react';

export const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            if(!title){
                alert("Title cannot be blank");
            }
            if(!desc){
                alert("Description cannot be blank");
            }
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="form-control"
                            id="title"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <textarea
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            className="form-control"
                            id="desc"
                            rows="3"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success w-100">Add Todo</button>
                </form>
            </div>
        </div>
    );
};
