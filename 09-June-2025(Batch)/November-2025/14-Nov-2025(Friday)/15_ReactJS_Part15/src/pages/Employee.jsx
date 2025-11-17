import { useFormik } from 'formik'
import * as yup from "yup"
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import axios from 'axios'
import { toast } from 'react-toastify'

const Employee = () => {

    const URL = "http://localhost:5000/employees"

    const [allEmployees, setAllEmployees] = useState([])

    const [selectedEmployee, setSelectedEmployee] = useState()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedEmployee ? selectedEmployee.name : "",
            email: selectedEmployee ? selectedEmployee.email : "",
            mobile: selectedEmployee ? selectedEmployee.mobile : "",
            photo: selectedEmployee ? selectedEmployee.photo : "",
            role: selectedEmployee ? selectedEmployee.role : ""
        }, // 👆 Runs only on Page Load
        // 👆 With enableReinitialize: true => it runs when there change in state
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            mobile: yup.string().required().min(1).max(10),
            photo: yup.string().required(),
            role: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            selectedEmployee ? updateEmployee() : createEmployee()
            resetForm()
        }
    })

    const handleClasses = key => clsx({
        "form-control mt-3": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key]
    })

    const createEmployee = async () => {
        try {
            await axios.post(URL, formik.values)
            toast.success("Employee Created Successfully!")
            readEmployee()
        }
        catch (err) {
            toast.error(err)
        }
    }

    const readEmployee = async () => {
        try {
            const { data } = await axios.get(URL)
            console.log(data)
            setAllEmployees(data)
        }
        catch (err) {
            toast.error(err)
        }
    }

    const updateEmployee = async () => {
        try {
            await axios.patch(`${URL}/${selectedEmployee.id}`, formik.values)
            toast.success("Employee Updated Successfully!")
            setSelectedEmployee(null)
            readEmployee()
        }
        catch (err) {
            toast.error(err)
        }
    }

    const deleteEmployee = async id => {
        try {
            await axios.delete(`${URL}/${id}`)
            toast.success("Employee Deleted Successfully!")
            readEmployee()
        }
        catch (err) {
            toast.error(err)
        }
    }

    useEffect(() => {
        readEmployee()
    }, [])

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 offset-sm-1">
                            <div class="card mt-3">
                                <div class="card-header alert alert-warning text-center fs-4">
                                    Formik Employee Management
                                </div>
                                <div class="card-body">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder='Enter name...'
                                            className={handleClasses("name")}
                                            {...formik.getFieldProps("name")}
                                        />
                                        <span
                                            className='invalid-feedback'
                                        >
                                            {formik.errors.name}
                                        </span>
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder='Enter email...'
                                            className={handleClasses("email")}
                                            {...formik.getFieldProps("email")}
                                        />
                                        <span
                                            className='invalid-feedback'
                                        >
                                            {formik.errors.email}
                                        </span>
                                    </div>

                                    <div>
                                        <input
                                            type="number"
                                            placeholder='Enter mobile...'
                                            className={handleClasses("mobile")}
                                            {...formik.getFieldProps("mobile")}
                                        />
                                        <span
                                            className='invalid-feedback'
                                        >
                                            {formik.errors.mobile}
                                        </span>
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder='Add photo..'
                                            className={handleClasses("photo")}
                                            {...formik.getFieldProps("photo")}
                                        />
                                        <span
                                            className='invalid-feedback'
                                        >
                                            {formik.errors.photo}
                                        </span>
                                    </div>

                                    <div>
                                        <select
                                            class="form-select"
                                            className={handleClasses("role")}
                                            {...formik.getFieldProps("role")}
                                        >
                                            <option value="">
                                                Choose Role
                                            </option>
                                            <option value="FrontendDev">
                                                Frontend Dev
                                            </option>
                                            <option value="BackendDev">
                                                Backend Dev
                                            </option>
                                            <option value="Dev Ops Enginner">
                                                Dev Ops Enginner
                                            </option>
                                        </select>
                                        <span
                                            className='invalid-feedback'
                                        >
                                            {formik.errors.role}
                                        </span>

                                        {
                                            selectedEmployee
                                                ? <div>
                                                    <button type="submit" class="btn btn-warning w-100 my-3">
                                                        Update Employee
                                                    </button>
                                                    <button type="submit" class="btn btn-danger w-100 mt-1" onClick={() => setSelectedEmployee(null)}>
                                                        Cancle Update Employee
                                                    </button>
                                                </div>
                                                : <button type="submit" class="btn btn-primary w-100 my-3">
                                                    Add Employee
                                                </button>
                                        }

                                    </div>
                                </div>
                            </div>
                            <table class="table table-bordered mt-3">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Number</th>
                                        <th>Photo</th>
                                        <th>Role</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allEmployees.map(item => {
                                            return <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    {item.email}
                                                </td>
                                                <td>{item.mobile}</td>
                                                <td><img src={item.photo} height={80} width={80} /></td>
                                                <td>{item.role}</td>
                                                <td className='d-flex justifiy-content-center align-items-center gap-3 flex-column'>
                                                    <button type="button" class="btn btn-warning" onClick={() => setSelectedEmployee(item)}>
                                                        <i className="bi bi-pencil"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-danger" onClick={() => deleteEmployee(item.id)}>
                                                        <i className="bi bi-trash">
                                                        </i>
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
            </form>
        </div>
    )
}

export default Employee