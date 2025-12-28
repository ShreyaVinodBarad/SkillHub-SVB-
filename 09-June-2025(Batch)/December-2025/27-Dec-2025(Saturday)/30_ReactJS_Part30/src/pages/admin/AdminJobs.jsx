import React from 'react'
import { useGetCompaniesQuery, useGetStudentsQuery, useTpoApplicationsQuery, useTpoJobsQuery } from "../../redux/apis/tpo.api"
import Card from "../../components/UI/Card"
const AdminJobs = () => {
    const { data } = useTpoJobsQuery()
    const { data: companyData } = useGetCompaniesQuery()
    const { data: applicationData } = useTpoApplicationsQuery()
    const { data: studentData } = useGetStudentsQuery()
    const getCompanyById = id => companyData.find(item => item.id === id)

    const getStudentInfo = jobId => {
        return applicationData
            .filter(app => app.jid === jobId)
            .map(app => app.sid)
            .map(i => studentData.find(stud => stud.id === i))
    }

    const getStatus = status => {
        switch (status) {
            case "Hire":
                return <span class="badge text-bg-success">Hire</span>
            case "Pending":
                return <span class="badge text-bg-warning">Pending</span>
            case "Reject":
                return <span class="badge text-bg-danger">Rejected</span>
            default:
                break;
        }
    }

    return (
        <div className='container'>
            <div className="row">
                {
                    data && studentData && applicationData && companyData && data.map(item => <div className='col-sm-12 my-3'>
                        <Card showFooter={false} showHeader={false}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <h6>{item.title}</h6>
                                    <div>{item.desc}</div>
                                    <div>{item.skills}</div>
                                    <div>Salary: {item.salary}</div>
                                    <div>Location: {item.location}</div>
                                    <div>Experience: {item.experience}</div>
                                    <div>Job Type: {item.type}</div>
                                    <div>
                                        {
                                            item.publish
                                                ? <span class="badge text-bg-success">Publish</span>
                                                : <span class="badge text-bg-danger">Un-Publish</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-sm-4 text-center">
                                    <h6>Company Details</h6>
                                    <div>
                                        <img
                                            src={getCompanyById(item.company).logo}
                                            alt=""
                                            style={{ height: "60px", borderRadius: "50%" }}
                                        />
                                    </div>
                                    <div>
                                        Name: {getCompanyById(item.company).name}
                                    </div>
                                    <div>
                                        Email: {getCompanyById(item.company).email}
                                    </div>
                                </div>
                                <div className="col-sm-4 text-center">
                                    <h6>Applications</h6>
                                    {
                                        getStudentInfo(item.id).map(stud => <div>
                                            <div class="card mt-3">
                                                <div class="card-body d-flex justify-content-between">
                                                    {stud.name}
                                                    {
                                                        getStatus(
                                                            applicationData
                                                                .find(app => app.sid === stud.id && app.jid === item.id)
                                                                .status
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>
                            </div>
                        </Card>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default AdminJobs