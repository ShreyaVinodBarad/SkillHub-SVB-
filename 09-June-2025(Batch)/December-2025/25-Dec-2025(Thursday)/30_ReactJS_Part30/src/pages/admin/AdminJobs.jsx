import React from 'react'
import { useGetCompaniesQuery, useTpoJobsQuery } from "../../redux/apis/tpo.api"
import Card from "../../components/UI/Card"
const AdminJobs = () => {
    const { data } = useTpoJobsQuery()
    const { data: companyData } = useGetCompaniesQuery()

    const getCompanyById = id => companyData.find(item => item.id === id)
    return (
        <div className='container'>
            <div className="row">
                {
                    data && companyData && data.map(item => <div className='col-sm-12 my-3'>
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