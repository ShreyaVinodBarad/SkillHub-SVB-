import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { handleClasses, URL } from '../shared/utility'
import { toast } from 'react-toastify'
import axios from 'axios'
import * as yup from "yup"

const AdminEmployee = () => {
    const [allEmployee, setAllEmployee] = useState([])
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            profileImg: "",
            employeeType: ""
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            mobile: yup.string().required(),
            profileImg: yup.string().required(),
            employeeType: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            createEmployee()
            readEmployee()
            resetForm()
        }
    })

    const createEmployee = async () => {
        try {
            // const empData = { password: `${formik.values.name}@123`, role: "employee", active: true }
            // await axios.post(`${URL}/users`, { ...formik.values, ...empData })
            const empData = {
                ...formik.values,
                password: `${formik.values.name}@123`,
                role: "employee",
                active: true
            }
            await axios.post(`${URL}/users`, empData)
            toast.success("Employee Create Success!")
        } catch (err) {
            toast.error(err)
        }
    }

    const readEmployee = async () => {
        try {
            const { data } = await axios.get(`${URL}/users`, { params: { role: "employee" } })
            // 👆 To avoid Admin details in this table.
            setAllEmployee(data)
        } catch (err) {
            toast.error(err)
        }
    }

    const handleActive = async (id, status) => {
        try {
            await axios.patch(`${URL}/users/${id}`, { active: status })
            readEmployee()
            toast.success("Employee Update Success!")
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        readEmployee()
    }, [])

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 offset-sm-1">
                            <div class="card mt-3">
                                <div class="card-header alert alert-warning fs-4 text-center">
                                    Register Employee
                                </div>
                                <div class="card-body">
                                    <div>
                                        <input
                                            type="text"
                                            class={handleClasses(formik, "name")}
                                            placeholder="Enter your name"
                                            {...formik.getFieldProps("name")}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">
                                            {formik.errors.name}
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <input
                                            type="text"
                                            class={handleClasses(formik, "email")}
                                            placeholder="Enter Your Email"
                                            {...formik.getFieldProps("email")}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">
                                            {formik.errors.email}
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <input
                                            type="number"
                                            class={handleClasses(formik, "mobile")}
                                            placeholder="Enter Your Mobile Number"
                                            {...formik.getFieldProps("mobile")}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">
                                            {formik.errors.mobile}
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <input
                                            type="text"
                                            class={handleClasses(formik, "profileImg")}
                                            placeholder="Confirm Your Profile Image URL"
                                            {...formik.getFieldProps("profileImg")}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">
                                            {formik.errors.profileImg}
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <select
                                            className={handleClasses(formik, "employeeType")}
                                            {...formik.getFieldProps("employeeType")}
                                        >
                                            <option selected>
                                                Choose Employee Type
                                            </option>
                                            <option value="Intern">Intern</option>
                                            <option value="FrontEnd">FrontEnd</option>
                                            <option value="Backend">Backend</option>
                                            <option value="Devops">Devops</option>
                                        </select>
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">
                                            {formik.errors.employeeType}
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100 mt-3">
                                        Signup
                                    </button>
                                    {/* <p class="text-center mt-3">
                                    Already Have Account? <a href="#">Login</a>
                                </p> */}
                                </div>
                            </div>
                            <div className='table-responsive'>
                                <table class="table table-bordered table-responsive mt-3">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>ProfileImg</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile No.</th>
                                            <th>EmployeeType</th>
                                            <th>Role</th>
                                            <th>Active</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allEmployee.map(item => {
                                                return <tr className={item.active ? "table-success" : "table-danger"}>
                                                    <td>{item.id}</td>
                                                    <td><img
                                                        src={item.profileImg}
                                                        alt=""
                                                        style={{ height: "150px", width: "100px", objectFit: "contain" }} /></td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.mobile}</td>
                                                    <td>{item.employeeType}</td>
                                                    <td>{item.role}</td>
                                                    <td>{item.active ? "Active" : "In-Active"}</td>
                                                    <td className='d-flex justify-content-center align-items-center gap-3 flex-column'>
                                                        {
                                                            item.active
                                                                ? <button type="button" class="btn btn-danger w-100" onClick={() => handleActive(item.id, false)}>
                                                                    Block
                                                                </button>
                                                                : <button type="button" class="btn btn-success w-100" onClick={() => handleActive(item.id, true)}>
                                                                    UnBlock
                                                                </button>
                                                        }
                                                        <button type="button" class="btn btn-warning w-100">
                                                            Edit
                                                        </button>
                                                        <button type="button" class="btn btn-danger w-100">
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
            </form>
        </div >
    )
}

export default AdminEmployee