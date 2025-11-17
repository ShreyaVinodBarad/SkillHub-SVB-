import React, { useState } from 'react'

const ToDoList = () => {
    const [task, setTask] = useState("")
    const [notes, setNotes] = useState([])
    const handleDelete = note => {
        setNotes(notes.filter(item => item !== note))
    }
    const reset = () => {
        setTask("")
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <input type="text" placeholder='Enter Task...' className='form-control' onChange={event => setTask(event.target.value)} value={task} />

                                <button type="button" class="btn btn-primary w-100 mt-3" onClick={() => {
                                    setNotes([...notes, task])
                                    reset()
                                }
                                }>
                                    Add Task
                                </button>
                            </div>
                        </div>

                        <ul class="list-group mt-3">
                            {
                                notes.map(item => {
                                    return <li class="list-group-item d-flex justify-content-between align-items-center">
                                        {item}
                                        <button type="button" class="btn btn-danger" onClick={() => handleDelete(item)}>
                                            Delete
                                        </button>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList