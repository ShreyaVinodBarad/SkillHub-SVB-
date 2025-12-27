import React from 'react'
import * as yup from "yup"
import { useFormik } from 'formik'
import Input from '../../components/UI/Input'
import { handleClasses } from '../../shared/utility'

const CompanyJobs = () => {
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
            title: "",
            desc: "",
            skills: "",
            salary: "",
            experience: "",
            location: "",
            type: ""
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
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

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
                                {
                                    fields.map(item => <Input
                                        {...item}
                                        className={handleClasses(formik, item.label)}
                                        {...formik.getFieldProps(item.label)}
                                        invalidFeedback={formik.errors[item.label]}
                                    />
                                    )
                                }
                                <div className="d-flex gap-3">
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

export default CompanyJobs