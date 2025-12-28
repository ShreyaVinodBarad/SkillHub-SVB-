import React from 'react'
import Card from "../../components/UI/Card"
import { useSelector } from 'react-redux'
import { useCompanyJobQuery, useGetCompanyApplicationQuery, useGetCompanyStudentsQuery, useUpdateApplicationMutation } from '../../redux/apis/company.api'
import { toast } from 'react-toastify'
const CompanyApplication = () => {
    const { company } = useSelector(state => state.auth)
    const { data } = useCompanyJobQuery(company.id)

    const { data: applicationData } = useGetCompanyApplicationQuery()
    const { data: studentData } = useGetCompanyStudentsQuery()

    const [updateApplication] = useUpdateApplicationMutation()

    const getStudentInfo = jobId => {
        return applicationData
            .filter(app => app.jid === jobId)
            .map(app => app.sid)
            .map(i => studentData.find(stud => stud.id === i))
        /*
        .map(i =>
            <li className="list-unstyled">
                {
                    studentData.find(stud => stud.id === i).name
                }
            </li>
        )
        applicationData.find(app => app.jid === item.id).sid // Printing value present in the key sid
        applicationData.find(app => app.jid === item.id) => Returns an Object
        */
    }

    const handleStatus = async appData => {
        try {
            await updateApplication(appData).unwrap()
            toast.success("Application Status Update Success!")
        } catch (error) {
            toast.error(error ? error.message : "Unable to Update Application Status!")
        }
    }

    return (
        <div className='container'>
            <div className="row">
                {
                    data && applicationData && data.map(item => <div className='col-sm-12 mt-3'>
                        <Card showHeader={false} showFooter={false} >
                            <div className="row">
                                <div className="col-sm-6">
                                    <div>
                                        <h3>Jobs</h3>
                                        <span className='fs-4'>
                                            {item.id}
                                        </span>:
                                        <span className='fs-5'>
                                            {item.title}
                                        </span>
                                    </div>
                                    <div>
                                        {item.desc}
                                    </div>
                                </div>
                                <div className="col-sm-6 text-center">
                                    <h3>Applications</h3>
                                    {
                                        getStudentInfo(item.id).map(stud => <ul className='alert alert-primary list-unstyled'>
                                            <li>
                                                Name: {stud.name}
                                            </li>
                                            <li>
                                                Skills: {stud.skills}
                                            </li>
                                            <li>
                                                Education: {stud.education}
                                            </li>
                                            <select class="form-select mt-3" onChange={event => handleStatus(
                                                {
                                                    id: applicationData.find(a => a.sid === stud.id && a.jid === item.id).id,
                                                    status: event.target.value
                                                }
                                            )}>
                                                <option selected>Status</option>
                                                <option value="Hire">
                                                    Hire
                                                </option>
                                                <option value="Reject">
                                                    Reject
                                                </option>
                                            </select>
                                        </ul>
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

export default CompanyApplication