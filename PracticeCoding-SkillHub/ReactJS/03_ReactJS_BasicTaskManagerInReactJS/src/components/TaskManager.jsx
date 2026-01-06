import React, { useState } from 'react'

const TaskManager = () => {
    const [task, setTask] = useState("")
    const [notesArr, setNotesArr] = useState([])

    const reset = () => {
        setTask("")
    }

    const handleRemove = note => {
        setNotesArr(notesArr.filter(item => item !== note))
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div class="card mt-3">
                            <div class="card-header alert alert-warning fs-3 text-center">
                                Task Manager
                            </div>
                            <div class="card-body">
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter the task...'
                                    value={task}
                                    onChange={event => setTask(event.target.value)}
                                />
                                <button
                                    type="button"
                                    class="btn btn-primary w-100 mt-3"
                                    onClick={() => { setNotesArr([...notesArr, task]); reset() }}
                                >
                                    Add Task
                                </button>
                            </div>
                        </div>
                        <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    notesArr.map(item => <tr>
                                        <td>{item}</td>
                                        <td>
                                            <button
                                                type="button"
                                                class="btn btn-danger w-100"
                                                onClick={() => handleRemove(item)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TaskManager