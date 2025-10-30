import React, { useState } from 'react'

const ToDo = () => {
    const [task, setTask] = useState("")
    const [notes, setNotes] = useState([])
    const handleRemove = note => {
        // console.log(note)
        setNotes(notes.filter(item => item !== note))
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-body">
                            <input type="text" placeholder='Enter your Task...' onChange={event => setTask(event.target.value)} className='form-control mb-3' />
                            {/*                             Copy 👇    👇 Push Operation */}
                            <button onClick={() => setNotes([...notes, task])} className='btn btn-success w-100'>Add</button>
                            <ul className='list-group mt-3'>
                                {notes.map(item =>
                                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                                        {item}
                                        <button onClick={() => handleRemove(item)} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDo
/*
1) You can use the useState snippet to quickly create a ready-made useState statement.
When you hover your cursor over the variable name, you can rename it as you like.
Then, press Tab — the first letter of the variable will automatically become capitalized, and the cursor will move to the useState() brackets, where you can initialize the variable’s value.
We can import useState by taking the cursor to the start of () and ctrl + space, then click on useState.
*/ 