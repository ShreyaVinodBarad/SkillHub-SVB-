import React from 'react'
import { useGetCompaniesQuery, useHandleCompanyMutation } from '../../redux/apis/tpo.api'
import { toast } from 'react-toastify'

const AdminCompany = () => {
    const { data } = useGetCompaniesQuery()
    const [handleCompany, { isLoading }] = useHandleCompanyMutation()
    const handleBlockAndUnblockCompany = async companyData => {
        try {
            await handleCompany(companyData).unwrap()
            toast.success("Company Stauts Update Successfully!")
        } catch (error) {
            toast.error(error ? error.message : "Unable to Update Status!")
        }
    }
    return (
        <div className='container'>
            {
                data && <table class="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Logo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <tr className={`
                            ${item.active ? "table-success" : "table-danger"}
                            `} >
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.address}</td>
                                <td className='text-center'>
                                    <img
                                        src={item.logo}
                                        alt="logo"
                                        style={{ height: "60px", borderRadius: "50%" }}
                                    />
                                </td>
                                <td className='text-center'>
                                    {
                                        item.active
                                            ? <button
                                                type="button"
                                                class="btn btn-danger"
                                                onClick={() => handleBlockAndUnblockCompany({ ...item, active: false })}
                                            >
                                                Block
                                            </button>
                                            : <button
                                                type="button"
                                                class="btn btn-success"
                                                onClick={() => handleBlockAndUnblockCompany({ ...item, active: true })}
                                            >
                                                UnBlock
                                            </button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div >
    )
}

export default AdminCompany