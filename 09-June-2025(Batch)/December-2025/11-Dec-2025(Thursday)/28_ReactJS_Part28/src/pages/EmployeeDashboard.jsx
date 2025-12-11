import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeToDo, readEmployeeToDo } from "../redux/actions/employee.actions"
import Center from "../components/Center"
import { toast } from 'react-toastify'
const EmployeeDashboard = () => {
    const { employeeToDos, updateSuccess, loading, error } = useSelector(state => state.employee)
    const { employee } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(readEmployeeToDo(employee.id))
    }, [])

    useEffect(() => {
        if (updateSuccess) {
            toast.success("Task Complete!")
            dispatch(readEmployeeToDo(employee.id))
        }
    }, [updateSuccess])

    return (
        <div>
            <Center>
                <table class="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            {/* <th>Employee</th> */}
                            <th>Task</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Complete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employeeToDos && employeeToDos.map(item => {
                                return <tr>
                                    <td>{item.id}</td>
                                    {/* <td>{item.employee}</td> */}
                                    <td>{item.task}</td>
                                    <td>{item.description}</td>
                                    <td>{item.priority}</td>
                                    <td className='text-center'>
                                        {
                                            item.complete
                                                ? <span class="badge text-bg-success">Complete</span>
                                                : <button type="button" class="btn btn-primary" onClick={() => dispatch(completeToDo({ id: item.id, complete: true }))}>Mark Complete</button>
                                        }
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </Center>
        </div>
    )
}

export default EmployeeDashboard