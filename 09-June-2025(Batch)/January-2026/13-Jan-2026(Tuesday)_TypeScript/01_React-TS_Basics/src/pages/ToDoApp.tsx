import { useState } from "react"

const ToDoApp = () => {

    type TODO = {
        task: string,
        desc: string,
        priority: string

        complete?: boolean,
        id?: number
        // 👆 complete and id are optional keys, it can be used not not used. So used ? so errors can be avoided.
    }

    const [allToDos, setAllToDos] = useState<TODO[]>([])
    const [note, setNote] = useState<TODO>({
        task: "",
        desc: "",
        priority: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = event.target
        // console.log(event.target.value)
        // console.log(name, value)
        setNote({ ...note, [name]: value })
    }

    const handleDelete = (id: number) => {
        setAllToDos(allToDos.filter(item => item.id !== id))
    }

    const handleUpdate = (id: number, complete: boolean) => {
        const copy = [...allToDos]
        const indexNumber = allToDos.findIndex(item => item.id === id)
        copy[indexNumber].complete = complete
        setAllToDos(copy)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Task..."
                // onChange={event => handleChange} 👉 Hover over the event then you cam get ChangeEvent<HTMLInputElement> etc, just add React in that, i.e.; React.ChangeEvent<HTMLInputElement> for all inputs like input, text area, select...
                onChange={handleChange}
                name="task"
            />

            <textarea
                placeholder="Enter Description..."
                onChange={handleChange}
                name="desc"
            >
            </textarea>

            <select
                onChange={handleChange}
                name="priority"
            >
                <option value="">Choose Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <button
                type="submit"
                onClick={() => setAllToDos([...allToDos, { ...note, id: allToDos.length + 1 }])}
            >
                Create
            </button>

            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Complete</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allToDos.map(item => <tr>
                            <td>{item.id}</td>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>{item.complete ? "Yes" : "No"}</td>
                            <td>
                                {
                                    item.complete
                                        ? <button
                                            onClick={() => handleUpdate(item.id as number, false)}
                                        >
                                            Mark in Complete
                                        </button>
                                        : <button
                                            onClick={() => handleUpdate(item.id as number, true)}
                                        >
                                            Mark Complete
                                        </button>
                                }
                                <button
                                    onClick={() => handleDelete(item.id as number)}
                                // 👆 No sure what is in item but we are confirming it the id has the data type as number and id will for sure be there
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ToDoApp