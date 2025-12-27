import React from 'react'
import * as yup from "yup"
import { useFormik } from 'formik'
import Input from '../../components/UI/Input'
import { handleClasses } from '../../shared/utility'
import { useCompanyJobQuery, useCreateJobMutation, useDeleteJobMutation, useUpdateJobMutation } from '../../redux/apis/company.api'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const CompanyJobs = () => {
    const { company } = useSelector(state => state.auth)
    const { data } = useCompanyJobQuery(company.id)
    const [createJob] = useCreateJobMutation()
    const [updateJob] = useUpdateJobMutation()
    const [deleteJob] = useDeleteJobMutation()


    const fields = [
        { label: "title", placeholder: "Enter Title...", type: "text" },
        { label: "desc", placeholder: "Enter Description...", type: "text" },
        { label: "skills", placeholder: "Enter Skills...", type: "text" },
        { label: "salary", placeholder: "Enter Salary...", type: "number" },
        { label: "experience", placeholder: "Enter Experience...", type: "number" },
        { label: "location", placeholder: "Enter Location...", type: "text" },
        { label: "type", placeholder: "Enter Job Type...", type: "text" }
    ]

    const formik = useFormik({
        initialValues: {
            title: "Frontend Developer",
            desc: "Designing the Frontend of the Website",
            skills: "HTML, CSS, BootStrap, ReactJS",
            salary: "80000",
            experience: "2.5",
            location: "Hyderabad",
            type: "Full-Time"
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            desc: yup.string().required(),
            skills: yup.string().required(),
            salary: yup.string().required(),
            experience: yup.string().required(),
            location: yup.string().required(),
            type: yup.string().required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await createJob(
                    {
                        ...values,
                        publish: false,
                        company: company.id
                    }
                ).unwrap()
                console.log(values)
                toast.success("Job Create Success!")
            } catch (error) {
                toast.error(error ? error.message : "Unable to Create New Job!")
            } finally {
                resetForm()
            }
        }
    })

    const handleRemoveJob = async id => {
        try {
            await deleteJob(id).unwrap()
            toast.success("Job Delete Success!")
        } catch (error) {
            toast.error(error ? error.message : "Unable to Delete Job!")
        }
    }

    const handleJobStatus = async jobData => {
        try {
            await updateJob(jobData).unwrap()
            toast.success("Job Update Success!")
        } catch (error) {
            toast.error(error ? error.message : "Unable to Update New Job!")
        }
    }

    return (
        <div className='container mt-3'>
            <div className="text-end">
                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#job"
                >
                    + Post New Job
                </button>
            </div>

            {
                data && <table class="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Skills</th>
                            <th>Salary</th>
                            <th>Experience</th>
                            <th>Location</th>
                            <th>Job Type</th>
                            <th>Publish</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.desc}</td>
                                <td>{item.skills}</td>
                                <td>{item.salary}</td>
                                <td>{item.experience}</td>
                                <td>{item.location}</td>
                                <td>{item.type}</td>
                                <td>
                                    {
                                        item.publish
                                            ? "Publish"
                                            : "Un-Publish"
                                    }
                                </td>
                                <td className='d-flex flex-column gap-3'>
                                    {
                                        item.publish
                                            ? <button
                                                type="button"
                                                class="btn btn-danger"
                                                onClick={() => handleJobStatus({ ...item, publish: false })}
                                            >
                                                Un-Publish
                                            </button>
                                            : <button
                                                type="button"
                                                class="btn btn-success"
                                                onClick={() => handleJobStatus({ ...item, publish: true })}
                                            >
                                                Publish
                                            </button>
                                    }
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        onClick={() => handleRemoveJob(item.id)}
                                    >
                                        <i className='bi bi-trash'></i>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }

            {/* Modal Start */}
            <div class="modal fade" id="job">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                New Job
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    {
                                        fields.map(item => <div className="col-sm-6">
                                            <Input
                                                {...item}
                                                className={handleClasses(formik, item.label)}
                                                {...formik.getFieldProps(item.label)}
                                                invalidFeedback={formik.errors[item.label]}
                                            />
                                        </div>
                                        )
                                    }
                                </div>
                                <button
                                    type="submit"
                                    class="btn btn-primary"
                                    data-bs-dismiss="modal"
                                >
                                    Add New Job
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
            {/* Modal End */}
        </div >
    )
}

export default CompanyJobs