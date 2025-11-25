import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { URL } from '../shared/utility'
import { AuthContext } from '../App'

const EmployeeDashboard = () => {
    const [allEmployeeToDos, setAllEmployeeToDos] = useState([])
    const { auth } = useContext(AuthContext)
    const readToDos = async () => {
        try {
            const { data } = await axios.get(`${URL}/todos`, { params: { emp: auth.id } })
            setAllEmployeeToDos(data)
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }


    const handleComplete = async (id, status) => {
        try {
            await axios.patch(`${URL}/todos/${id}`, { complete: status })
            toast.success("To - Do Complete Success!")
            readToDos()
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }

    useEffect(() => {
        readToDos()
    }, [])

    return (
        <div>
            <h4 className='alert alert-primary text-center mt-3'>
                Employee Dashboard
            </h4>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <table class="table table-bordered">
                            <thead>
                                <tr className='text-center'>
                                    <th>#</th>
                                    <th>Task</th>
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Complete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allEmployeeToDos.map(item => {
                                        return <tr className={`${item.complete ? "table-success" : "table-danger"}`}>
                                            <td>{item.id}</td>
                                            <td>{item.task}</td>
                                            <td>{item.desc}</td>
                                            <td>{item.priority}</td>
                                            <td className='text-center'>
                                                {
                                                    item.complete
                                                        ? <button type="button" class="btn btn-danger" onClick={() => handleComplete(item.id, false)}>
                                                            Mark InComplete
                                                        </button>
                                                        : <button type="button" class="btn btn-success" onClick={() => handleComplete(item.id, true)}>
                                                            Mark Complete
                                                        </button>
                                                }

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

export default EmployeeDashboard