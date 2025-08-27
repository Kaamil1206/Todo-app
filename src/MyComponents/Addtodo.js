import React from 'react';

export const Addtodo = (props) => {
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
            return;
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    };

    return (
        <div className="container my-4 d-flex justify-content-center">
            <div className="card shadow-sm" style={{height:"20rem", width: "40rem" }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-3">Add a Todo</h3>

                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label" >Todo Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-control"
                                id="title"
                                placeholder="Enter todo title"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Todo Description</label>
                            <input
                                type="text"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                className="form-control"
                                id="desc"
                                placeholder="Enter todo description"
                            />
                        </div>

                        <button type="submit" className="btn btn-success w-100">Add Todo</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
