import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const BasicToDo = () => {
    const [task, setTask] = useState("")
    const [desc, setDesc] = useState("")
    const [priority, setPriority] = useState("")
    const [allToDo, setAllToDo] = useState([])
    const URL = "http://localhost:5000/notes"
    const readToDo = async () => {
        try {
            const { data } = await axios.get(URL)
            // console.log(data)
            setAllToDo(data)
        }
        catch (err) {
            console.log(err)
        }
    }
    const createToDo = async () => {
        try {
            await axios.post(URL, { task, desc, priority })
            readToDo()
            toast.success("ToDo Created Successfully!")
            reset()
        }
        catch (err) {
            console.log(err)
        }
    }
    const deleteToDo = async id => {
        try {
            await axios.delete(`${URL}/${id}`)
            readToDo()
            toast.success("ToDo Deleted Successfully!")
        }
        catch (err) {
            console.log(err)
        }
    }
    const reset = () => {
        setTask("")
        setDesc("")
        setPriority("")
    }
    useEffect(() => { readToDo() }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div class="card mt-3">
                            <div class="card-header alert alert-warning fs-3 text-center">
                                ToDo
                            </div>
                            <div class="card-body">
                                <input type="text" className='form-control' onChange={event => setTask(event.target.value)} value={task} />
                                <textarea className='form-control mt-3' onChange={event => setDesc(event.target.value)} value={desc}></textarea>
                                <select class="form-select mt-3" onChange={event => setPriority(event.target.value)} value={priority}>
                                    <option value="">Choose Priority</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                                <button type="button" class="btn btn-primary w-100 mt-3" onClick={createToDo}>
                                    Add
                                </button>
                            </div>
                        </div>
                        <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Task</th>
                                    <th>Desc</th>
                                    <th>Priority</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allToDo.map(item => {
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.task}</td>
                                            <td>{item.desc}</td>
                                            <td>{item.priority}</td>
                                            <td className='d-flex justify-content-center align-items-center gap-3'>
                                                <button type="button" class="btn btn-warning">
                                                    Edit
                                                </button>
                                                <button type="button" class="btn btn-danger" onClick={() => deleteToDo(item.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicToDo
/*
1) key Prop:
- The key prop in React is used to uniquely identify elements in a list.
a) Use / Purpose:
- Helps React identify which items have changed, been added, or removed.
- Makes re-rendering faster and avoids bugs when updating lists.
---------------------------------------------------------------
*/ 