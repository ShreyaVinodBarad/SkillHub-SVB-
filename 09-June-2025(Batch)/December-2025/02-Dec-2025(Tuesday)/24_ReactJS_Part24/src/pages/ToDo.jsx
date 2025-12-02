import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createToDo, deleteToDo } from '../redux/actions/toDoActions'

const ToDo = () => {
    const [task, setTask] = useState("")
    const dispatch = useDispatch()
    //       👇 from todoReducer                  👇 from combinerReducer
    const { notes } = useSelector(state => state.todo)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div class="card mt-3">
                            <div class="card-body">
                                <input type="text" className='form-control' onChange={event => setTask(event.target.value)} />
                                <button type="button" class="btn btn-primary mt-3 w-100" onClick={() => dispatch(createToDo(task))}>
                                    Add
                                </button>
                            </div>
                        </div>
                        <ul class="list-group mt-3">
                            {
                                notes.map(item => <li class="list-group-item d-flex justify-content-between">{item}
                                    <button type="button" class="btn btn-danger" onClick={() => dispatch(deleteToDo(item))}>Delete</button>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDo