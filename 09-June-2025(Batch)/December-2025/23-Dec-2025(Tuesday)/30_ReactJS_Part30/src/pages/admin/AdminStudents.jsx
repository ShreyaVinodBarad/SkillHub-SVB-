import React from 'react'
import Input from "../../components/UI/Input"
import { useFormik } from 'formik'
import * as yup from "yup"
import { handleClasses } from '../../shared/utility'
import { useAddStudentMutation, useDeleteStudentMutation, useGetStudentsQuery } from '../../redux/apis/tpo.api'
import { toast } from 'react-toastify'
const AdminStudents = () => {
    const [addStudent, { isLoading }] = useAddStudentMutation()
    const { data } = useGetStudentsQuery()
    const [removeStudent, { isLoading: deleteIsLoading }] = useDeleteStudentMutation()
    const fields = [
        { label: "name", placeholder: "Enter Name...", type: "text" },
        { label: "email", placeholder: "Enter Email...", type: "email" },
        { label: "mobile", placeholder: "Enter Mobile Number...", type: "number" },
        { label: "education", placeholder: "Enter Education...", type: "text" },
        { label: "skills", placeholder: "Enter Skills...", type: "text" }
    ]
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            education: "",
            skills: ""
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            mobile: yup.string().required(),
            education: yup.string().required(),
            skills: yup.string().required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                console.log(values)
                await addStudent(
                    {
                        ...values,
                        role: "student",
                        password: values.name + `@123`
                    }
                ).unwrap()
                toast.success("Student Register Success!")
            } catch (error) {
                toast.error(error ? error.message : "Unable to Register!")
            } finally {
                resetForm()
            }
        }
    })
    const handleRemove = async id => {
        try {
            await removeStudent(id).unwrap()
            toast.success("Student Delete Success!")
        } catch (error) {
            toast.error(error ? error.message : "Unable to Delete Student!")
        }
    }
    return (
        <div className='container mt-3'>
            <div className="text-end">
                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#stud"
                >
                    + Add Student
                </button>
            </div>

            {
                data && <table class="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Education</th>
                            <th>Skills</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.education}</td>
                                <td>{item.skills}</td>
                                <td className='d-flex justify-content-center gap-3'>
                                    <button
                                        type="button"
                                        class="btn btn-warning"
                                    >
                                        <bi className="bi bi-pencil"></bi>
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        {
                                            deleteIsLoading
                                                ? <div class="spinner-border text-primary"></div>
                                                : <bi className="bi bi-trash"></bi>
                                        }
                                    </button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            }

            {/* Modal Start */}
            <div class="modal fade" id="stud">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Students</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={formik.handleSubmit}>
                                {
                                    fields.map(item =>
                                        <Input
                                            {...item}
                                            className={handleClasses(formik, item.label)}
                                            {...formik.getFieldProps(item.label)}
                                        />
                                    )
                                }
                                <div className='d-flex gap-3'>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal End */}
        </div>
    )
}

export default AdminStudents