import React, { useEffect } from 'react'
import Center from '../components/Center'
import { useFormik } from 'formik'
import * as yup from "yup"
import { handleClasses } from "./../shared/utility"
import { useDispatch, useSelector } from 'react-redux'
import { handleEmployeeAccount, readEmployee, registerEmployee } from '../redux/actions/admin.actions'
import { toast } from 'react-toastify'

const AdminEmployee = () => {
    const dispatch = useDispatch()
    // From Slice 👇
    const { success, loading, error, allEmployees, updateSuccess } = useSelector(state => state.admin)
    const formik = useFormik({
        initialValues: {
            photo: "",
            name: "",
            email: "",
            mobile: "",
            department: ""
        },
        validationSchema: yup.object({
            photo: yup.string().required(),
            name: yup.string().required(),
            email: yup.string().required(),
            mobile: yup.string().required(),
            department: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(registerEmployee({ ...values, role: "employee", active: true, password: `${values.name}@123` }))
            resetForm()
        }

    })
    useEffect(() => {
        if (success) {
            toast.success("Employee Create Success!")
        }
    }, [success])

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])


    useEffect(() => {
        if (updateSuccess) {
            toast.success("Employee Update Success!")
        }
    }, [updateSuccess])

    useEffect(() => {
        dispatch(readEmployee())
    }, [])
    useEffect(() => {
        if (success || updateSuccess) {
            dispatch(readEmployee())
        }
    }, [success, updateSuccess])
    return (
        <div>
            <Center>
                <div class="card mt-3">
                    <div class="card-header alert alert-warning text-center fs-4">Employee CRUD</div>
                    <div class="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Enter Photo URL...'
                                    className={handleClasses(formik, "photo")}
                                    {...formik.getFieldProps("photo")}
                                />
                                <div className='invalid-feedback'>
                                    {formik.errors.photo}
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Enter Name...'
                                    className={handleClasses(formik, "name")}
                                    {...formik.getFieldProps("name")}
                                />
                                <div className='invalid-feedback'>
                                    {formik.errors.name}
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Enter Email...'
                                    className={handleClasses(formik, "email")}
                                    {...formik.getFieldProps("email")}
                                />
                                <div className='invalid-feedback'>
                                    {formik.errors.email}
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Enter Mobile Number...'
                                    className={handleClasses(formik, "mobile")}
                                    {...formik.getFieldProps("mobile")}
                                />
                                <div className='invalid-feedback'>
                                    {formik.errors.mobile}
                                </div>
                            </div>
                            <div>
                                <select
                                    class="form-select"
                                    className={handleClasses(formik, "department")}
                                    {...formik.getFieldProps("department")}
                                >
                                    <option selected>
                                        Choose Role
                                    </option>
                                    <option value="Frontend">Frontend</option>
                                    <option value="Backend">Backend</option>
                                    <option value="Mobile App">
                                        Mobile App
                                    </option>
                                    <option value="Devops">
                                        Devops
                                    </option>
                                    <option value="UI/UX">
                                        UI/UX
                                    </option>
                                </select>
                                <div className='invalid-feedback'>
                                    {formik.errors.department}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-3">Create Employee</button>
                        </form>
                    </div>
                </div>
                <table class="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Photo</th>
                            <th>Department</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allEmployees && allEmployees.map(item => {
                                return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td className='text-center'>
                                        <img src={item.photo} alt="photo" style={{ height: "100px", objectFit: "contain" }} />
                                    </td>
                                    <td>{item.department}</td>
                                    <td>
                                        {
                                            item.active
                                                ? <span class="badge text-bg-success">Active</span>
                                                : <span class="badge text-bg-danger">In-Active</span>
                                        }
                                    </td>
                                    <td className='d-flex flex-column gap-3'>
                                        {
                                            item.active
                                                ? <button type="button" class="btn btn-danger" onClick={() => dispatch(handleEmployeeAccount({ id: item.id, active: false }))}>
                                                    Block
                                                </button>

                                                : <button type="button" class="btn btn-success" onClick={() => dispatch(handleEmployeeAccount({ id: item.id, active: true }))}>
                                                    UnBlock
                                                </button>
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

export default AdminEmployee