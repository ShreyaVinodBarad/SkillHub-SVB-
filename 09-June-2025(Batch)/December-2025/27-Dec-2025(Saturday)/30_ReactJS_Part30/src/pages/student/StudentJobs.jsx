import React from 'react'
import { useApplyJobMutation, useCheckApplyQuery, useLazyCheckApplyQuery, useReadStudentCompanyQuery, useReadStudentJobQuery } from "../../redux/apis/student.api"
import { useSelector } from 'react-redux'
const StudentJobs = () => {
    const { data: applicationData } = useCheckApplyQuery()
    const { data } = useReadStudentJobQuery()
    const { data: companyData } = useReadStudentCompanyQuery()
    const [applyJob] = useApplyJobMutation()

    const { student } = useSelector(state => state.auth)

    const findById = id => companyData.find(item => item.id === id)

    const handleJobApply = async jobId => {
        try {
            await applyJob({ sid: student.id, jid: jobId, status: "Pending" }).unwrap()
            toast.success("Job Apply Success!")
        } catch (error) {
            error ? error.message : "Unable to Apply Job!"
        }
    }
    return (
        <>
            {/* 
            <button
                type="button"
                class="btn btn-primary"
                onClick={() => checkApply({ sid: 1, jid: 1 })}
            >
                Check
            </button>
            If student id and job id matches in applications database than on button click it will return true
             */}
            <div className="container">
                <div className="row">
                    {
                        data && companyData && data.map(item => <div className='col-sm-12 mt-3'>
                            <div class="card">
                                <div
                                    class="card-header d-flex justify-content-between fs-5"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#job-${item.id}`}
                                >
                                    {item.title} by {findById(item.company).name}

                                    {
                                        applicationData.find(app => app.sid === student.id && app.jid === item.id)
                                            ? <h5 class="alert alert-primary">
                                                Already Applied!
                                            </h5>
                                            : <button
                                                type="button"
                                                class="btn btn-primary"
                                                onClick={() => handleJobApply(item.id)}
                                            >
                                                Apply
                                            </button>
                                    }


                                </div>
                                <div className="collapse" id={`job-${item.id}`}>
                                    <div class="card-body">
                                        <div>{item.desc}</div>
                                        <div>Salary: {item.salary}</div>
                                        <div>Skills: {item.skills}</div>
                                        <div>Location: {item.location}</div>
                                        <div>Experience: {item.experience}</div>
                                        <div>Job Type: {item.type}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default StudentJobs