import React from 'react'

export const Addtodo = (props) => {
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const submit = (e) => {

    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}class="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Todo Descreption</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc" />
                </div>
                <button type="submit" class="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}
